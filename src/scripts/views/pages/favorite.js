import FavoriteRestaurants from "../../data/favorite-restaurant-idb";
import { createRestaurantItemTemplate } from "../templates/template-creator";

const Favorite = {
  async render() {
    return `
      <a href="#content-heading" class="skip-link">Menuju ke konten</a>
      <div class="content">
        <div class="find">
            <h2 class="content-heading">Restaurant Yang Anda Sukai</h2>
            <div id="list-menu" class="restaurant"></div>
        </div>
      </div>
    `;
  },
  async afterRender() {
    const restaurants = await FavoriteRestaurants.getAllRestaurants();
    const restaurantsContainer = document.querySelector("#list-menu");
    restaurants.forEach((restaurant) => {
      restaurantsContainer.innerHTML += createRestaurantItemTemplate(restaurant);
    });
  },
};
export default Favorite;