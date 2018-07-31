import { States } from "../states/states.enum";
import { IState } from "../states/state.model";
import { MainMenu } from "../states/main-menu.state";

export class Main {
    private canvas: HTMLCanvasElement;
    private context: CanvasRenderingContext2D;
    private states: IState[];

    constructor( initCanvas: HTMLCanvasElement, initContext: CanvasRenderingContext2D) {
        this.canvas = initCanvas;
        this.context = initContext;
        this.states = [];
        console.log(this.states);
        this.addNewState( States.MainMenu );
        console.log(this.states);
        window.setInterval(this.update(), "33");
    }

    public update(): void{
        this.states[this.states.length-1].update();
        this.draw();
    }

    public draw(): void{
        this.context.clearRect(0,0,this.canvas.width,this.canvas.height);
        this.states[this.states.length-1].draw();
    }

    private addNewState( stateID: States ): void {
        switch ( stateID ) {
            case States.MainMenu :
                this.states.push(new MainMenu(this.canvas, this.context));
                break;
        }
    }
}
