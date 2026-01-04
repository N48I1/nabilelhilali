import React, { useEffect, useRef } from 'react';

const ParticleBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let stars: Star[] = [];
    let animationFrameId: number;
    let mouse = { x: 0, y: 0 };
    let isLightMode = document.documentElement.classList.contains('light');

    // Configuration
    const STAR_COUNT = 800;
    const SPEED = 0.5;
    const FOCAL_LENGTH = 400;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const getStarColor = (baseType: 'white' | 'emerald' | 'blue') => {
      if (isLightMode) {
        switch (baseType) {
          case 'white': return '#1f2937'; // Slate 800 (Dark Gray) for white
          case 'emerald': return '#059669'; // Emerald 600 (Darker)
          case 'blue': return '#2563eb'; // Blue 600 (Darker)
        }
      } else {
        switch (baseType) {
          case 'white': return '#ffffff';
          case 'emerald': return '#10b981';
          case 'blue': return '#3b82f6';
        }
      }
    };

    class Star {
      x: number;
      y: number;
      z: number;
      size: number;
      baseColorType: 'white' | 'emerald' | 'blue';
      color: string;

      constructor() {
        this.x = (Math.random() - 0.5) * canvas!.width * 2;
        this.y = (Math.random() - 0.5) * canvas!.height * 2;
        this.z = Math.random() * canvas!.width;
        this.size = Math.random() * 1.5;

        // Randomize type
        const rand = Math.random();
        if (rand > 0.8) {
          this.baseColorType = 'emerald';
        } else if (rand > 0.9) {
          this.baseColorType = 'blue';
        } else {
          this.baseColorType = 'white';
        }
        this.color = getStarColor(this.baseColorType);
      }

      updateColor() {
        this.color = getStarColor(this.baseColorType);
      }

      update() {
        this.z -= SPEED;
        if (this.z <= 0) {
          this.reset();
        }
      }

      reset() {
        this.x = (Math.random() - 0.5) * canvas!.width * 2;
        this.y = (Math.random() - 0.5) * canvas!.height * 2;
        this.z = canvas!.width;
        this.size = Math.random() * 1.5;
      }

      draw() {
        if (!ctx) return;

        const cx = canvas!.width / 2 + (mouse.x * 0.1);
        const cy = canvas!.height / 2 + (mouse.y * 0.1);

        const scale = FOCAL_LENGTH / this.z;
        const sx = this.x * scale + cx;
        const sy = this.y * scale + cy;

        if (sx < 0 || sx > canvas!.width || sy < 0 || sy > canvas!.height) return;

        const r = this.size * scale;
        const alpha = Math.min(1, (canvas!.width - this.z) / (canvas!.width * 0.5));

        ctx.fillStyle = this.color;
        ctx.globalAlpha = alpha;
        ctx.beginPath();
        ctx.arc(sx, sy, r, 0, Math.PI * 2);
        ctx.fill();
        ctx.globalAlpha = 1.0;
      }
    }

    const init = () => {
      stars = [];
      for (let i = 0; i < STAR_COUNT; i++) {
        stars.push(new Star());
      }
    };

    const animate = () => {
      if (!ctx || !canvas) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      stars.forEach(star => {
        star.update();
        star.draw();
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    // Theme Observer
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.type === 'attributes' && mutation.attributeName === 'class') {
          isLightMode = document.documentElement.classList.contains('light');
          // Force update colors immediately
          stars.forEach(star => star.updateColor());
        }
      });
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class']
    });

    const handleMouseMove = (event: MouseEvent) => {
      const cx = window.innerWidth / 2;
      const cy = window.innerHeight / 2;
      mouse.x = event.clientX - cx;
      mouse.y = event.clientY - cy;
    };

    window.addEventListener('resize', () => {
      resizeCanvas();
    });
    window.addEventListener('mousemove', handleMouseMove);

    resizeCanvas();
    init();
    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
      observer.disconnect();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-screen h-screen z-0 opacity-100 pointer-events-none blur-[2px]"
    />
  );
};

export default ParticleBackground;