import { useEffect, useRef } from "react";

export const AnimatedGrid = () => {
    const svgRef = useRef<SVGSVGElement>(null);
    useEffect(() => {
      if (!svgRef.current) return;

      const lines = svgRef.current.querySelectorAll("line");

      const animations = Array.from(lines).map((line) => {
        const isVertical = line.getAttribute("x1") === line.getAttribute("x2");
        const posAttr = isVertical ? "y" : "x";
        const start1 = parseFloat(line.getAttribute(`${posAttr}1`) || "0");
        const start2 = parseFloat(line.getAttribute(`${posAttr}2`) || "0");

        const maxOffset = 5 + Math.random() * 5;
        const speed = 0.005 + Math.random() * 0.01;
        const direction = Math.random() > 0.5 ? 1 : -1;

        return {
          line,
          isVertical,
          posAttr,
          start1,
          start2,
          offset: 0,
          direction,
          speed,
          maxOffset,
        };
      });

      let frameId: number;

      const animate = () => {
        animations.forEach((anim) => {
          anim.offset += anim.direction * anim.speed;
          if (Math.abs(anim.offset) >= anim.maxOffset) {
            anim.direction *= -1;
          }

          anim.line.setAttribute(
            `${anim.posAttr}1`,
            (anim.start1 + anim.offset).toString()
          );
          anim.line.setAttribute(
            `${anim.posAttr}2`,
            (anim.start2 + anim.offset).toString()
          );
        });

        frameId = requestAnimationFrame(animate);
      };

      animate();

      return () => cancelAnimationFrame(frameId);
    }, []);
  return (
    <div className="home__grid">
      <svg ref={svgRef} viewBox="0 0 100 100" preserveAspectRatio="none">
        <line x1="5" y1="10" x2="5" y2="100" />
        <line x1="18" y1="30" x2="18" y2="100" />
        <line x1="35" y1="0" x2="35" y2="60" />
        <line x1="43" y1="20" x2="43" y2="90" />

        <line x1="0" y1="12" x2="50" y2="12" />
        <line x1="10" y1="26" x2="100" y2="26" />
        <line x1="30" y1="45" x2="90" y2="45" />
        <line x1="0" y1="66" x2="75" y2="66" />
        <line x1="20" y1="85" x2="100" y2="85" />
      </svg>
    </div>
  );
}