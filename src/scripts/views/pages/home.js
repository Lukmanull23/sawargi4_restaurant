import RestaurantDbSource from "../../data/restaurant-source";
import { createRestaurantItemTemplate } from "../templates/template-creator";

const Home = {
  async render() {
    return `
      <div class="hero">
        <div class="hero-inner">
          <h1 class="hero-title">Sawargi 4</h1>
          <p class="hero-subtitle">Kumpulan Restoran Kesayangan Keluarga Anda!</p>
        </div>
      </div>

      <section class="content">
        <div class="find">
          <h1>Temukan Restoran Anda!</h1>
          <div class="restaurant" id="list-menu"></div>
        </div>
      </section>
    `;
  },
  async afterRender() {
    const restaurants = await RestaurantDbSource.restaurants();
    const restaurantsContainer = document.querySelector("#list-menu");
    restaurants.forEach((restaurant) => {
      restaurantsContainer.innerHTML += createRestaurantItemTemplate(restaurant);
    });
  },
};
export default Home;