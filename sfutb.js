import './sfutb.css'
import { resources } from "./source/resources";

const canvas = document/querySelector("#game-canvas");
const ctx = canvas.getContext("2d");

const draw = () => {
  const sky = resources.images.sky
  if (sky.isLoaded) {
  ctx.drawImage(sky.image, 0, 0)
  }

  const ground = resources.images.sky
  if (sky.isLoaded) {
  ctx.drawImage(ground.image, 0, 0)
  }
}

setInterval(() => {
  console.log("draw")
  draw()
}, 300)
draw()