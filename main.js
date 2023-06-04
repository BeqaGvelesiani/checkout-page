minus = document.getElementById("Q_minus");
plus = document.getElementById("Q_plus");
counter = document.getElementById("Q_Counter");

minus1 = document.getElementById("Q_minus1");
plus1 = document.getElementById("Q_plus1");
counter1 = document.getElementById("Q_Counter1");

let x = 1;
let y = 1;

shipping = document.getElementById("sh");
total = document.getElementById("t");

shipping.innerText = 19;

total.innerText = `${x * 54.99 + y * 74.99}`;

function check_shipping() {
  if (x + y > 0) {
    shipping.innerText = 19;
  } else {
    shipping.innerText = 0;
  }
}

function check_total() {
  total.innerText = `${Math.round(x * 54.99 + y * 74.99).toFixed(2)}`;
}

//-------------

minus.addEventListener("click", function () {
  if (x != 0) {
    x -= 1;
  }
  counter.innerText = x;
  check_shipping();
  check_total();
});

plus.addEventListener("click", function () {
  x += 1;
  counter.innerText = x;
  check_shipping();
  check_total();
});

//-------------

minus1.addEventListener("click", function () {
  if (y != 0) {
    y -= 1;
  }
  counter1.innerText = y;
  check_shipping();
  check_total();
});

plus1.addEventListener("click", function () {
  y += 1;
  counter1.innerText = y;
  check_shipping();
  check_total();
});

//-------------
