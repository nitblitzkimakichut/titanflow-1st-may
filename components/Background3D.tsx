"use client";

import { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function Background3D() {
  const containerRef = useRef<HTMLDivElement>(null);
  const mousePosition = useRef({ x: 0, y: 0 });

  useEffect(() => {
    if (!containerRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    containerRef.current.appendChild(renderer.domElement);

    // Particles
    const particlesGeometry = new THREE.BufferGeometry();
    const particlesCount = 7000;
    const posArray = new Float32Array(particlesCount * 3);

    for (let i = 0; i < particlesCount * 3; i++) {
      posArray[i] = (Math.random() - 0.5) * 5;
    }

    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));

    // Create multiple particle systems with different colors
    const particleGroups = [
      {
        color: '#047857', // Emerald-600
        size: 0.004,
        opacity: 0.4
      },
      {
        color: '#064e3b', // Emerald-800
        size: 0.003,
        opacity: 0.3
      },
      {
        color: '#1e293b', // Slate-800
        size: 0.005,
        opacity: 0.2
      }
    ];

    const particleSystems = particleGroups.map(group => {
      const material = new THREE.PointsMaterial({
        size: group.size,
        color: group.color,
        transparent: true,
        opacity: group.opacity,
        blending: THREE.AdditiveBlending
      });
      const particles = new THREE.Points(particlesGeometry, material);
      scene.add(particles);
      return particles;
    });

    camera.position.z = 2;

    // Mouse movement
    const onMouseMove = (event: MouseEvent) => {
      mousePosition.current = {
        x: (event.clientX / window.innerWidth) * 2 - 1,
        y: -(event.clientY / window.innerHeight) * 2 + 1,
      };
    };

    window.addEventListener('mousemove', onMouseMove);

    // Animation
    const animate = () => {
      requestAnimationFrame(animate);

      particleSystems.forEach((particles, index) => {
        particles.rotation.x += 0.0001 + (index * 0.00005);
        particles.rotation.y += 0.0001 + (index * 0.00005);

        // Respond to mouse movement with different intensities
        particles.rotation.x += mousePosition.current.y * 0.0002 * (index + 1);
        particles.rotation.y += mousePosition.current.x * 0.0002 * (index + 1);
      });

      renderer.render(scene, camera);
    };

    animate();

    // Handle resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      if (containerRef.current) {
        containerRef.current.removeChild(renderer.domElement);
      }
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return <div ref={containerRef} className="fixed inset-0 -z-10" />;
}