function redirect(site) {
  switch (site) {
    case "catalog":
      window.location.href = "../en/catalogue.html";
      break;
    case "game":
      window.location.href = "../en/games.html";
      break;
    case "book":
      window.location.href = "../en/books.html";
      break;
    case "movie":
      window.location.href = "../en/movies.html";
      break;
    case "vn-catalog":
      window.location.href = "../vn/catalogue.html";
      break;
    case "vn-game":
      window.location.href = "../vn/games.html";
      break;
    case "vn-book":
      window.location.href = "../vn/books.html";
      break;
    case "vn-movie":
      window.location.href = "../vn/movies.html";
      break;
    case "catalog-home":
      window.location.href = "en/catalogue.html";
      break;
    case "game-home":
      window.location.href = "en/games.html";
      break;
    case "book-home":
      window.location.href = "en/books.html";
      break;
    case "movie-home":
      window.location.href = "en/movies.html";
      break;
    default:
      window.location.href = "../index.html";
      break;
  }
}

// $(document).ready(function () {
//   $("language .en-language").click(function () {
//     window.location.href = "../vn/index.html";
//   });

//   $("#vn-language").click(function () {
//     window.location.href = "../index.html";
//   });
// });

function changeLanguage(n) {
  switch (n) {
    case "vn":
      window.location.href = "../vn/index.html";
      break;
    case "vn-home":
      window.location.href = "vn/index.html";
      break;
    case "en":
      window.location.href = "../index.html";
      break;
    default:
      window.location.href = "../index.html";
      break;
  }
}
