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

// this function runs the game. If this function wasn't there
// the game would not be run. This is a critical function.
function runGame() {
    /* 
    this method UPDATES the game
    */
    game.update();
}
