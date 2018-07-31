import { Key } from "../global/key-codes.enum";
import { States } from "./states.enum";

export interface IState {
    update(): void;
    draw(): void;
    keyPressed( keyPressed: Key): void;
    keyReleased( keyReleasedID: Key): void;
    addState( newState: States): void;
    removeState(): void;
}
