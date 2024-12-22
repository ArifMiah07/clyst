import React, { useEffect, useRef, useState } from 'react';

class QuantumParticle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
    this.reset();
  }

  reset() {
    this.x = Math.random() * this.width;
    this.y = Math.random() * this.height;
    this.radius = Math.random() * 3 + 1;
    this.color = `hsl(${Math.random() * 360}, 70%, 50%)`;
    this.velocity = {
      x: (Math.random() - 0.5) * 2,
      y: (Math.random() - 0.5) * 2
    };
    this.quantum = Math.random() * Math.PI * 2;
  }

  update() {
    this.x += this.velocity.x;
    this.y += this.velocity.y;
    this.quantum += 0.05;

    if (this.x < 0 || this.x > this.width) this.velocity.x *= -1;
    if (this.y < 0 || this.y > this.height) this.velocity.y *= -1;
  }
}

const QuantumCode = () => {
  const canvasRef = useRef(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const particlesRef = useRef([]);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const updateDimensions = () => {
      if (canvasRef.current) {
        const { width, height } = canvasRef.current.getBoundingClientRect();
        setDimensions({ width, height });
        canvasRef.current.width = width;
        canvasRef.current.height = height;
        
        // Initialize particles
        particlesRef.current = Array.from(
          { length: 200 }, 
          () => new QuantumParticle(width, height)
        );
      }
    };

    updateDimensions();
    window.addEventListener('resize', updateDimensions);
    return () => window.removeEventListener('resize', updateDimensions);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    const animate = () => {
      ctx.clearRect(0, 0, dimensions.width, dimensions.height);

      particlesRef.current.forEach(particle => {
        particle.update();

        // Draw particle
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
        ctx.fillStyle = particle.color;
        ctx.globalAlpha = Math.sin(particle.quantum) * 0.7 + 0.3;
        ctx.fill();
        ctx.globalAlpha = 1;

        // Draw connection to mouse
        const distance = Math.hypot(particle.x - mousePos.x, particle.y - mousePos.y);
        if (distance < 100) {
          ctx.beginPath();
          ctx.moveTo(particle.x, particle.y);
          ctx.lineTo(mousePos.x, mousePos.y);
          ctx.strokeStyle = `rgba(0, 255, 255, ${1 - distance/100})`;
          ctx.lineWidth = 1;
          ctx.stroke();
        }
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();
    return () => cancelAnimationFrame(animationFrameId);
  }, [dimensions, mousePos]);

  const handleMouseMove = (e) => {
    const rect = canvasRef.current.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    });
  };

  return (
    <div className="relative w-full h-[525px] bg-gradient-to-b from-[#1b2735] to-[#090a0f] overflow-hidden cursor-none">
      <canvas 
        ref={canvasRef}
        className="absolute inset-0 z-10 w-full"
        onMouseMove={handleMouseMove}
      />
      
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center text-[#e0e0e0] z-20 bg-[rgba(15,15,25,0.7)] p-8 rounded-2xl backdrop-blur-lg">
        <h1 className="text-3xl font-bold mb-2">Quantum Code Nexus</h1>
        <p className="text-lg">Interactive Developer Ecosystem</p>
      </div>

      <div 
        className="fixed w-5 h-5 border-2 border-cyan-400 rounded-full pointer-events-none mix-blend-difference z-50 transition-transform duration-100 ease-out"
        style={{
          transform: `translate(${mousePos.x}px, ${mousePos.y}px) scale(${Math.sin(Date.now() * 0.01) * 0.5 + 1.5})`
        }}
      />
    </div>
  );
};

export default QuantumCode;