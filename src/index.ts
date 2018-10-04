import { Main } from "./engine/main";

const canvas = document.getElementById("canvas") as  HTMLCanvasElement;
const context = canvas.getContext("2d") as CanvasRenderingContext2D;
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
// or use window.screen.heigh  & window.screen.width for fullscreen mode only
console.log(window.innerWidth, window.innerHeight);
const game = new Main(canvas, context);
console.log("Game Starting!");
window.setInterval(runGame, 33);

function runGame() {
    game.update();
}
