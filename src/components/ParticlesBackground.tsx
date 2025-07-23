// src/components/ParticlesBackground.tsx
'use client';

import { useRef, useEffect } from 'react';

export function ParticlesBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const mouse = {
      x: null as number | null,
      y: null as number | null,
      radius: 120
    };
    
    const handleMouseMove = (event: MouseEvent) => {
      mouse.x = event.x;
      mouse.y = event.y;
    };
    window.addEventListener('mousemove', handleMouseMove);

    class Particle {
      x: number;
      y: number;
      directionX: number;
      directionY: number;
      size: number;
      color: string;
      baseColor: string;

      constructor(x: number, y: number, directionX: number, directionY: number, size: number, color: string) {
        this.x = x;
        this.y = y;
        this.directionX = directionX;
        this.directionY = directionY;
        this.size = size;
        this.color = color;
        this.baseColor = color;
      }

      draw() {
        if (!ctx) return;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2, false);
        ctx.shadowBlur = 15;
        ctx.shadowColor = this.color;
        ctx.fillStyle = this.color;
        ctx.fill();
      }

      update() {
        if (!canvas) return;
        if (this.x + this.size > canvas.width || this.x - this.size < 0) {
          this.directionX = -this.directionX;
        }
        if (this.y + this.size > canvas.height || this.y - this.size < 0) {
          this.directionY = -this.directionY;
        }

        if (mouse.x !== null && mouse.y !== null) {
          const dx = mouse.x - this.x; // CORRIGIDO
          const dy = mouse.y - this.y; // CORRIGIDO
          const distance = Math.sqrt(dx * dx + dy * dy); // CORRIGIDO
          if (distance < mouse.radius) {
            this.size = 5;
            this.color = "#ffffff";
          } else {
            this.size = 2;
            this.color = this.baseColor;
          }
        }

        this.x += this.directionX;
        this.y += this.directionY;

        this.draw();
      }
    }

    let particlesArray: Particle[];

    function init() {
      if(!canvas) return;
      particlesArray = [];
      const numberOfParticles = (canvas.width * canvas.height) / 9000;
      for (let i = 0; i < numberOfParticles; i++) {
        const size = 2;
        const x = Math.random() * (canvas.width - size * 2) + size;
        const y = Math.random() * (canvas.height - size * 2) + size;
        const directionX = (Math.random() - 0.5) * 1.5;
        const directionY = (Math.random() - 0.5) * 1.5;
        const color = `hsl(${Math.random() * 360}, 100%, 70%)`;

        particlesArray.push(new Particle(x, y, directionX, directionY, size, color));
      }
    }

    function connect() {
      if (!ctx) return;
      for (let a = 0; a < particlesArray.length; a++) {
        for (let b = a; b < particlesArray.length; b++) {
          const dx = particlesArray[a].x - particlesArray[b].x; // CORRIGIDO
          const dy = particlesArray[a].y - particlesArray[b].y; // CORRIGIDO
          let distance = dx * dx + dy * dy;

          if (distance < 12000) {
            const colorA = particlesArray[a].color; // CORRIGIDO
            let strokeStyle;

            if (colorA.startsWith('hsl')) {
              strokeStyle = colorA.replace('hsl', 'hsla').replace(')', ', 0.1)');
            } else {
              strokeStyle = 'rgba(255, 255, 255, 0.1)';
            }
            
            ctx.beginPath();
            ctx.strokeStyle = strokeStyle;
            ctx.lineWidth = 1;
            ctx.moveTo(particlesArray[a].x, particlesArray[a].y);
            ctx.lineTo(particlesArray[b].x, particlesArray[b].y);
            ctx.stroke();
          }
        }
      }
    }

    let animationFrameId: number;
    function animate() {
      animationFrameId = requestAnimationFrame(animate);
      if (!ctx || !canvas) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (let i = 0; i < particlesArray.length; i++) {
        particlesArray[i].update();
      }

      connect();
    }
    
    const handleResize = () => {
        if (!canvas) return;
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        init();
    }
    window.addEventListener('resize', handleResize);

    init();
    animate();

    return () => {
        window.removeEventListener('resize', handleResize);
        window.removeEventListener('mousemove', handleMouseMove);
        cancelAnimationFrame(animationFrameId);
    }

  }, []);

  return <canvas ref={canvasRef} style={{ position: 'fixed', top: 0, left: 0, zIndex: -1, width: '100%', height: '100%' }} />;
}