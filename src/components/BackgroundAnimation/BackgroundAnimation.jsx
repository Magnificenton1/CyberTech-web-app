import { useTheme } from "../Theme/useTheme";
import "./BackgroundAnimation.css";
import { useRef, useEffect, useState, useCallback } from "react";
import { gsap, Circ } from "gsap";
import useOnScreen from "../UseOnScreen/useOnScreen";
import throttle from 'lodash/throttle';
import { Quadtree, Rectangle } from './Quadtree'; // Import the classes

export const BackgroundAnimation = () => {
  const { theme } = useTheme();
  const canvasRef = useRef(null);
  const largeHeaderRef = useRef(null);
  const [ref, isVisible] = useOnScreen({ threshold: 0.1 });
  const [resizeFinished, setResizeFinished] = useState(false);
  const [firstLoad, setFirstLoad] = useState(true);

  const debounce = (func, wait) => {
    let timeout;
    return (...args) => {
      clearTimeout(timeout);
      timeout = setTimeout(() => func.apply(this, args), wait);
    };
  };

  const handleResize = useCallback(() => {
    setResizeFinished((prev) => !prev);
  }, []);

  useEffect(() => {
    const debouncedResizeHandler = debounce(handleResize, 500);

    if (!isVisible && !firstLoad) return;

    setFirstLoad(false);
    const width = window.innerWidth;
    const height = window.innerHeight;
    const target = { x: width / 2, y: height / 2 };
    let animateHeader = true;

    const largeHeader = largeHeaderRef.current;
    largeHeader.style.height = `${height}px`;

    const canvas = canvasRef.current;
    canvas.width = width;
    canvas.height = height;
    const ctx = canvas.getContext("2d");

    const points = [];
    const boundary = new Rectangle(width / 2, height / 2, width / 2, height / 2);
    const qtree = new Quadtree(boundary, 4);

    for (let x = 0; x < width; x += width / 8) {
      for (let y = 0; y < height - 30; y += height / 8) {
        const px = x + (Math.random() * width) / 8;
        const py = y + (Math.random() * (height - 30)) / 8; // Ensure points are not within 30px of the bottom
        const p = { x: px, y: py, originX: px, originY: py };
        points.push(p);
        qtree.insert(p);
      }
    }

    points.forEach(p1 => {
      const range = new Rectangle(p1.x, p1.y, width / 8, height / 8);
      const found = [];
      qtree.query(range, found);
      p1.closest = found.slice(0, 5);
      p1.circle = new Circle(p1, 3 + Math.random() * 5, "rgba(156,217,249,0.3)");
    });

    const handleMouseMove = throttle(mouseMove, 50);

    if (!("ontouchstart" in window)) {
      window.addEventListener("mousemove", handleMouseMove);
    }
    window.addEventListener("scroll", scrollCheck);
    window.addEventListener("resize", debouncedResizeHandler);

    function mouseMove(e) {
      const posx = e.clientX || e.pageX;
      const posy = e.clientY || e.pageY;
      target.x = posx;
      target.y = posy;
    }

    function scrollCheck() {
      animateHeader = document.body.scrollTop <= height;
    }

    function initAnimation() {
      animate();
      points.forEach(shiftPoint);
    }

    function animate() {
      if (animateHeader) {
        ctx.clearRect(0, 0, width, height);
        points.forEach(p => {
          const distance = getDistance(target, p);
          if (distance < 40000) {
            p.active = 0.6;
            p.circle.active = 0.6;
          } else if (distance < 80000) {
            p.active = 0.4;
            p.circle.active = 0.4;
          } else if (distance < 120000) {
            p.active = 0.3;
            p.circle.active = 0.3;
          } else {
            p.active = 0.2;
            p.circle.active = 0.2;
          }
          drawLines(p);
          p.circle.draw();
        });
      }
      requestAnimationFrame(animate);
    }

    function shiftPoint(p) {
      const xMovement = p.originX - 50 + Math.random() * 100;
      const yMovement = p.originY - 50 + Math.random() * 100;
      const newX = Math.max(0, Math.min(xMovement, width));
      const newY = Math.max(0, Math.min(yMovement, height - 30)); // Ensure yMovement is at least 30px from the bottom

      gsap.to(p, {
        duration: 1 + 1 * Math.random(),
        x: newX,
        y: newY,
        ease: Circ.easeInOut,
        onComplete: () => shiftPoint(p),
      });
    }

    function drawLines(p) {
      if (!p.active) return;
      p.closest.forEach(closestPoint => {
        ctx.beginPath();
        ctx.moveTo(p.x, p.y);
        ctx.lineTo(closestPoint.x, closestPoint.y);
        ctx.strokeStyle = `${
          theme === "green"
            ? `rgba(0, 255, 119,${p.active})`
            : `rgba(248, 92, 44,${p.active})`
        }`;
        ctx.stroke();
      });
    }

    function Circle(pos, rad, color) {
      this.pos = pos || null;
      this.radius = rad || null;
      this.color = color || null;

      this.draw = function () {
        if (!this.active) return;
        ctx.beginPath();
        ctx.arc(this.pos.x, this.pos.y, this.radius, 0, 2 * Math.PI, false);
        ctx.fillStyle = `${
          theme === "green"
            ? `rgba(0, 255, 119,${this.active})`
            : `rgba(248, 92, 44,${this.active})`
        }`;
        ctx.fill();
      };
    }

    function getDistance(p1, p2) {
      const dx = p1.x - p2.x;
      const dy = p1.y - p2.y;
      return dx * dx + dy * dy;
    }

    initAnimation();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("scroll", scrollCheck);
      window.removeEventListener("resize", debouncedResizeHandler);
    };
  }, [isVisible, theme, firstLoad, resizeFinished, handleResize]);

  return (
    <div className="large-header" ref={largeHeaderRef}>
      <div ref={ref}>
        <canvas ref={canvasRef}></canvas>
      </div>
    </div>
  );
};