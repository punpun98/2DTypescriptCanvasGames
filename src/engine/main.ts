import { StatesAvailable } from "../states/states.enum";
import { IState } from "../states/state.model";
import { MainMenu } from "../menus/main-menu.state";
import { Subscription, Observable, fromEvent } from "../../node_modules/rxjs/index";
export class Main {
    public canvas: HTMLCanvasElement;
    public context: CanvasRenderingContext2D;
    public states: IState[];
    public keydownEventListener: Subscription;
    public keyupEventListener: Subscription;
    public mouseDownEventListener: Subscription;
    public mouseUpEventListener: Subscription;

    constructor( initCanvas: HTMLCanvasElement, initContext: CanvasRenderingContext2D) {
        this.canvas = initCanvas;
        this.context = initContext;
        this.states = [];
        this.addNewState( StatesAvailable.MainMenu );

        window.addEventListener("resize", this._setCanvasToWindowSize);

        this.keydownEventListener = fromEvent<KeyboardEvent>(document, "keydown").subscribe( (event: KeyboardEvent) => {
            this.keyPressed(event);
        });
        this.keyupEventListener = fromEvent<KeyboardEvent>(document, "keyup").subscribe( (event: KeyboardEvent) => {
            this.keyReleased(event);
        });

        this.mouseDownEventListener = fromEvent<MouseEvent>(document, "mousedown").subscribe( (event: MouseEvent) => {
            this.mouseDown(event);
        });
        this.mouseUpEventListener = fromEvent<MouseEvent>(document, "mouseup").subscribe( (event: MouseEvent) => {
            this.mouseUp(event);
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

    public mouseDown( event: MouseEvent ) {
        this.states[this.states.length - 1]
            .mouseDown( event.x - this.canvas.offsetLeft, event.y - this.canvas.offsetTop );
    }

    public mouseUp( event: MouseEvent ) {
        this.states[this.states.length - 1]
            .mouseUp( event.x - this.canvas.offsetLeft, event.y - this.canvas.offsetTop );
    }

    public _setCanvasToWindowSize() {
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
        console.log("test");
    }

    public addNewState( stateID: StatesAvailable ): void {
        switch ( stateID ) {
            case StatesAvailable.MainMenu :
                this.states.push(new MainMenu(this.canvas, this.context, StatesAvailable.MainMenu));
                break;
            default :
                console.error( "State ID:" + stateID + " does not exist" );
        }
        this.states[this.states.length - 1].addNewStateEmitter.subscribe( (newState: StatesAvailable) => {
            console.log("Adding State:" + stateID);
            this.addNewState(newState);
        });
        this.states[this.states.length - 1].removeStateEmitter.subscribe( (returnState: StatesAvailable) => {
            this.returnToState(returnState);
        });
    }

    public returnToState( returnState: StatesAvailable): void {
        if (returnState === StatesAvailable.PreviousState) {
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
            this.addNewState(StatesAvailable.MainMenu);
        }

    }

}
