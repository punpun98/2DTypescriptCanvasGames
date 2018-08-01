import { States } from "../states/states.enum";
import { IState } from "../states/state.model";
import { MainMenu } from "../states/main-menu.state";
import { Subscription } from "../../node_modules/rxjs/internal/Subscription";
import { fromEvent } from "../../node_modules/rxjs/index";

export class Main {
    public canvas: HTMLCanvasElement;
    public context: CanvasRenderingContext2D;
    public states: IState[];
    public keydownEventListener: Subscription;
    public keyupEventListener: Subscription;

    constructor( initCanvas: HTMLCanvasElement, initContext: CanvasRenderingContext2D) {
        this.canvas = initCanvas;
        this.context = initContext;
        this.states = [];
        this.addNewState( States.MainMenu );
        this.keydownEventListener = fromEvent<KeyboardEvent>(document, "keydown").subscribe( (event: KeyboardEvent) => {
            this.keyPressed(event);
        });
        this.keyupEventListener = fromEvent<KeyboardEvent>(document, "keyup").subscribe( (event: KeyboardEvent) => {
            this.keyReleased(event);
        });
    }

    public update(): void {
        this.states[this.states.length - 1].update();
        this.draw();
    }

    public draw(): void {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.states[this.states.length - 1].draw();
    }

    public keyPressed( event: KeyboardEvent ) {
        this.states[this.states.length - 1].keyPressed( event.keyCode );
    }

    public keyReleased( event: KeyboardEvent ) {
        this.states[this.states.length - 1].keyReleased( event.keyCode );
    }

    private addNewState( stateID: States ): void {
        switch ( stateID ) {
            case States.MainMenu :
                this.states.push(new MainMenu(this.canvas, this.context, States.MainMenu));
                break;
            default :
                console.error( "State ID:" + stateID + " does not exist" );
        }
        this.states[this.states.length - 1].addNewStateEmitter.subscribe( (newState: States) => {
            console.log("Adding State:" + stateID);
            this.addNewState(newState);
        });
        this.states[this.states.length - 1].removeStateEmitter.subscribe( (returnState: States) => {
            this.returnToState(returnState);
        });
    }

    private returnToState( returnState: States): void {
        if (returnState === States.PreviousState) {
            this.states.pop();
            return;
        }
        if (this.states.length !== 0 ) {
            if (returnState !== this.states[this.states.length - 1].id) {
                this.states[this.states.length - 1].addNewStateEmitter.unsubscribe();
                this.states[this.states.length - 1].removeStateEmitter.unsubscribe();
                this.states.pop();
                this.returnToState(returnState);
            }
        } else {
            this.addNewState(States.MainMenu);
        }

    }
}
