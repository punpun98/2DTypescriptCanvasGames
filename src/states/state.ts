import { Key } from "../global/key-codes.enum";
import { StatesAvailable } from "./states.enum";
import { IState } from "./state.model";
import { Subject } from "../../node_modules/rxjs/internal/Subject";

export class State implements IState {
    public canvas: HTMLCanvasElement;
    public context: CanvasRenderingContext2D;
    public id: StatesAvailable;
    public addNewStateEmitter = new Subject<StatesAvailable>();
    public removeStateEmitter = new Subject<StatesAvailable>();

    constructor( initCanvas: HTMLCanvasElement, initContext: CanvasRenderingContext2D, id: StatesAvailable) {
        this.canvas = initCanvas;
        this.context = initContext;
        this.id = id;
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

    public mouseDown( mouseX: number, mouseY: number ) {
        return;
    }

    public mouseUp( mouseX: number, mouseY: number ) {
        return;
    }

    public addState( newState: StatesAvailable ): void {
        this.addNewStateEmitter.next( newState );
    }

    public removeState( returnToState?: StatesAvailable): void {
        this.removeStateEmitter.next( returnToState !== undefined ? returnToState : StatesAvailable.PreviousState);
    }
}
