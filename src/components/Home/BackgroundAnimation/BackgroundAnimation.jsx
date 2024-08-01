import { useTheme } from "../../../useTheme";
import "./BackgroundAnimation.css";
import { useRef, useEffect, useState } from "react";
import { gsap, Circ } from "gsap";
import useOnScreen from "./useOnScreen";

export const BackgroundAnimation = () => {
  const { theme } = useTheme();
  const canvasRef = useRef(null);
  const largeHeaderRef = useRef(null);
  const [ref, isVisible] = useOnScreen({ threshold: 0.1 });

  // this is used because if you refresh the page at the position where you are not looking at the animation, there will be nothing for a while
  // fix to useOnScreen
  const [firstLoad, setFirstLoad] = useState(true);

  useEffect(() => {
    if (!isVisible && !firstLoad) return;

    setFirstLoad(false);
    const width = window.innerWidth;
    const height = window.innerHeight * 1;
    const target = { x: width / 2, y: height / 2 };
    let animateHeader = true;

    const largeHeader = largeHeaderRef.current;
    largeHeader.style.height = `${height}px`;

    const canvas = canvasRef.current;
    canvas.width = width;
    canvas.height = height;
    const ctx = canvas.getContext("2d");

    // create points
    const points = [];
    for (let x = 0; x < width; x += width / 6) {
      for (let y = 0; y < height; y += height / 6) {
        const px = x + (Math.random() * width) / 6;
        const py = y + (Math.random() * height) / 6;
        const p = { x: px, originX: px, y: py, originY: py };
        points.push(p);
      }
    }

    // for each point find the 5 closest points
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

    // assign a circle to each point
    for (let i in points) {
      const c = new Circle(
        points[i],
        5 + Math.random() * 5,
        "rgba(156,217,249,0.3)"
      );
      points[i].circle = c;
    }

    // Event handling
    if (!("ontouchstart" in window)) {
      window.addEventListener("mousemove", mouseMove);
    }
    window.addEventListener("scroll", scrollCheck);
    window.addEventListener("resize", resize);

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

    function resize() {
      const width = window.innerWidth;
      const height = window.innerHeight;
      largeHeader.style.height = `${height}px`;
      canvas.width = width;
      canvas.height = height;
    }

    // animation
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
          // detect points in range
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

    // Canvas manipulation
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

    // Util
    function getDistance(p1, p2) {
      return Math.pow(p1.x - p2.x, 2) + Math.pow(p1.y - p2.y, 2);
    }

    initAnimation();

    // Cleanup on unmount
    return () => {
      window.removeEventListener("mousemove", mouseMove);
      window.removeEventListener("scroll", scrollCheck);
      window.removeEventListener("resize", resize);
    };
  }, [isVisible, theme, firstLoad]);

  return (
    <div className={`large-header large-header-${theme}`} ref={largeHeaderRef}>
      <div ref={ref}> 
        <canvas id="demo-canvas" ref={canvasRef}></canvas>
      </div>
    </div>
  );
};
