function moveBall(direction) {
  var machine = document.querySelector(".lineBallContainer");
  var ball = document.querySelector(".ball");
  var tray = document.getElementsByClassName(".tray");
  var currentPosition = 0;
  var smooth = "1500ms";
  var snappy = "500ms";
  var rotation = "0deg";
  machine.style.transition = "smooth";
  console.log(direction);

  if (direction === "down") {
    {
      machine.style.transition = smooth;
      machine.style.transform = "rotate(45deg)";
      ball.style.transition = smooth;

      ball.style.marginLeft = "380px";

      ball.style.transform = "rotate(0deg)";
      ball.style.transitionTimingFunction = "ease-in";
    }
  } else if (direction === "up") {
    machine.style.transition = smooth;
    machine.style.transform = "rotate(-45deg)";
    ball.style.transition = smooth;
    ball.style.marginLeft = "-380px";
    ball.style.transform = "rotate(-720deg)";
    ball.style.marginBottom = "0px";
    ball.style.transitionTimingFunction = "ease-in";
  } else if (direction === "left") {
    machine.style.transition = smooth;
    machine.style.left = "-100px";
    ball.style.transition = snappy;
  } else if (direction === "right") {
    ball.style.transition = snappy;
    machine.style.transition = smooth;

    machine.style.left = "100px";
    ball.style.transition = snappy;
  }
  return;
}
