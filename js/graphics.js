var canvas;
var gl;
var windowWidth;
var windowHeight;
function setupWebGL() {
    canvas = document.getElementById('gameCanvas');
    gl = canvas.getContext('experimental-webgl');
    gl.clearColor(0.3, 0.4, 0.5, 1);
}
function updateWebGL() {
    windowWidth = window.innerWidth;
    windowHeight = window.innerHeight;
    canvas.width = windowWidth;
    canvas.height = windowHeight;
    gl.viewport(0, 0, windowWidth, windowHeight);
    gl.clear(gl.COLOR_BUFFER_BIT);
}