function getDirectionTo(mouseX, mouseY, width, height) {
  let mx = mouseX - width / 2;
  let my = mouseY - height / 2;
  let resultingX = mx;
  let resultingY = my;
  let magnitude = Math.sqrt(Math.pow(resultingX, 2) + Math.pow(resultingY, 2));
  return [resultingX / magnitude, resultingY / magnitude];
}

class bullet {
  constructor(x, y, xSpd, ySpd) {
    this.startingX = player.x;
    this.startingY = player.y;
    this.x = x;
    this.y = y;
    this.xSpd = 12 * xSpd;
    this.ySpd = 12 * ySpd;
  }

  display() {
    push();
    stroke(55, 255, 0);
    fill(55, 55, 55, 135);
    ellipse(this.x, this.y, 60);
    pop();
  }

  update() {
    if (this.xSpd <= 1) {
    }
    this.x += this.xSpd;
    this.y += this.ySpd;
    this.xSpd *= 0.994;
    this.ySpd *= 0.994;
  }

  outOfBounds() {
    let xdis = this.startingX - this.x;
    let ydis = this.startingY - this.y;

    if (xdis > 450 || ydis > 450) {
      return true;
    } else {
      return false;
    }
  }

  //   hitScan() {
  //     for (var i = 0; i < targetBalloons.length; i++) {
  //       var collideOrNot = collideCircleCircle(
  //         this.x,
  //         this.y,
  //         10,
  //         targetBalloons[i].myX(),
  //         targetBalloons[i].myY(),
  //         targetBalloons[i].myR()
  //       );
  //       if (collideOrNot) {
  //         targetBalloons.splice(i, 1);
  //         score += 1;
  //         return true;
  //       }
  //     }
  //     return false;
  //   }
}
