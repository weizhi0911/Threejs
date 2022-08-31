import * as THREE from 'three'

// 导入轨道控制器
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
var scene = new THREE.Scene(); // 场景
var camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 1000); // 相机视角

var renderer = new THREE.WebGLRenderer(); // 渲染
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

var geometry = new THREE.BoxGeometry(1, 1, 1);
var material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
var cube = new THREE.Mesh(geometry, material);
scene.add(cube);

camera.position.z = 5; // 这里z数值越小，立方体越大

// 轨道控制器需要requestAnimationFrame实时渲染
const controls = new OrbitControls(camera, renderer.domElement)

// 坐标轴辅助器
var axesHelper = new THREE.AxesHelper(5);
scene.add(axesHelper);



const clock = new THREE.Clock()



var animate = function () {
  // 动画循环，不用定时器是因为用户切换到另一个浏览器选项卡时requestAnimationFrame会暂停，不会浪费计算机的计算资源和电量
  requestAnimationFrame(animate);

  // 获取时钟运行得总时长
  const time = clock.getElapsedTime();

  // 获取运行间隔
  const deltaTime = clock.getDelta()
  console.log('总时长:' + time, '间隔时间:' + deltaTime)




  // 旋转
  cube.rotation.x += 0.04;
  cube.rotation.y += 0.04;

  cube.position.x += 0.01


  if (cube.position.x > 3) {
    cube.position.x = 0;

  }

  renderer.render(scene, camera);
};

animate();