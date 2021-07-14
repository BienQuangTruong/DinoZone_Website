$(".owl-carousel").owlCarousel({
  loop: false,
  margin: 10,
  nav: true,
  autoplay: false,
  dots: false,
  navText: [" ", " "],
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 3,
    },
    1000: {
      items: 4,
    },
  },
});

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
