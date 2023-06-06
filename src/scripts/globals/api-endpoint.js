import config from './config';

const ApiHelper = {
    getAllRestaurant: async () => {
      // fetching ..
      /**
       * karena memakai function async, maka bakal berurutan eksekusi programnya.
       * await itu kita disuruh menunggu function fetch agar menyelesaikan promise nya,
       * baru ketika sudah selesai maka jalan kan kode berikutnya.
       *
       * jadi await itu digunakan untuk memerintah javascript agar menunggu proses yang dikasih
       * tanda await agar selesai dulu prosesnya. karena klo misal belom selesai prosesnya, terus
       * ada kode dibawahnya, maka dia bakal ngejalanin kode dibawahnya dahulu klo gk make tanda
       * await.
       */
      const restaurant = await fetch(`${config.BASE_URL}/list`);
  
      // return hasil restaurant (hasil jadi proses yang diatas)
      return restaurant;
    },
  
    getAllRestaurantPromise: () => {
      // gua coba fetching tetapi gk make tanda async dan await. nanti coba lu liat perbedaannya
  
      const restaurant = fetch(`${config.BASE_URL}/list`);
      return restaurant;
    },
  };
  
  // gua bakal console.log yang fungsi async
  ApiHelper.getAllRestaurant().then((restaurants) => {
    console.log(restaurants);
  });
  
  // gua bakal console.log yang fungsi tanpa async
  console.log(ApiHelper.getAllRestaurantPromise());
  
  // eskport objek ApiHelper
  export default ApiHelper;