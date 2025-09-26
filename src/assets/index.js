import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { gsap } from 'gsap';

// Export model variable to make it accessible
export let scene, camera, renderer, model, animationId;

export function init3DScene(canvas) {
  // Scene setup
  scene = new THREE.Scene();
  scene.background = new THREE.Color(0x000000);
  
  // Camera setup
  camera = new THREE.PerspectiveCamera(45, 1, 0.1, 100);
  camera.position.set(0, 1, 4);

  // Renderer setup
  renderer = new THREE.WebGLRenderer({ 
    canvas,
    antialias: true,
    alpha: true,
    powerPreference: "high-performance"
  });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.setSize(600, 600);
  renderer.outputEncoding = THREE.sRGBEncoding;
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.2;

  // Lighting setup
  setupLights();

  // Load model
  loadModel();

  // Start animation loop
  animate();
}

// ... (keep the rest of the threeScene.js code the same)

function setupLights() {
  // Key Light
  const keyLight = new THREE.DirectionalLight(0xffffff, 2);
  keyLight.position.set(3, 3, 3);
  scene.add(keyLight);

  // Fill Light
  const fillLight = new THREE.DirectionalLight(0xffffff, 0.8);
  fillLight.position.set(-2, 1, -3);
  scene.add(fillLight);

  // Back Light
  const backLight = new THREE.DirectionalLight(0xffffff, 1.2);
  backLight.position.set(-1, 2, -4);
  scene.add(backLight);

  // Rim Light
  const rimLight = new THREE.DirectionalLight(0x4d76ff, 0.6);
  rimLight.position.set(0, 3, -2);
  scene.add(rimLight);

  // Ambient Light
  const ambientLight = new THREE.AmbientLight(0x404040, 0.5);
  scene.add(ambientLight);

  // Point Light
  const pointLight = new THREE.PointLight(0xffffff, 0.5, 10);
  pointLight.position.set(0, 1, 2);
  scene.add(pointLight);
}

function loadModel() {
  const loader = new GLTFLoader();
  loader.load(
    '/Logo.glb',
    (gltf) => {
      model = gltf.scene;
      model.scale.set(1.5, 1.5, 1.5);
      
      model.traverse((child) => {
        if (child.isMesh) {
          child.material.envMapIntensity = 0.5;
          child.material.metalness = 0.2;
          child.material.roughness = 0.5;
        }
      });
      
      scene.add(model);
      startAutoRotation();
      startFloatingAnimation();
    },
    undefined,
    (error) => console.error('Error loading model:', error)
  );
}

function animate() {
  animationId = requestAnimationFrame(animate);
  renderer.render(scene, camera);
}

function startAutoRotation() {
  if (model) {
    model.rotation.y += 0.002;
  }
}

function startFloatingAnimation() {
  if (!model) return;
  
  gsap.to(model.position, {
    y: "+0.2",
    duration: 3,
    repeat: -1,
    yoyo: true,
    ease: "sine.inOut"
  });
}

export function cleanup3DScene() {
  if (animationId) {
    cancelAnimationFrame(animationId);
  }
  // Additional cleanup if needed
}