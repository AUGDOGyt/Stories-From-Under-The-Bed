import 'main.css';
import { Resources } from "resources.js";

const canvas = document.querySelector("game-canvas");
const ctx = canvas.getContext("2d");

const skySprite = new Sprite({
  resource: Resources.images.sky,
  frameSize: new Vector2(320, 180)
});

const groundsprite = new Sprite({
  resource: Resources.images.ground,
  frameSize: new Vector2(320, 180)
});

const Hero = new Sprite({
  resource: Resources.images.hero,
  frameSize: new Vector2(32, 32),
  hFrames: 3,
  vFrames: 8,
  frame: 1,
});

const Shadow = new Sprite({
  resource: Resources.images.shadow,
  frameSize: new Vector2(32, 32)
});

const heroPos = new Vector2(16*5, 16*5);
const input = new Input();

const update = () => {
  if (input.direction === DOWN) {
    heroPos.y += 1;
    hero.frame = 0;
  }
  if (input.direction === UP) {
    heroPos.y -= 1;
    hero.frame = 6;
  }
  if (input.direction === LEFT) {
    heroPos.x -= 1;
    hero.frame = 9;
  }
  if (input.direction === RIGHT) {
    heroPos.x += 1;
    hero.frame = 3;
  }
};

const draw = () => {
  skySprite.drawImage(ctx, 0, 0);
  groundSprite.drawImage(ctx, 0, 0);
  
  const herOffset = new Vector2(-8, -21);
  const heroPosX = heroPos.x + heroOffset.x;
  const heroPosY = heroPos.y + heroOffset.y;
  
  shadow.dramImage(ctx, heroPosX, heroPosY);
  hero.drawImage(ctx, heroPosX, heroPosY);
};


const gameLoop = new gameLoop(update, draw);
gameLoop.start();
