import { useTheme } from "../Theme/useTheme";
import "./BackgroundAnimation.css";
import { useRef, useEffect, useState, useCallback } from "react";
import { gsap, Circ } from "gsap";
import useOnScreen from "../UseOnScreen/useOnScreen";

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
    const debouncedResizeHandler = debounce(handleResize, 200);

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
    for (let x = -150; x < width + 150; x += width / 10) {
      for (let y = 0; y < height - 150; y += height / 8) {
        const px = x + (Math.random() * width) / 10;
        const py = y + (Math.random() * height) / 8;
        const p = { x: px, originX: px, y: py, originY: py };
        points.push(p);
      }
    }

    for (let i = 0; i < points.length; i++) {
      const closest = [];
      const p1 = points[i];
      for (let j = 0; j < points.length; j++) {
        const p2 = points[j];
        if (p1 !== p2) {
          let placed = false;
          for (let k = 0; k < 5; k++) {
            if (!placed) {
              if (closest[k] === undefined) {
                closest[k] = p2;
                placed = true;
              }
            }
          }

          for (let k = 0; k < 5; k++) {
            if (!placed) {
              if (getDistance(p1, p2) < getDistance(p1, closest[k])) {
                closest[k] = p2;
                placed = true;
              }
            }
          }
        }
      }
      p1.closest = closest;
    }

    for (let i in points) {
      const c = new Circle(
        points[i],
        5 + Math.random() * 5,
        "rgba(156,217,249,0.3)"
      );
      points[i].circle = c;
    }

    if (!("ontouchstart" in window)) {
      window.addEventListener("mousemove", mouseMove);
    }
    window.addEventListener("scroll", scrollCheck);
    window.addEventListener("resize", debouncedResizeHandler);

    function mouseMove(e) {
      let posx = 0;
      let posy = 0;
      if (e.pageX || e.pageY) {
        posx = e.pageX;
        posy = e.pageY;
      } else if (e.clientX || e.clientY) {
        posx =
          e.clientX +
          document.body.scrollLeft +
          document.documentElement.scrollLeft;
        posy =
          e.clientY +
          document.body.scrollTop +
          document.documentElement.scrollTop;
      }
      target.x = posx;
      target.y = posy;
    }

    function scrollCheck() {
      animateHeader = document.body.scrollTop <= height;
    }

    function initAnimation() {
      animate();
      for (let i in points) {
        shiftPoint(points[i]);
      }
    }

    function animate() {
      if (animateHeader) {
        ctx.clearRect(0, 0, width, height);
        for (let i in points) {
          if (Math.abs(getDistance(target, points[i])) < 10000) {
            points[i].active = 0.4;
            points[i].circle.active = 0.8;
          } else if (Math.abs(getDistance(target, points[i])) < 50000) {
            points[i].active = 0.2;
            points[i].circle.active = 0.4;
          } else if (Math.abs(getDistance(target, points[i])) < 100000) {
            points[i].active = 0.03;
            points[i].circle.active = 0.3;
          } else {
            points[i].active = 0.1;
            points[i].circle.active = 0.2;
          }

          drawLines(points[i]);
          points[i].circle.draw();
        }
      }
      requestAnimationFrame(animate);
    }

    function shiftPoint(p) {
      gsap.to(p, {
        duration: 1 + 1 * Math.random(),
        x: p.originX - 50 + Math.random() * 100,
        y: p.originY - 50 + Math.random() * 100,
        ease: Circ.easeInOut,
        onComplete: function () {
          shiftPoint(p);
        },
      });
    }

    function drawLines(p) {
      if (!p.active) return;
      for (let i in p.closest) {
        ctx.beginPath();
        ctx.moveTo(p.x, p.y);
        ctx.lineTo(p.closest[i].x, p.closest[i].y);
        ctx.strokeStyle = `${
          theme === "green"
            ? `rgba(0, 255, 119,${p.active})`
            : `rgba(248, 92, 44,${p.active})`
        }`;
        ctx.stroke();
      }
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
      return Math.pow(p1.x - p2.x, 2) + Math.pow(p1.y - p2.y, 2);
    }

    initAnimation();

    return () => {
      window.removeEventListener("mousemove", mouseMove);
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