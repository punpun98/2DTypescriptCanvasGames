import { Key } from "../global/key-codes.enum";
import { States } from "./states.enum";
import { Subject } from "../../node_modules/rxjs/internal/Subject";

export interface IState {
    id: States;
    canvas: HTMLCanvasElement;
    context: CanvasRenderingContext2D;
    addNewStateEmitter: Subject<States>;
    removeStateEmitter: Subject<States>;
    update(): void;
    draw(): void;
    keyPressed( keyPressed: Key): void;
    keyReleased( keyReleasedID: Key): void;
    addState( newState: States): void;
    removeState( returnState?: States): void;
}
