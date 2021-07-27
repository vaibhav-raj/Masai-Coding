var data;
async function main() {
  data = await getNews();

  showNews(data);

  showButton(1); //
}
main();

function NewsSearch() {
  main();
}

async function getNews() {
  let search = document.getElementById("search").value;

  if (search.length > 0) {
    // console.log(search);

    let response = await fetch(
      `https://newsapi.org/v2/everything?q=${search}&from=2021-06-25&sortBy=popularity&apiKey=ff611d5d6f1e42ecb9ab22e5f1e0cd81`
    );

    let data = await response.json();
    console.log(data.articles);
    return data.articles;
  }

  let response = await fetch(
    "https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=ff611d5d6f1e42ecb9ab22e5f1e0cd81"
  );

  let data = await response.json();
  //   console.log(data.articles);
  // showNews(data.articles);
  return data.articles;
}

// getNews();
function showButton(index) {
  console.log(index);

  let button_div = document.getElementById("buttons");

  button_div.innerHTML = null;

  let original_id = index;

  if (index <= 2) {
    index = 2;
  }

  //1to 10
  //3-12

  for (let i = index - 1; i <= index + 1; i++) {
    let btn = document.createElement("button");

    btn.innerText = i;

    btn.setAttribute("id", `${i}`);

    btn.onclick = showNews;

    button_div.appendChild(btn);
  }

  let btn = document.getElementById(original_id);
  // btn.style.backgroundColor = "green";
}

let page = document.getElementById("cont");

function showNews() {
  document.getElementById("cont").innerHTML = "";
  document.getElementById("search").value = "";

  let id = +this.id;
  console.log("id:", id);

  let num = id - 1;

  let news;
  if (id) news = data.slice(num * 5, num * 5 + 5);
  else news = data.slice(0, 5);

  // if (data.length == 0) {
  //   let msg = document.createElement("h2");
  //   msg.innerHTML = "Searched content is not available!";
  //   msg.style.textAlign = "center";
  //   msg.style.color = "red";
  //   page.append(msg);
  // } else {

  news.forEach(function (el) {
    let div = document.createElement("div");
    let title = document.createElement("p");
    title.innerHTML = `<strong> ${el.title} </strong>`;

    let desc = document.createElement("p");
    desc.innerHTML = `${el.description}`;

    let date = document.createElement("p");
    date.innerHTML = ` <strong>Published - ${el.publishedAt}</strong>`;
    date.style.color = "red";

    div.append(date, title, desc);
    console.log(div);
    div.setAttribute("id", "item");
    page.append(div);
  });

  showButton(id);
}

// async function NewsSearch() {
//   let search = document.getElementById("search").value;

//   // console.log(search);

//   let response = await fetch(
//     `https://newsapi.org/v2/everything?q=${search}&from=2021-06-25&sortBy=popularity&apiKey=ff611d5d6f1e42ecb9ab22e5f1e0cd81`
//   );

//   let data = await response.json();
//   console.log(data.articles);
//   return data.articles;
//   // showNews(data.articles);
// }
