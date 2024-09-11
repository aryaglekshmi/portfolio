import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/Addons.js";

function bgSnow() {
  const w = window.innerWidth;
  const h = window.innerHeight;
  const bgElement = document.getElementById("bgSnow");
  const materials: THREE.PointsMaterial[] = [];

  bubbleLoader();

  function snowLoader() {
    if (bgElement) {
      const camera = new THREE.PerspectiveCamera(75, w / h, 1, 2000);
      camera.position.z = 1000;

      const scene = new THREE.Scene();
      scene.fog = new THREE.FogExp2(0x000000, 0.0008);

      const renderer = new THREE.WebGLRenderer();
      renderer.setPixelRatio(window.devicePixelRatio);
      renderer.setSize(w, h);
      bgElement.appendChild(renderer.domElement);

      const geometry = new THREE.BufferGeometry();
      const vertices = [];
      const textureLoader = new THREE.TextureLoader();
      let mouseX: number = 0,
        mouseY: number = 0;

      const assignRGB = (texture: THREE.Texture) => {
        texture.colorSpace = THREE.SRGBColorSpace;
      };

      const textures = [
        "three/snowflake1.png",
        "three/snowflake2.png",
        "three/snowflake3.png",
        "three/snowflake4.png",
        "three/snowflake5.png",
      ].map((url) => textureLoader.load(url, assignRGB));

      for (let i = 0; i < 10000; i++) {
        const x = THREE.MathUtils.randFloatSpread(2000);
        const y = THREE.MathUtils.randFloatSpread(2000);
        const z = THREE.MathUtils.randFloatSpread(2000);

        vertices.push(x, y, z);
      }

      geometry.setAttribute(
        "position",
        new THREE.Float32BufferAttribute(vertices, 3)
      );

      const parameters: any[] = [
        [new THREE.Color(0.9, 0.1, 0.1), textures[0], Math.random() * 10 + 10], // Dark red
        [new THREE.Color(0.1, 0.9, 0.1), textures[1], Math.random() * 10 + 10], // Dark green
        [new THREE.Color(0.1, 0.1, 0.9), textures[2], Math.random() * 10 + 10], // Dark blue
        [new THREE.Color(0.9, 0.9, 0.1), textures[3], Math.random() * 10 + 10], // Dark yellow
        [new THREE.Color(0.9, 0.1, 0.9), textures[4], Math.random() * 10 + 10], // Dark magenta
      ];

      for (let i = 0; i < parameters.length; i++) {
        const color = parameters[i][0];
        const sprite = parameters[i][1];
        const size = parameters[i][2];

        materials[i] = new THREE.PointsMaterial({
          size: size,
          map: sprite,
          blending: THREE.AdditiveBlending,
          depthTest: false,
          transparent: true,
        });

        materials[i].color = color;

        const particles = new THREE.Points(geometry, materials[i]);
        scene.add(particles);
      }

      const onPointerMove = (event: any) => {
        if (event.isPrimary === false) return;

        mouseX = event.clientX - w / 2;
        mouseY = event.clientY - h / 2;
      };
      document.body.style.touchAction = "none";
      document.body.addEventListener("pointermove", onPointerMove);

      const animate = () => {
        const time = Date.now() * 0.00001;
        camera.position.x += (mouseX - camera.position.x) * 0.05;
        camera.position.y += (-mouseY - camera.position.y) * 0.05;
        for (let i = 0; i < scene.children.length; i++) {
          const object = scene.children[i];
          if (object instanceof THREE.Points) {
            object.rotation.y = time * (i < 4 ? i + 1 : -(i + 1));
          }
        }
        renderer.render(scene, camera);
      };

      renderer.setAnimationLoop(animate);

      const onWindowResize = () => {
        const w = window.innerWidth;
        const h = window.innerHeight;
        camera.aspect = w / h;
        camera.updateProjectionMatrix();
        renderer.setSize(w, h);
      };

      window.addEventListener("resize", onWindowResize);
    }
  }

  function bubbleLoader() {
    if (bgElement) {
      const renderer = new THREE.WebGLRenderer({
        antialias: true,
        alpha: true,
      });
      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.shadowMap.enabled = false;
      renderer.shadowMap.type = THREE.PCFSoftShadowMap;
      renderer.shadowMap.needsUpdate = true;
      bgElement.appendChild(renderer.domElement);

      const onWindowResize = () => {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
      };

      const mathRandom = (num = 1): number => {
        return -Math.random() * num + Math.random() * num;
      };

      window.addEventListener("resize", onWindowResize, false);

      const camera = new THREE.PerspectiveCamera(
        35,
        window.innerWidth / window.innerHeight,
        1,
        500
      );
      camera.position.set(0, 0, 5);

      const scene = new THREE.Scene();

      const modularGroup = new THREE.Object3D();

      scene.add(modularGroup);
      const controls= new OrbitControls(camera,renderer.domElement);

      const init = () => {
        for (let i = 0; i < 50; i++) {
          const geometry = new THREE.SphereGeometry(1, 32, 32);
          const material = new THREE.MeshStandardMaterial({
            color: 0x1e3a8a, // Dark blue color
            transparent: true,
            opacity: 0.5, // Slightly more transparent for a bubble effect
            wireframe: false,
          });
          const bubble = new THREE.Mesh(geometry, material);
          bubble.userData.speedRotation = Math.random() * 0.1;
          bubble.userData.positionX = mathRandom();
          bubble.userData.positionY = mathRandom();
          bubble.userData.positionZ = mathRandom();
          bubble.castShadow = true;
          bubble.receiveShadow = true;

          const newScaleValue = mathRandom(0.1);

          bubble.scale.set(newScaleValue, newScaleValue, newScaleValue);
          bubble.rotation.x = mathRandom((180 * Math.PI) / 180);
          bubble.rotation.y = mathRandom((180 * Math.PI) / 180);
          bubble.rotation.z = mathRandom((180 * Math.PI) / 180);
          bubble.position.set(
            bubble.userData.positionX,
            bubble.userData.positionY,
            bubble.userData.positionZ
          );
          modularGroup.add(bubble);
        }
      };


      const ambientLight = new THREE.AmbientLight(0xffffff, 0.2); // Softer white light
      scene.add(ambientLight);
      
      const directionalLight = new THREE.DirectionalLight(0xffffff, 0.5);
      directionalLight.position.set(5, 5, 5);
      scene.add(directionalLight);
      
      const rectSize = 2;
      const intensity = 30;
      const rectLight = new THREE.RectAreaLight(0x4489db, intensity, rectSize, rectSize);
      rectLight.position.set(0, 0, 5);
      rectLight.lookAt(0, 0, 0);
      scene.add(rectLight);

      const mouse = new THREE.Vector2();
      const uSpeed = 0.1;
      const animate = () => {
        const time = performance.now() * 0.001;
        controls.update()
        requestAnimationFrame(animate);

        for (let i = 0, l = modularGroup.children.length; i < l; i++) {
          const bubble = modularGroup.children[i] as THREE.Mesh;
          bubble.rotation.x += 0.008;
          bubble.rotation.y += 0.005;
          bubble.rotation.z += 0.003;
      
          // Update positions to create a floating effect
          bubble.position.x += Math.sin(time * bubble.userData.positionZ) * 0.01;
          bubble.position.y += Math.cos(time * bubble.userData.positionX) * 0.01;
          bubble.position.z += Math.sin(time * bubble.userData.positionY) * 0.01;
        }

        modularGroup.rotation.y -=
          (mouse.x * 4 + modularGroup.rotation.y) * uSpeed;
        modularGroup.rotation.x -=
          (-mouse.y * 4 + modularGroup.rotation.x) * uSpeed;
        camera.lookAt(scene.position);
        renderer.render(scene, camera);
      };

      animate();
      init();
    }
  }
}

export { bgSnow };
