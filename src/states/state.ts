import { Key } from "../global/key-codes.enum";
import { States } from "./states.enum";
import { IState } from "./state.model";

export class State implements IState {
    public canvas: HTMLCanvasElement;
    public context: CanvasRenderingContext2D;

    constructor( initCanvas: HTMLCanvasElement, initContext: CanvasRenderingContext2D) {
        this.canvas = initCanvas;
        this.context = initContext;
    }

    public update(): void {
        return;
    }

    public draw(): void {
        return;
    }

    public keyPressed( keyCodeId: Key): void {
        return;
    }

    public keyReleased( keyCodeId: Key): void {
        return;
    }

    public addState( newState: States ): void {
        return;
    }

    public removeState(): void {
        return;
    }
}
