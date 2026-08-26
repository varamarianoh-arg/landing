import { useEffect, useRef } from "react";

interface Node {
  x: number;
  y: number;
  baseX: number;
  baseY: number;
  vx: number;
  vy: number;
  radius: number;
  phase: number;
}

const InteractiveGrid = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: -1000, y: -1000 });
  const animationRef = useRef<number>(0);
  const nodesRef = useRef<Node[]>([]);
  const scrollRef = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const generateNodes = () => {
      const nodes: Node[] = [];
      const spacing = 80;
      const cols = Math.ceil(canvas.width / spacing) + 2;
      const rows = Math.ceil(canvas.height / spacing) + 2;

      for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
          // Offset odd rows for hex-like pattern
          const offsetX = j % 2 === 0 ? 0 : spacing * 0.5;
          const baseX = i * spacing + offsetX + (Math.random() - 0.5) * 20;
          const baseY = j * spacing * 0.866 + (Math.random() - 0.5) * 20;

          nodes.push({
            x: baseX,
            y: baseY,
            baseX,
            baseY,
            vx: (Math.random() - 0.5) * 0.3,
            vy: (Math.random() - 0.5) * 0.3,
            radius: 1 + Math.random() * 1.2,
            phase: Math.random() * Math.PI * 2,
          });
        }
      }
      nodesRef.current = nodes;
    };

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = document.documentElement.scrollHeight;
      generateNodes();
    };
    resize();
    window.addEventListener("resize", resize);

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY + window.scrollY };
    };
    const handleScroll = () => {
      scrollRef.current = window.scrollY;
      mouseRef.current = {
        x: mouseRef.current.x,
        y: mouseRef.current.y,
      };
    };
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("scroll", handleScroll);

    const maxDist = 180;
    const connectionDist = 120;
    let time = 0;

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const { x: mx, y: my } = mouseRef.current;
      const scroll = scrollRef.current;
      const viewTop = scroll;
      const viewBottom = scroll + window.innerHeight;
      time += 0.008;

      const nodes = nodesRef.current;

      // Update node positions with organic drift
      for (const node of nodes) {
        // Only process visible nodes (with margin)
        if (node.baseY < viewTop - 200 || node.baseY > viewBottom + 200) continue;

        node.x = node.baseX + Math.sin(time + node.phase) * 6 + Math.cos(time * 0.7 + node.phase * 1.3) * 4;
        node.y = node.baseY + Math.cos(time + node.phase) * 5 + Math.sin(time * 0.5 + node.phase * 0.8) * 3;
      }

      // Draw connections between nearby nodes
      for (let i = 0; i < nodes.length; i++) {
        const a = nodes[i];
        if (a.baseY < viewTop - 200 || a.baseY > viewBottom + 200) continue;

        for (let j = i + 1; j < nodes.length; j++) {
          const b = nodes[j];
          if (b.baseY < viewTop - 200 || b.baseY > viewBottom + 200) continue;

          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < connectionDist) {
            const midX = (a.x + b.x) / 2;
            const midY = (a.y + b.y) / 2;
            const mouseDist = Math.sqrt((midX - mx) ** 2 + (midY - my) ** 2);
            const mouseInfluence = Math.max(0, 1 - mouseDist / maxDist);
            const baseAlpha = (1 - dist / connectionDist) * 0.06;
            const alpha = baseAlpha + mouseInfluence * 0.15;

            ctx.beginPath();
            ctx.strokeStyle = `hsla(175, 80%, 50%, ${alpha})`;
            ctx.lineWidth = 0.5 + mouseInfluence * 0.8;
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
      }

      // Draw nodes
      for (const node of nodes) {
        if (node.baseY < viewTop - 200 || node.baseY > viewBottom + 200) continue;

        const dist = Math.sqrt((node.x - mx) ** 2 + (node.y - my) ** 2);
        const intensity = Math.max(0, 1 - dist / maxDist);

        const dotSize = node.radius + intensity * 2;
        const alpha = 0.1 + intensity * 0.7;

        ctx.beginPath();
        ctx.arc(node.x, node.y, dotSize, 0, Math.PI * 2);
        ctx.fillStyle = `hsla(175, 80%, 50%, ${alpha})`;
        ctx.fill();
      }

      // Mouse glow
      if (mx > 0) {
        const gradient = ctx.createRadialGradient(mx, my, 0, mx, my, 200);
        gradient.addColorStop(0, "hsla(175, 80%, 50%, 0.05)");
        gradient.addColorStop(1, "hsla(175, 80%, 50%, 0)");
        ctx.fillStyle = gradient;
        ctx.fillRect(mx - 200, my - 200, 400, 400);
      }

      animationRef.current = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("scroll", handleScroll);
      cancelAnimationFrame(animationRef.current);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none"
      style={{ zIndex: 0 }}
    />
  );
};

export default InteractiveGrid;
