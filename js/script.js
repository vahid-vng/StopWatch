let second = 0;
let minute = 0;

function start() {
  timer = setInterval(() => {
    startTimer();
  }, 1000);
}

function startTimer() {
  console.log("s");
  $(".second").html(second);
  $(".minute").html(minute);

  if (minute < 10) {
    $(".minute").html("0" + minute);
  }
  if (second < 10) {
    $(".second").html("0" + second);
  }

  if (second == 59) {
    second = 0;
    minute++;
  }
  second++;
}

$(".start").click(function () {
  start();
});

$(".stop").click(function () {
  clearInterval(timer);
});

$(".restart").click(function () {
  clearInterval(timer);
  second = 0;
  minute = 0;
  start();
});
