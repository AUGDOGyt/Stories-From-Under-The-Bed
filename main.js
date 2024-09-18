import 'main.css';
import { Resources } from "source/resources.js";

const canvas = document/querySelector("game-canvas");
const ctx = canvas.getContext("2d");

const skySprite = new Sprite({
  resource: Resources.images.sky,
  frameSize: new Vector2(320, 180)
});

const groundSprite = new Sprite({
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
})

const heroPos = new Vector2(16*5, 16*5);

const draw = () => {
  skySprite.drawImage(ctx, 0, 0);
  groundSprite.drawImage(ctx, 0, 0);
  
  const herOffset = new Vector2(-8, -21);
  const heroPosX = heroPos.x + heroOffset.x;
  const heroPosY = heroPos.y + heroOffset.y;
  
  shadow.dramImage(ctx, heroPosX, heroPosY);
  hero.drawImage(ctx, heroPosX, heroPosY);
};


setInterval(() => {
  hero.frame += 1;
  draw();
}, 300);
