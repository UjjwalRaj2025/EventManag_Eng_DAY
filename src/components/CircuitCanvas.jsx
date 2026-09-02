import React, { useEffect, useRef } from 'react';

const CircuitCanvas = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // Mouse coordinates for interactive glow effect
    const mouse = {
      x: width / 2,
      y: height / 2,
      targetX: width / 2,
      targetY: height / 2,
    };

    const handleMouseMove = (e) => {
      mouse.targetX = e.clientX;
      mouse.targetY = e.clientY;
    };

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('resize', handleResize);

    // 1. Subtle White & Cyan Ambient Micro-Dots Matrix (Minimal & Clean)
    const whiteParticles = [];
    for (let i = 0; i < 40; i++) {
      whiteParticles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.035,
        vy: (Math.random() - 0.5) * 0.035,
        radius: Math.random() * 1.2 + 0.4,
        alpha: Math.random() * 0.5 + 0.2,
        color: Math.random() > 0.4 ? '#FFFFFF' : '#00D2FF'
      });
    }

    // 2. Minimal Electric Blue Circuit Nodes
    const nodeCount = Math.floor(width / 150);
    const nodes = [];

    for (let i = 0; i < nodeCount; i++) {
      nodes.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.03,
        vy: (Math.random() - 0.5) * 0.03,
        radius: Math.random() * 1.6 + 1.0,
      });
    }

    // 3. Subtle Pulse Sparks
    const pulses = [];
    for (let i = 0; i < 6; i++) {
      pulses.push({
        from: Math.floor(Math.random() * nodes.length),
        to: Math.floor(Math.random() * nodes.length),
        progress: Math.random(),
        speed: 0.0006 + Math.random() * 0.0009,
      });
    }

    const draw = () => {
      // Deep Pitch Black-Blue Gradient Background
      const bgGradient = ctx.createLinearGradient(0, 0, width, height);
      bgGradient.addColorStop(0, '#020611'); // Darkest Pitch Black
      bgGradient.addColorStop(0.5, '#040d1e'); // Deep Midnight Navy
      bgGradient.addColorStop(1, '#02050e'); // Deep Black
      ctx.fillStyle = bgGradient;
      ctx.fillRect(0, 0, width, height);

      // Smooth mouse follow interpolation
      mouse.x += (mouse.targetX - mouse.x) * 0.05;
      mouse.y += (mouse.targetY - mouse.y) * 0.05;

      // Interactive Electric Blue Glowing Mouse Aura
      const auraGradient = ctx.createRadialGradient(
        mouse.x,
        mouse.y,
        0,
        mouse.x,
        mouse.y,
        280
      );
      auraGradient.addColorStop(0, 'rgba(0, 210, 255, 0.12)');
      auraGradient.addColorStop(0.5, 'rgba(22, 119, 255, 0.05)');
      auraGradient.addColorStop(1, 'rgba(0, 0, 0, 0)');
      ctx.fillStyle = auraGradient;
      ctx.beginPath();
      ctx.arc(mouse.x, mouse.y, 280, 0, Math.PI * 2);
      ctx.fill();

      // Technical Blueprint Grid Lines (White & Electric Blue overlay)
      const gridSize = 70;
      ctx.strokeStyle = 'rgba(22, 119, 255, 0.04)';
      ctx.lineWidth = 1;

      for (let x = 0; x < width; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
      }
      for (let y = 0; y < height; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }

      // Draw White & Cyan Micro-Dots (Stars effect)
      whiteParticles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        ctx.fillStyle = p.color === '#FFFFFF' 
          ? `rgba(255, 255, 255, ${p.alpha})`
          : `rgba(0, 210, 255, ${p.alpha})`;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fill();
      });

      // Update & Draw Electric Blue Circuit Nodes & Paths
      nodes.forEach((node, i) => {
        node.x += node.vx;
        node.y += node.vy;

        if (node.x < 0 || node.x > width) node.vx *= -1;
        if (node.y < 0 || node.y > height) node.vy *= -1;

        // Glowing Blue Node Dot
        ctx.fillStyle = '#00D2FF';
        ctx.shadowBlur = 8;
        ctx.shadowColor = '#00D2FF';
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
        ctx.fill();
        ctx.shadowBlur = 0;

        // Connect nearby nodes with right-angle blueprint circuit paths
        for (let j = i + 1; j < nodes.length; j++) {
          const other = nodes[j];
          const dist = Math.hypot(node.x - other.x, node.y - other.y);

          if (dist < 150) {
            ctx.strokeStyle = `rgba(22, 119, 255, ${0.25 - dist / 700})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            const midX = (node.x + other.x) / 2;
            ctx.moveTo(node.x, node.y);
            ctx.lineTo(midX, node.y);
            ctx.lineTo(midX, other.y);
            ctx.lineTo(other.x, other.y);
            ctx.stroke();
          }
        }
      });

      // Animate White & Electric Cyan Pulse Sparks
      pulses.forEach((pulse) => {
        pulse.progress += pulse.speed;
        if (pulse.progress >= 1) {
          pulse.progress = 0;
          pulse.from = Math.floor(Math.random() * nodes.length);
          pulse.to = Math.floor(Math.random() * nodes.length);
        }

        const start = nodes[pulse.from];
        const end = nodes[pulse.to];
        if (start && end) {
          const midX = (start.x + end.x) / 2;
          let px, py;

          if (pulse.progress < 0.5) {
            const t = pulse.progress * 2;
            px = start.x + (midX - start.x) * t;
            py = start.y;
          } else {
            const t = (pulse.progress - 0.5) * 2;
            px = midX + (end.x - midX) * t;
            py = start.y + (end.y - start.y) * t;
          }

          // Glowing Electric Cyan Spark with White Core
          ctx.fillStyle = '#FFFFFF';
          ctx.shadowBlur = 12;
          ctx.shadowColor = '#00D2FF';
          ctx.beginPath();
          ctx.arc(px, py, 2.5, 0, Math.PI * 2);
          ctx.fill();
          ctx.shadowBlur = 0;
        }
      });

      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
    />
  );
};

export default CircuitCanvas;
