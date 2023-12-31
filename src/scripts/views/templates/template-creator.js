import config from "../../globals/config";

const createRestaurantDetailTemplate = (restaurant, foods, beverages, reviews) => `
          <div class="restaurant_detail">
            <img class="thumbnail_restaurant_detail lazyload" data-src="${config.BASE_IMAGE_URL}${restaurant.pictureId}" alt="${restaurant.name}" title="${restaurant.name}">
            <h1 class="title_restaurant"><a href="/#/detail/${restaurant.id}">${restaurant.name}</a></h1>
            <div class="rating_value-restaurant_detail">⭐️ : </i>${restaurant.rating}</div>
            <div class="content_restaurant_detail">
              <div class="deskripsi_restaurant_detail">${restaurant.description.slice(0, 1000)}...</div>
              <div class="address_detail">Alamat : ${restaurant.city}, ${restaurant.address}</div>
            </div>
          </div>
          <div class="detail_menu_review">
            <div class="menus">
              <h3>Makanan</h3>
              <p>${foods}</p>
              <br>
              <h3>Minuman</h3>
              <p>${beverages}</p>
            </div>
            <div class="Review">
              <h3>Ulasan Pelanggan</h3>
              <p>${reviews}</p>
            </div>
          </div>
`;

const createRestaurantItemTemplate = (restaurant) => `
        
        <div class="list_restaurant">
             <img class="thumbnail_restaurant lazyload" data-src="${config.BASE_IMAGE_URL}${restaurant.pictureId}" alt="${restaurant.name}" title="${restaurant.name}">
             <div class="kota_restaurant">${restaurant.city}</div>
             <div class="content_restaurant">
                 <p class="rating_restaurant">
                    ⭐️ : ${restaurant.rating}
                 </p>
                 <h1 class="title_restaurant"><a href="/#/detail/${restaurant.id}">${restaurant.name}</a></h1>
                 <div class="deskripsi_restaurant">${restaurant.description.slice(0, 150)}...</div>
             </div>
         </div>
         
         
`;

const createLikeRestaurantButtonTemplate = () => `
  <button aria-label="like this restaurant" id="likeButton" class="like">
    <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const createUnlikeRestaurantButtonTemplate = () => `
  <button aria-label="unlike this restaurant" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

export {
  createRestaurantDetailTemplate,
  createRestaurantItemTemplate,
  createLikeRestaurantButtonTemplate,
  createUnlikeRestaurantButtonTemplate,
};