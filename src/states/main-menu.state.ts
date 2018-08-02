import { Key } from "../global/key-codes.enum";
import { StatesAvailable } from "./states.enum";
import { IState } from "./state.model";
import { State } from "./state";

export class MainMenu extends State {

    constructor( initCanvas: HTMLCanvasElement, initContext: CanvasRenderingContext2D, id: StatesAvailable) {
        super(initCanvas, initContext, id);
    }

    public update(): void {
        return;
    }

    public draw(): void {
        this.context.fillText("Hello World!", 100, 100);
        return;
    }
}
