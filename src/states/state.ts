import { Key } from "../global/key-codes.enum";
import { States } from "./states.enum";
import { IState } from "./state.model";
import { Subject } from "../../node_modules/rxjs/internal/Subject";

export class State implements IState {
    public canvas: HTMLCanvasElement;
    public context: CanvasRenderingContext2D;
    public id: States;
    public addNewStateEmitter = new Subject<States>();
    public removeStateEmitter = new Subject<States>();

    constructor( initCanvas: HTMLCanvasElement, initContext: CanvasRenderingContext2D, id: States) {
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

    public addState( newState: States ): void {
        this.addNewStateEmitter.next( newState );
    }

    public removeState( returnToState?: States): void {
        this.removeStateEmitter.next( returnToState !== undefined ? returnToState : States.PreviousState);
    }
}
