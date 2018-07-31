import { Key } from "../global/key-codes.enum";
import { States } from "./states.enum";
import { IState } from "./state.model";
import { State } from "./state";

export class MainMenu extends State implements IState {

    constructor( initCanvas: HTMLCanvasElement, initContext: CanvasRenderingContext2D) {
        super(initCanvas, initContext);
    }

    public update(): void {
        return;
    }

    public draw(): void {
        this.context.fillText('Hello World!',100,100);
        return;
    }
}
