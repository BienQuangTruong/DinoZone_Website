var modal;
var btn;
var span;

function show(clicked_id) {
  modal = document.getElementById(clicked_id);
  btn = document.getElementById(clicked_id);
  span = document.getElementById(clicked_id);
  modal.style.display = "block";
}

function closeModal() {
  modal.style.display = "none";
}

// var modal = document.getElementsByClassName("modal")[id];
// var btn = document.getElementsByClassName("item")[id];
// var span = document.getElementsByClassName("close")[id];

// btn.onclick = function () {
//   modal.style.display = "block";
// };

// span.onclick = function () {
//   modal.style.display = "none";
// };

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

var tabAll = document.getElementById("all-catalogue");
var tabLand = document.getElementById("land-catalogue");
var tabSea = document.getElementById("sea-catalogue");
var tabAir = document.getElementById("air-catalogue");

var body = document.getElementById("body");

function switchTab(clicked_id) {
  reset();
  switch (clicked_id) {
    case "all":
      tabAll.style.display = "block";
      body.break;
    case "land":
      tabLand.style.display = "block";
      break;
    case "sea":
      tabSea.style.display = "block";
      break;
    case "air":
      tabAir.style.display = "block";
      break;
    default:
      tabAll.style.display = "block";
  }
}

function reset() {
  tabAll.style.display = "none";
  tabLand.style.display = "none";
  tabSea.style.display = "none";
  tabAir.style.display = "none";
}

function setBG(url) {
  document.body.style.background = url;
  document.body.style.backgroundSize = "cover";
  document.body.style.backgroundAttachment = "fixed";
  document.body.style.backgroundPosition = "center";
}
