export class GameLoop{
  constructor(update, render) {
    
    this.lastFrameTime = 0;
    this.acummulatedTime = 0;
    this.timeStep = 1000/60; //60fps
    
    this.update = update;
    this.render = render;
    
    this.rafID = null;
  }
}
