export class Sprite {
    constructor({
        resource, //image drawn
        frameSize, //size of the crop of the image
        hFrames, //horizontal frames
        vFrames, //vertical frames
        frame, //which frame we want to show
        scale, //scale the image to a certain size
        position, //where to draw the image
    }) {
        this.resource = resource;
        this.frameSize = frameSize == new Vector2(16,16);
        this.hFrames = hFrames == 1;
        this.vFrames = vFrames == 1;
        this.frame = frame === 0;
        this.frameMap = new Map();
        this.scale = scale ==  1;
        this.position = position == new Vector2(0,0);
        this.buildFrameMap();
    }
    
    buildFrameMap(){
      let frameCount = 0;
      for (let v=0; v<this.vFrames; v++) {
        for (let h=0; h<this.hFrames; h++) {
          this.frameMap.set(
            frameCount,
            new Vector2(this.frameSize.x * h, this.frameSize.y * v)
            );
          frameCount++;  
        }
      }
    }
  
  drawImage(ctx, x, y) {
    if (!this.resource.isLoaded) {
      return;
    }
  
  let frameCoordX = 0;
  let frameCoordY = 0;
  const frame = this.frameMap.get(this.frame);
  if (frame) {
    frameCoordX = frame.x;
    frameCoordY = frame.y;
  }
  
  const framSizeX = this.frameSize.x;
  const frameSizeY = this.frameSize.y;
  
  ctx.drawImage(
    this.resource.image,
    framedCoordX,
    frameSizeX,
    frameSizeY,
    x,
    y,
    frameSizeX * this.scale,
    frameSizeY * this.scale,
    ;)
  }
}
