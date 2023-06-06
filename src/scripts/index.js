import 'regenerator-runtime';
import '../styles/main.scss';
import '../styles/responsive.scss';
import App from './views/app';

const app = new App({
  button: document.querySelector('#hamburgerButton'),
  drawer: document.querySelector('#navigationDrawer'),
  content: document.querySelector('#content'),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});
 
window.addEventListener('load', () => {
  app.renderPage();
});

// Fetch data json
// import("../DATA.json").then(({ default: jsonData }) => {
//   console.log(jsonData);
//   const datas = jsonData.restaurants;
//   let dataList = "";
//   datas.forEach((data) => {
//     dataList += `
//         <div class="list_restaurant">
// eslint-disable-next-line max-len
//             <img class="thumbnail_restaurant" src="${data.pictureId}" alt="${data.name}" title="${data.name}">
//             <div class="kota_restaurant">${data.city}</div>
//             <div class="content_restaurant">
//                 <p class="rating_restaurant">
//                     Rating : 
//                     <a href="#" class="rating_value_restaurant">${data.rating}</a>
//                 </p>
//                 <h1 class="title_restaurant"><a href="#">${data.name}</a></h1>
//                 <div class="deskripsi_restaurant">${data.description.slice(0, 150)}...</div>
//             </div>
//         </div>
//         `;
//   });
//   document.querySelector("#data-restaurant").innerHTML = dataList;
// });
