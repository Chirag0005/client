"use client";

import React, { useEffect, useRef } from "react";
import * as THREE from "three";

export default function Contact3DCanvas() {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    // Scene & Camera
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      55,
      container.clientWidth / container.clientHeight,
      0.1,
      100
    );
    camera.position.set(0, 4.5, 7.5);
    camera.lookAt(0, 0, 0);

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true, powerPreference: "high-performance" });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // 3D Topographic Terrain Grid (Fjord Mesh)
    const width = 24;
    const height = 18;
    const widthSegments = 40;
    const heightSegments = 30;

    const geometry = new THREE.PlaneGeometry(width, height, widthSegments, heightSegments);
    geometry.rotateX(-Math.PI / 2.3);

    // Store original vertex heights
    const pos = geometry.attributes.position;
    const originalY = new Float32Array(pos.count);
    for (let i = 0; i < pos.count; i++) {
      originalY[i] = pos.getY(i);
    }

    // Material with subtle lime wireframe on dark background
    const material = new THREE.MeshBasicMaterial({
      color: 0xc7f36b,
      wireframe: true,
      transparent: true,
      opacity: 0.22,
    });

    const terrain = new THREE.Mesh(geometry, material);
    scene.add(terrain);

    // Particle nodes at vertices
    const pointsMat = new THREE.PointsMaterial({
      color: 0xc7f36b,
      size: 0.04,
      transparent: true,
      opacity: 0.6,
    });
    const points = new THREE.Points(geometry, pointsMat);
    scene.add(points);

    // Floating 3D Geometric Nodes in the sky
    const orbGroup = new THREE.Group();
    scene.add(orbGroup);

    const orbCount = 18;
    for (let i = 0; i < orbCount; i++) {
      const orbGeo = new THREE.OctahedronGeometry(0.18 + Math.random() * 0.15, 0);
      const orbMat = new THREE.MeshBasicMaterial({
        color: i % 3 === 0 ? 0xc7f36b : 0xffffff,
        wireframe: true,
        transparent: true,
        opacity: 0.4,
      });
      const orb = new THREE.Mesh(orbGeo, orbMat);
      orb.position.set(
        (Math.random() - 0.5) * 16,
        1 + Math.random() * 4,
        (Math.random() - 0.5) * 8
      );
      orbGroup.add(orb);
    }

    // Interactive mouse coordinates
    let mouseX = 0;
    let mouseY = 0;
    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      mouseX = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      mouseY = -(((e.clientY - rect.top) / rect.height) * 2 - 1);
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });

    // Handle Resize
    const handleResize = () => {
      if (!container) return;
      camera.aspect = container.clientWidth / container.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(container.clientWidth, container.clientHeight);
    };

    const resizeObserver = new ResizeObserver(handleResize);
    resizeObserver.observe(container);

    // Animation Loop
    let animationFrameId: number;
    const startTime = performance.now();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      const t = (performance.now() - startTime) * 0.001;

      if (!prefersReducedMotion) {
        // Wave physics on terrain vertices
        for (let i = 0; i < pos.count; i++) {
          const vx = pos.getX(i);
          const vz = pos.getZ(i);

          // Wave equation modulated by mouse distance
          const dist = Math.sqrt(vx * vx + vz * vz);
          const wave = Math.sin(vx * 0.4 + t * 1.5) * Math.cos(vz * 0.4 + t * 1.2) * 0.4;
          const mouseWave = Math.sin(dist * 0.5 - t * 2 + mouseX * 2) * 0.15;

          pos.setY(i, originalY[i] + wave + mouseWave);
        }
        pos.needsUpdate = true;

        // Camera tilt follows mouse
        camera.position.x += (mouseX * 2.5 - camera.position.x) * 0.04;
        camera.position.y += (4.5 + mouseY * 1.2 - camera.position.y) * 0.04;
        camera.lookAt(0, 0, 0);

        // Orbiting sky nodes
        orbGroup.rotation.y = t * 0.08;
      }

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("mousemove", handleMouseMove);
      resizeObserver.disconnect();
      if (renderer.domElement && container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 pointer-events-none opacity-45 overflow-hidden"
      aria-hidden="true"
    />
  );
}
