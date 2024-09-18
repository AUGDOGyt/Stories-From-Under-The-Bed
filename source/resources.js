class Resources {
    constructor(){
      
      this.toLoad = {
        sky: "source/sky (1).png",
        ground: "source/ground (1).png",
        hero: "source/hero-sheet (1).png",
        shadow: "source/shadow (1).png",
      };
      
      this.images = {};
        Object.keys(this.toLoad).forEach(key => {
          const img = new Image();
          img.src = this.toLoad[key];
          this.images[key] = {
            image: img,
            isLoaded: false
          };
          img.onLoad = () => {
            this.images[key].isLoaded = true;
          };
        });
    }
  }

  export const resources = new Resources();
