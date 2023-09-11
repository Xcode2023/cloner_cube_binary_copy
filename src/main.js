import { Application } from '@splinetool/runtime';

// import {Parallax} from 'parallax-js'
// const parallaxContainer = document.querySelector('#parallax-container');


// var parallaxInstance = new Parallax(parallaxContainer, {
//     relativeInput: true
//   });
//   parallaxInstance.friction(0.2, 0.2);

const canvas = document.getElementById('canvas3d');
const app = new Application(canvas);
// app.load('../rabbit.spline');
app.load('../i_phone_14_pro_copy.spline');
// app.load('https://prod.spline.design/GS-0O7st4BfEIq9D/scene.splinecode');

