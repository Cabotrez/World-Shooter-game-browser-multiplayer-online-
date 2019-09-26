// when game is launched / started it should get a array of all the players on the server
// array of online players
// x, y of online players
// skin
// direction facing

class OnlinePlayer {
  constructor() {
    this.color = "#c878c0";
    this.text = "OPPONENT";
    this.bulletRadius = bulletRadius;

    // REMOVED THIS FOR NOW
    // setInterval(() => {
    //   draw();
    // }, 100);
  }

  draw() {
    if (serverPlayers) {
      for (let j = 0; j < serverPlayers.length; j++) {
        this.text = serverPlayers[j].name;
        if (serverPlayers[j].alive === false) {
          fill("#333333");
          this.text = "Dead :X";
        } else {
          this.text = serverPlayers[j].name;
          fill(this.color);
        }
        ellipse(serverPlayers[j].x, serverPlayers[j].y, playerSize, playerSize);

        //text

        textAlign(CENTER);
        fill("#ffffff");
        text(this.text, serverPlayers[j].x, serverPlayers[j].y);

        // draw server bullets
        // if (serverPlayers[j].bullets.length > 0) {
        //   for (let m = 0; m < serverPlayers[j].bullets.length; m++) {
        //     ellipse(
        //       serverPlayers[j].bullets[m].x,
        //       serverPlayers[j].bullets[m].y,
        //       this.bulletRadius
        //     );

        //     // CHECK COLLISION FOR THESE BULLETS ^
      }
    }
  }
}
