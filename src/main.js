import { Application } from '@splinetool/runtime';

const canvas = document.getElementById('canvas3d');
const app = new Application(canvas);
// app.load('../rabbit.spline');
app.load('../molang_3_d_copy (2).spline');
// app.load('https://prod.spline.design/GS-0O7st4BfEIq9D/scene.splinecode');


console.log( app);
const {_data} =app
console.log(_data);
