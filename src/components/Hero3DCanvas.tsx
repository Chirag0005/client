"use client";

import React, { useEffect, useRef, useState, useCallback } from "react";
import * as THREE from "three";
import { Sun, Moon, RotateCcw, Compass, MapPin } from "lucide-react";

// World coordinate definitions (latitude, longitude, display label)
interface WorldHub {
  name: string;
  country: string;
  lat: number;
  lon: number;
  isHQ?: boolean;
}

const HUBS: WorldHub[] = [
  { name: "Oslo", country: "Norway", lat: 59.9139, lon: 10.7522, isHQ: true },
  { name: "London", country: "UK", lat: 51.5074, lon: -0.1278 },
  { name: "New York", country: "USA", lat: 40.7128, lon: -74.006 },
  { name: "San Francisco", country: "USA", lat: 37.7749, lon: -122.4194 },
  { name: "Tokyo", country: "Japan", lat: 35.6762, lon: 139.6503 },
  { name: "Singapore", country: "Singapore", lat: 1.3521, lon: 103.8198 },
  { name: "Sydney", country: "Australia", lat: -33.8688, lon: 151.2093 },
];

// Helper: Convert lat/lon into 3D Cartesian coordinates on sphere of given radius
function latLonToVector3(lat: number, lon: number, radius: number): THREE.Vector3 {
  const phi = (90 - lat) * (Math.PI / 180);
  const theta = (lon + 180) * (Math.PI / 180);
  const x = -(radius * Math.sin(phi) * Math.cos(theta));
  const z = radius * Math.sin(phi) * Math.sin(theta);
  const y = radius * Math.cos(phi);
  return new THREE.Vector3(x, y, z);
}

export default function Hero3DCanvas() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [themeMode, setThemeMode] = useState<"day" | "night">("day");
  const [isInteracting, setIsInteracting] = useState<boolean>(false);
  const [isLoaded, setIsLoaded] = useState<boolean>(false);

  // References to WebGL objects for instant, lag-free UI manipulation
  const earthMeshRef = useRef<THREE.Mesh | null>(null);
  const dayMaterialRef = useRef<THREE.MeshStandardMaterial | null>(null);
  const nightMaterialRef = useRef<THREE.MeshStandardMaterial | null>(null);
  const cloudsMeshRef = useRef<THREE.Mesh | null>(null);
  const sunLightRef = useRef<THREE.DirectionalLight | null>(null);
  const ambientLightRef = useRef<THREE.AmbientLight | null>(null);
  const resetOrientationRef = useRef<(() => void) | null>(null);

  // Immediate mode toggle function
  const applyThemeMode = useCallback((mode: "day" | "night") => {
    setThemeMode(mode);

    if (earthMeshRef.current) {
      earthMeshRef.current.material =
        mode === "night" ? nightMaterialRef.current! : dayMaterialRef.current!;
    }

    if (sunLightRef.current && ambientLightRef.current) {
      if (mode === "night") {
        sunLightRef.current.intensity = 0.9;
        ambientLightRef.current.intensity = 0.35;
        if (cloudsMeshRef.current) {
          (cloudsMeshRef.current.material as THREE.MeshStandardMaterial).opacity = 0.28;
        }
      } else {
        sunLightRef.current.intensity = 2.7;
        ambientLightRef.current.intensity = 0.8;
        if (cloudsMeshRef.current) {
          (cloudsMeshRef.current.material as THREE.MeshStandardMaterial).opacity = 0.68;
        }
      }
    }
  }, []);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    // 1. Scene, Camera, High-Performance WebGL Renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      38,
      container.clientWidth / container.clientHeight,
      0.1,
      100
    );
    camera.position.set(0, 0.05, 6.4);

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: "high-performance",
    });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.25;
    container.appendChild(renderer.domElement);

    // 2. Texture Loading
    const textureLoader = new THREE.TextureLoader();

    const dayTexture = textureLoader.load("/images/earth/earth-blue-marble.jpg", () => {
      setIsLoaded(true);
    });
    dayTexture.colorSpace = THREE.SRGBColorSpace;
    dayTexture.minFilter = THREE.LinearMipmapLinearFilter;

    const nightTexture = textureLoader.load("/images/earth/earth-night.jpg");
    nightTexture.colorSpace = THREE.SRGBColorSpace;
    nightTexture.minFilter = THREE.LinearMipmapLinearFilter;

    const bumpTexture = textureLoader.load("/images/earth/earth-topology.png");
    const specularTexture = textureLoader.load("/images/earth/earth-water.png");
    const cloudsTexture = textureLoader.load("/images/earth/earth-clouds.png");

    // 3. Root Globe Hierarchy (Real Earth axial tilt of 23.4°, offset left to ensure complete margin from right edge)
    const globeRootGroup = new THREE.Group();
    globeRootGroup.position.set(-0.2, 0, 0);
    globeRootGroup.rotation.z = (23.4 * Math.PI) / 180;
    scene.add(globeRootGroup);

    const globeRotationGroup = new THREE.Group();
    globeRootGroup.add(globeRotationGroup);

    const GLOBE_RADIUS = 1.38; // Perfectly proportioned so the full sphere and arcs remain fully visible with luxury negative space
    const sphereGeometry = new THREE.SphereGeometry(GLOBE_RADIUS, 64, 64);

    // Materials
    const dayMaterial = new THREE.MeshStandardMaterial({
      map: dayTexture,
      bumpMap: bumpTexture,
      bumpScale: 0.038,
      roughnessMap: specularTexture,
      roughness: 0.58,
      metalness: 0.06,
    });
    dayMaterialRef.current = dayMaterial;

    const nightMaterial = new THREE.MeshStandardMaterial({
      map: nightTexture,
      bumpMap: bumpTexture,
      bumpScale: 0.03,
      emissiveMap: nightTexture,
      emissive: new THREE.Color(0xffd56b),
      emissiveIntensity: 2.1,
      roughness: 0.82,
      metalness: 0.12,
    });
    nightMaterialRef.current = nightMaterial;

    const earthMesh = new THREE.Mesh(sphereGeometry, dayMaterial);
    earthMeshRef.current = earthMesh;
    globeRotationGroup.add(earthMesh);

    // 4. Photorealistic Cloud Layer
    const cloudsGeometry = new THREE.SphereGeometry(GLOBE_RADIUS * 1.012, 64, 64);
    const cloudsMaterial = new THREE.MeshStandardMaterial({
      map: cloudsTexture,
      transparent: true,
      opacity: 0.68,
      blending: THREE.NormalBlending,
      depthWrite: false,
    });
    const cloudsMesh = new THREE.Mesh(cloudsGeometry, cloudsMaterial);
    cloudsMeshRef.current = cloudsMesh;
    globeRotationGroup.add(cloudsMesh);

    // 5. Hub Markers & Network Arcs
    const markersGroup = new THREE.Group();
    globeRotationGroup.add(markersGroup);

    const osloHub = HUBS.find((h) => h.isHQ)!;
    const osloPos = latLonToVector3(osloHub.lat, osloHub.lon, GLOBE_RADIUS);

    // Oslo Studio Beacon
    const beaconGeo = new THREE.SphereGeometry(0.04, 16, 16);
    const beaconMat = new THREE.MeshBasicMaterial({ color: 0xc7f36b });
    const beaconMesh = new THREE.Mesh(beaconGeo, beaconMat);
    beaconMesh.position.copy(osloPos);
    markersGroup.add(beaconMesh);

    // Oslo Pulsing Ripple Ring
    const rippleGeo = new THREE.RingGeometry(0.045, 0.07, 32);
    const rippleMat = new THREE.MeshBasicMaterial({
      color: 0xc7f36b,
      transparent: true,
      opacity: 0.9,
      side: THREE.DoubleSide,
    });
    const rippleMesh = new THREE.Mesh(rippleGeo, rippleMat);
    rippleMesh.position.copy(osloPos);
    rippleMesh.lookAt(new THREE.Vector3(0, 0, 0));
    markersGroup.add(rippleMesh);

    // Global Hubs & Curved 3D Arcs
    interface NetworkArc {
      curve: THREE.QuadraticBezierCurve3;
      packetMesh: THREE.Mesh;
      speed: number;
      offset: number;
    }

    const networkArcs: NetworkArc[] = [];
    const packetGeo = new THREE.SphereGeometry(0.02, 12, 12);
    const packetMat = new THREE.MeshBasicMaterial({ color: 0xc7f36b });

    HUBS.filter((h) => !h.isHQ).forEach((hub, idx) => {
      const hubPos = latLonToVector3(hub.lat, hub.lon, GLOBE_RADIUS);

      // Destination dot
      const dotGeo = new THREE.SphereGeometry(0.024, 12, 12);
      const dotMat = new THREE.MeshBasicMaterial({ color: 0xffffff });
      const dotMesh = new THREE.Mesh(dotGeo, dotMat);
      dotMesh.position.copy(hubPos);
      markersGroup.add(dotMesh);

      // Flight arc
      const dist = osloPos.distanceTo(hubPos);
      const midPoint = osloPos
        .clone()
        .add(hubPos)
        .multiplyScalar(0.5)
        .normalize()
        .multiplyScalar(GLOBE_RADIUS + Math.min(dist * 0.4, 0.9));

      const curve = new THREE.QuadraticBezierCurve3(osloPos, midPoint, hubPos);
      const points = curve.getPoints(40);
      const arcGeo = new THREE.BufferGeometry().setFromPoints(points);

      const arcMat = new THREE.LineBasicMaterial({
        color: 0xc7f36b,
        transparent: true,
        opacity: 0.38,
      });

      const arcLine = new THREE.Line(arcGeo, arcMat);
      markersGroup.add(arcLine);

      // Data Packet
      const packetMesh = new THREE.Mesh(packetGeo, packetMat);
      markersGroup.add(packetMesh);

      networkArcs.push({
        curve,
        packetMesh,
        speed: 0.16 + (idx % 3) * 0.04,
        offset: idx * 0.2,
      });
    });

    // 7. Lighting
    const sunLight = new THREE.DirectionalLight(0xfffbf2, 2.7);
    sunLight.position.set(5.5, 3.5, 4.8);
    scene.add(sunLight);
    sunLightRef.current = sunLight;

    const ambientLight = new THREE.AmbientLight(0xffffff, 0.8);
    scene.add(ambientLight);
    ambientLightRef.current = ambientLight;

    const studioRim = new THREE.PointLight(0xc7f36b, 1.8, 10);
    studioRim.position.set(-4.5, -2, -3.5);
    scene.add(studioRim);

    // 8. Interactive Drag & Momentum
    let isDragging = false;
    let prevX = 0;
    let prevY = 0;
    let velocityX = 0;
    let velocityY = 0;
    let targetTiltX = 0;
    let targetTiltY = 0;
    let currentTiltX = 0;
    let currentTiltY = 0;

    // Initial orientation: facing Europe / Scandinavia
    globeRotationGroup.rotation.y = -Math.PI * 0.42;
    globeRotationGroup.rotation.x = 0.22;

    resetOrientationRef.current = () => {
      globeRotationGroup.rotation.y = -Math.PI * 0.42;
      globeRotationGroup.rotation.x = 0.22;
      velocityX = 0;
      velocityY = 0;
    };

    const onPointerDown = (e: PointerEvent) => {
      isDragging = true;
      setIsInteracting(true);
      prevX = e.clientX;
      prevY = e.clientY;
      velocityX = 0;
      velocityY = 0;
    };

    const onPointerMove = (e: PointerEvent) => {
      const rect = container.getBoundingClientRect();
      const normX = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      const normY = -(((e.clientY - rect.top) / rect.height) * 2 - 1);
      targetTiltX = normX * 0.18;
      targetTiltY = normY * 0.14;

      if (!isDragging) return;

      const deltaX = e.clientX - prevX;
      const deltaY = e.clientY - prevY;

      globeRotationGroup.rotation.y += deltaX * 0.0055;
      globeRotationGroup.rotation.x += deltaY * 0.0045;

      globeRotationGroup.rotation.x = Math.max(
        -Math.PI * 0.35,
        Math.min(Math.PI * 0.35, globeRotationGroup.rotation.x)
      );

      velocityX = deltaX * 0.0035;
      velocityY = deltaY * 0.003;

      prevX = e.clientX;
      prevY = e.clientY;
    };

    const onPointerUp = () => {
      isDragging = false;
      setTimeout(() => setIsInteracting(false), 600);
    };

    const domElement = renderer.domElement;
    domElement.style.touchAction = "none";
    domElement.addEventListener("pointerdown", onPointerDown);
    window.addEventListener("pointermove", onPointerMove);
    window.addEventListener("pointerup", onPointerUp);

    // Resize & dynamic framing so the Earth is never clipped
    const onResize = () => {
      if (!container) return;
      const aspect = container.clientWidth / container.clientHeight;
      camera.aspect = aspect;
      // Auto-fit camera distance so globe is NEVER clipped regardless of screen width or aspect ratio
      const vFovRad = (camera.fov * Math.PI) / 180;
      const requiredDist = (GLOBE_RADIUS * 1.45) / (Math.tan(vFovRad / 2) * Math.min(1, Math.max(0.45, aspect)));
      const minDistance = container.clientWidth < 1024 ? 5.8 : 6.8;
      camera.position.set(0, 0.05, Math.max(minDistance, requiredDist));
      camera.updateProjectionMatrix();

      // On mobile screens, globe is perfectly centered; on large screens, gently offset
      globeRootGroup.position.x = container.clientWidth < 1024 ? 0 : -0.15;

      renderer.setSize(container.clientWidth, container.clientHeight);
    };
    onResize();
    const resizeObserver = new ResizeObserver(onResize);
    resizeObserver.observe(container);

    // 9. 60FPS Render Loop
    let animationFrameId: number;

    const animate = (now: number) => {
      animationFrameId = requestAnimationFrame(animate);

      // Inertia & Continuous Orbit
      if (!isDragging) {
        if (!prefersReducedMotion) {
          globeRotationGroup.rotation.y += 0.0016 + velocityX;
          globeRotationGroup.rotation.x += velocityY;
        }
        velocityX *= 0.94;
        velocityY *= 0.94;
      }

      // Parallax Tilt
      currentTiltX += (targetTiltX - currentTiltX) * 0.04;
      currentTiltY += (targetTiltY - currentTiltY) * 0.04;
      globeRootGroup.rotation.y = currentTiltX * 0.25;
      globeRootGroup.rotation.x = (23.4 * Math.PI) / 180 + currentTiltY * 0.18;

      // Clouds rotation parallax
      cloudsMesh.rotation.y += 0.0005;

      // Oslo Beacon Pulse
      const pulse = (now * 0.0022) % 1;
      rippleMesh.scale.setScalar(1 + pulse * 2.0);
      (rippleMat as THREE.MeshBasicMaterial).opacity = Math.max(0, 1 - pulse);

      // Traveling Packets
      networkArcs.forEach((arc) => {
        const t = (now * 0.001 * arc.speed + arc.offset) % 1;
        const pt = arc.curve.getPoint(t);
        arc.packetMesh.position.copy(pt);
      });

      renderer.render(scene, camera);
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationFrameId);
      domElement.removeEventListener("pointerdown", onPointerDown);
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("pointerup", onPointerUp);
      resizeObserver.disconnect();

      if (container.contains(domElement)) {
        container.removeChild(domElement);
      }
      renderer.dispose();
      sphereGeometry.dispose();
      cloudsGeometry.dispose();
      beaconGeo.dispose();
      rippleGeo.dispose();
      packetGeo.dispose();

      dayMaterial.dispose();
      nightMaterial.dispose();
      cloudsMaterial.dispose();
      beaconMat.dispose();
      rippleMat.dispose();
      packetMat.dispose();

      dayTexture.dispose();
      nightTexture.dispose();
      bumpTexture.dispose();
      specularTexture.dispose();
      cloudsTexture.dispose();
    };
  }, []);

  return (
    <div className="relative w-full h-full select-none group">
      {/* 3D WebGL Canvas Layer */}
      <div
        ref={containerRef}
        className={`w-full h-full cursor-grab active:cursor-grabbing transition-opacity duration-700 ${
          isLoaded ? "opacity-100" : "opacity-0"
        }`}
        title="Click and drag to rotate the 3D Earth Globe"
      />

      {/* Luxury Studio HUD Controls Overlay (Responsive bottom-right placement) */}
      <div className="absolute bottom-3 right-3 sm:bottom-5 sm:right-5 z-20 flex flex-col items-end gap-1.5 sm:gap-2 pointer-events-auto">
        {/* Day / Night Mode & View Reset Capsule */}
        <div className="flex items-center gap-0.5 sm:gap-1 p-1 bg-white/95 backdrop-blur-md border border-[#171717]/15 shadow-sm rounded-full">
          <button
            type="button"
            onClick={() => applyThemeMode("day")}
            className={`flex items-center gap-1 sm:gap-1.5 px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full text-[11px] sm:text-xs font-mono font-semibold transition-all ${
              themeMode === "day"
                ? "bg-[#171717] text-[#FAF6F0] shadow-xs"
                : "text-[#171717]/65 hover:text-[#171717]"
            }`}
            title="Switch to NASA Photorealistic Day View"
          >
            <Sun className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#C7F36B]" />
            <span>Day</span>
          </button>

          <button
            type="button"
            onClick={() => applyThemeMode("night")}
            className={`flex items-center gap-1 sm:gap-1.5 px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full text-[11px] sm:text-xs font-mono font-semibold transition-all ${
              themeMode === "night"
                ? "bg-[#171717] text-[#C7F36B] shadow-xs"
                : "text-[#171717]/65 hover:text-[#171717]"
            }`}
            title="Switch to Night City Lights & Digital Grid"
          >
            <Moon className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#C7F36B]" />
            <span>Night</span>
          </button>

          <button
            type="button"
            onClick={() => resetOrientationRef.current?.()}
            className="p-1 sm:p-1.5 text-[#171717]/65 hover:text-[#171717] hover:bg-black/5 rounded-full transition-colors"
            title="Reset Globe View"
            aria-label="Reset Globe View"
          >
            <RotateCcw className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
          </button>
        </div>

        {/* Studio Status & Drag Hint Badge */}
        <div className="inline-flex items-center gap-1.5 px-2.5 py-1 sm:px-3 sm:py-1.5 bg-[#171717]/90 backdrop-blur-md text-[#FAF6F0] rounded-full text-[9px] sm:text-[10px] font-mono tracking-wider uppercase border border-white/10 shadow-sm opacity-90 group-hover:opacity-100 transition-opacity">
          <Compass className={`w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#C7F36B] ${isInteracting ? "animate-spin" : ""}`} />
          <span>{isInteracting ? "Orbiting" : "Drag Globe · Oslo HQ"}</span>
        </div>
      </div>
    </div>
  );
}
