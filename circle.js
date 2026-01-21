class Circle {
  constructor(mass, x, y, smooth, rootBottom) {
    this.mass = mass;
    this.x = x;
    this.y = y;
    this.smooth = smooth;
    this.rootBottom = rootBottom;
  }
  createCircle() {
    const circle = document.createElement("div");
    circle.style.cssText =
      "position:absolute; width:65px; height:65px; background-size:cover; background-position:center;";
    circle.style.backgroundImage = "url(./pelmeni.png)";
    circle.style.top = this.y - 45 / 2 + "px";
    circle.style.left = this.x - 45 / 2 + "px";
    let startFall = null;
    let cordY = this.y;
    let rootBottom = this.rootBottom * 0.89;
    // circle.addEventListener("click", () => {
    //   console.log(circle.getBoundingClientRect());
    //   circle.style.top = this.smooth + "px";
    //   circle.style.left = this.smooth + "px";
    // });
    requestAnimationFrame(function fall(time) {
      if (!startFall) {
        startFall = time;
      }
      const progress = (time - startFall) / 3000;
      const da = cordY - 45 / 2 + progress * rootBottom;
      circle.style.top = da + "px";
      if (da <= rootBottom) {
        requestAnimationFrame(fall);
      }
    });
    return circle;
  }
}
export { Circle };
