import { useTheme } from "../Theme/useTheme";
import "./PanelBackground.css";
import { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import useOnScreen from "../UseOnScreen/useOnScreen";

export const PanelBackground = () => {
  const { theme } = useTheme();
  const canvasRef = useRef(null);
  const largeHeaderRef = useRef(null);
  const [ref, isVisible] = useOnScreen({ threshold: 0.1 });

  const [firstLoad, setFirstLoad] = useState(true);

  useEffect(() => {
    if (!isVisible && !firstLoad) return;

    setFirstLoad(false);

    const width = window.innerWidth;
    const height = 2100;
    const target = { x: width / 2, y: height / 2 };
    let animateHeader = true;

    const largeHeader = largeHeaderRef.current;
    largeHeader.style.height = `${height}px`;

    const canvas = canvasRef.current;
    canvas.width = width;
    canvas.height = height;
    const ctx = canvas.getContext("2d");

    const points = [];
    for (let x = 0; x < width; x += width / 6) {
      for (let y = 0; y < height - 400; y += height / 6) {
        if (y === 0) {
          continue;
        }
        const px = x + (Math.random() * width) / 6;
        const py = y + (Math.random() * height) / 6;
        const p = { x: px, originX: px, y: py, originY: py, opacity: 1 };
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
        8 + Math.random() * 8,
        "rgba(156,217,249,0.3)"
      );
      points[i].circle = c;
    }

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
      const height = 2100;
      largeHeader.style.height = `${height}px`;
      canvas.width = width;
      canvas.height = height;
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
          drawLines(points[i]);
          points[i].circle.draw();
        }
      }
      requestAnimationFrame(animate);
    }

    function shiftPoint(p) {
      gsap.to(p, {
        duration: 1 + Math.random(), // duration for fading out
        opacity: 0,
        boxShadow: "0px 0px 0px 0px black",
        onComplete: function () {
          gsap.set(p, {
            x: p.originX - 50 + Math.random() * 100,
            y: p.originY - 50 + Math.random() * 100,
          });
          gsap.to(p, {
            duration: 0.1, // duration for fading in
            opacity: 1,
            boxShadow: "0px 0px 16px 10px white",
            onComplete: function () {
              shiftPoint(p);
            },
          });
        },
      });
    }

    function drawLines(p) {
      if (!p.active) return;
      for (let i in p.closest) {
        ctx.beginPath();
        ctx.moveTo(p.x, p.y);
        ctx.lineTo(p.closest[i].x, p.closest[i].y);
        ctx.strokeStyle =
          theme === "green"
            ? `rgba(0, 255, 119,${p.opacity})`
            : `rgba(248, 92, 44,${p.opacity})`;
        ctx.stroke();
      }
    }

    function Circle(pos, rad, color) {
      this.pos = pos || null;
      this.radius = rad || null;
      this.color = color || null;

      this.draw = function () {
        ctx.beginPath();
        ctx.arc(this.pos.x, this.pos.y, this.radius, 0, 2 * Math.PI, false);
        ctx.fillStyle =
          theme === "green"
            ? `rgba(0, 255, 119,${this.pos.opacity})`
            : `rgba(248, 92, 44,${this.pos.opacity})`; 
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
      window.removeEventListener("resize", resize);
    };
  }, [isVisible, theme, firstLoad]);

  return (
    <div className={`large-header2 large-header-${theme}`} ref={largeHeaderRef}>
      <div ref={ref}>
        <canvas ref={canvasRef}></canvas>
      </div>
    </div>
  );
};
