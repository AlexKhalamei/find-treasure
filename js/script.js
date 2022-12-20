let getRandomNumber = (size) => {
  return Math.floor(Math.random() * size);
};

let getDistance = (event, target) => {
  let diffX = event.offsetX - target.x;
  let diffY = event.offsetY - target.y;
  return Math.sqrt(diffX * diffX + diffY * diffY);
};

let getDistanceHint = (distance) => {
  if (distance < 10) {
    $("#distance").css({ color: "#A52A2A" });
    return "Boiling hot!";
  } else if (distance < 20) {
    $("#distance").css({ color: "#D2691E" });
    return "Really hot!";
  } else if (distance < 40) {
    $("#distance").css({ color: "#DAA520" });
    return "Hot!";
  } else if (distance < 80) {
    $("#distance").css({ color: "#F4A460" });
    return "Warm";
  } else if (distance < 160) {
    $("#distance").css({ color: "#1E90FF" });
    return "Cold..";
  } else if (distance < 320) {
    $("#distance").css({ color: "#0000FF" });
    return "Really cold...";
  } else {
    $("#distance").css({ color: "#0000CD" });
    return "Freezing...!";
  }
};

let width = 400;
let height = 400;
let clicks = 0;

let target = {
  x: getRandomNumber(width),
  y: getRandomNumber(height),
};

$("#map").click((event) => {
  clicks++;
  let clickFlow = 40 - clicks;
  let distance = getDistance(event, target);
  let distanceHint = getDistanceHint(distance);

  $("#distance").text(distanceHint);
  $("#clickFlow").text(`You have ${clickFlow} clicks left `);

  if (distance < 8) {
    alert(`You are WIN! Found the treasure in ${clicks} clicks!`);
  }
  if (clicks > 40) {
    alert(`GAME OVER! You have more than 40 clicks`);
  }
});
