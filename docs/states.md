---
title: 2D Typescript Canvas Games
layout: page
navigation: 2
---
# States

Handles the current state of the game and the switching from different states

## State Enum
Contains which states can be switched to currently.

## State Model 

### Interface
Contains objects that are necessary within the different states

## State
A class for creating instances of states
### Variables
```typescript
public canvas: HTMLCanvasElement;
```
A HTML canvas object
```typescript
public context: CanvasRenderingContext2D;
```
Draws on the HTML canvas
```typescript
public id: StatesAvailable;
```
ID of the state
```typescript
public addNewStateEmitter = new Subject<StatesAvailable>();
```
```typescript
public removeStateEmitter = new Subject<StatesAvailable>();
```
### Functions

#### update
```typescript
public update(): void
```
##### Params

##### Returns

##### Errors

#### draw
```typescript
public draw(): void
```
##### Params

##### Returns

##### Errors

#### keyPressed
```typescript
public keyPressed( keyCodeId: Key): void
```
##### Params

##### Returns

##### Errors

#### mouseDown
```typescript
public mouseDown( mouseX: number, mouseY: number )
```
##### Params

##### Returns

##### Errors

#### mouseUp
```typescript
public mouseUp( mouseX: number, mouseY: number )
```
##### Params

##### Returns

##### Errors

#### addState
```typescript
public addState( newState: StatesAvailable ): void
```
##### Params

##### Returns

##### Errors

#### removeState
```typescript
public removeState( returnToState?: StatesAvailable): void
```
##### Params

##### Returns

##### Errors