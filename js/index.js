function getRandomColor() {
  return ("00000" + ((Math.random() * (1 << 24)) | 0).toString(16)).slice(-6);
}
class Pianotile {
  constructor(name, body) {
    this.name = name;
    this.body = body;
    this.color = "#" + getRandomColor();
    this.htmlRef = this.generateTile();
    this.setTile();
  }
  generateTile() {
    this.body.insertAdjacentHTML("beforeend", `<div class="tile"></div>`);
    const tile = this.body.querySelector(".tile:last-child");
    tile.addEventListener("click", () => {
      console.log("op tile geklikt");
      document.body.style.backgroundColor = this.color;
    });
    return tile;
  }
  setTile() {
    //this.htmlRef.style.right = "0px";
    //this.htmlRef.style.top = "0px";
    this.htmlRef.style.width = 50 + "px";
    this.htmlRef.style.height = 50 + "%";
    this.htmlRef.style.backgroundColor = this.color;
  }
}
const body = document.querySelector("body");
body.addEventListener("click", (e) => {
  if (e.target == body) {
    console.log("Op body geklikt");
    alltiles.push(new Pianotile(Math.random().toString(36).substr(2, 6), body));
  }
});

let i = 0;
let alltiles = [];
setInterval(function () {
  alltiles = [...document.querySelectorAll(".tile")];
  if (i >= alltiles.length) {
    i = 0;
  }
  document.body.style.backgroundColor = alltiles[i].style.backgroundColor;
  i++;
}, 2000);
