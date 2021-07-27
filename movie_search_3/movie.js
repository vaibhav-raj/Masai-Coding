let container = document.getElementById("container");

async function movieData() {
  var movieName = document.getElementById("movie").value;
  document.getElementById("container").innerHTML = "";

  try {
    let response = await fetch(
      `http://www.omdbapi.com/?t=${movieName}&apikey=d4c277e0`
    );
    var data = await response.json();
    if (data.Error == "Movie not found!" || movieName == "") {
      error();
    } else {
      showMovie(data);
    }
  } catch (e) {
    console.log(e);
  }
  // console.log(data);
  document.getElementById("movie").value = "";
}

function showMovie(d) {
  let div = document.createElement("div");

  let poster = document.createElement("img");
  poster.src = d.Poster;

  let year = document.createElement("p");
  year.innerText = `Year - ${d.Year}`;

  let title = document.createElement("p");
  title.innerText = `Title - ${d.Title}`;

  let rating = document.createElement("p");
  if (d.imdbRating > 8.5) {
    rating.innerText = `Rating - ${d.imdbRating} ⭐`;
  } else {
    rating.innerText = `Rating - ${d.imdbRating}`;
  }

  let des = document.createElement("p");
  des.style.color = "white";
  des.innerText = `⭐ indicates highly recommended movies with more than 8.5 ratings`;

  let language = document.createElement("p");
  language.innerText = `Language - ${d.Language}`;

  div.append(poster, title, rating, year, language);

  container.append(div, des);
}

function error() {
  let notFound = document.getElementById("notFound");
  document.getElementById("notFound").innerHTML = "";

  let div1 = document.createElement("div");

  let img = document.createElement("img");
  img.src = "https://miro.medium.com/max/1600/1*qdFdhbR00beEaIKDI_WDCw.gif";

  div1.append(img);

  notFound.append(div1);
}
