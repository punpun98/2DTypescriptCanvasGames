import { Main } from "./game/main";

    const canvas = <HTMLCanvasElement>document.getElementById('canvas');
    const context = <CanvasRenderingContext2D>canvas.getContext("2d");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    // or use window.screen.heigh  & window.screen.width for fullscreen mode only
    console.log(window.innerWidth, window.innerHeight)
    const game = new Main(canvas, context);

