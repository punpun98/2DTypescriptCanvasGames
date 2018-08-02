import { Key } from "../global/key-codes.enum";
import { StatesAvailable } from "./states.enum";
import { Subject } from "../../node_modules/rxjs/internal/Subject";

export interface IState {
    id: StatesAvailable;
    canvas: HTMLCanvasElement;
    context: CanvasRenderingContext2D;
    addNewStateEmitter: Subject<StatesAvailable>;
    removeStateEmitter: Subject<StatesAvailable>;
    update(): void;
    draw(): void;
    keyPressed( keyPressed: Key): void;
    keyReleased( keyReleasedID: Key): void;
    mouseDown( mouseX: number, mouseY: number): void;
    mouseUp( mouseX: number, mouseY: number): void;
    addState( newState: StatesAvailable): void;
    removeState( returnState?: StatesAvailable): void;
}
