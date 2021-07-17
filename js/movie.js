var modal;
var btn;
var span;

var modal_watch;

function show(clicked_id) {
  modal = document.getElementById(clicked_id);
  btn = document.getElementById(clicked_id);
  span = document.getElementById(clicked_id);
  modal.style.display = "block";
}

function watch(clicked_id) {
  modal_watch = document.getElementById(clicked_id);
  modal_watch.style.display = "block";
}

function closeModal() {
  modal.style.display = "none";
}

window.onclick = function (event) {
  if (event.target == modal_watch) {
    modal_watch.style.display = "none";
  }
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
