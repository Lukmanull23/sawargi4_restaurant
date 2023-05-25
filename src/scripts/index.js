import "regenerator-runtime";
import "../styles/main.scss";
import "../styles/responsive.scss";

// hamburgerMenu
const burger = document.querySelector("#hamburgerMenu");
const drawerElement = document.querySelector("#drawer");
const main = document.querySelector("main");
const hero = document.querySelector(".hero");

burger.addEventListener("click", () => {
  drawerElement.classList.toggle("open");
});
main.addEventListener("click", function () {
  drawerElement.classList.remove("open");
});

hero.addEventListener("click", function () {
  drawerElement.classList.remove("open");
});

// Fetch data json
import("../DATA.json").then(({ default: jsonData }) => {
  console.log(jsonData);
  let datas = jsonData["restaurants"];
  let dataList = "";
  datas.forEach(function (data) {
    dataList += `
        <div class="list_restaurant">
            <img class="thumbnail_restaurant" src="${data["pictureId"]}" alt="${data["name"]}" title="${data["name"]}">
            <div class="kota_restaurant">${data["city"]}</div>
            <div class="content_restaurant">
                <p class="rating_restaurant">
                    Rating : 
                    <a href="#" rating_value_restaurant">${data["rating"]}</a>
                </p>
                <h1 class="title_restaurant"><a href="#">${data["name"]}</a></h1>
                <div class="deskripsi_restaurant">${data["description"].slice(0, 150)}...</div>
            </div>
        </div>
        `;
  });
  document.querySelector("#data-restaurant").innerHTML = dataList;
});
