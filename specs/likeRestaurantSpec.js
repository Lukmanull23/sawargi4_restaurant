import FavoriteRestaurants from '../src/scripts/data/favorite-restaurant-idb';
import * as TestFactories from './helpers/testFactories';

describe('Liking A Resto', () => {
    const addLikeButtonContainer = () => {
        document.body.innerHTML = '<div id="likeButtonContainer"></div>';
    };

    beforeEach(() => {
        addLikeButtonContainer();
    });

    // tes 1
    it('should show the like button when the resto has not been liked before', async() => {
        await TestFactories.createLikeButtonPresenterWithRestaurant({ id: 1 });

        expect(document.querySelector('[aria-label="like this restaurant"]'))
            .toBeTruthy();
    });

    // tes 2
    it('should not show the unlike button when the restaurant has not been liked before', async() => {
        await TestFactories.createLikeButtonPresenterWithRestaurant({ id: 1 });
        expect(document.querySelector('[aria-label="unlike this restaurant"]'))
            .toBeFalsy();
    });

    // tes 3
    it('should be able to like the restaurant', async() => {
        await TestFactories.createLikeButtonPresenterWithRestaurant({ id: 1 });

        document.querySelector('#likeButton').dispatchEvent(new Event('click'));

        const restaurant = await FavoriteRestaurants.getRestaurant(1);
        expect(restaurant).toEqual({ id: 1 });

        FavoriteRestaurants.deleteRestaurant(1);
    });

    // test 4
    it('should not add a restaurant again when its already liked', async() => {
        await TestFactories.createLikeButtonPresenterWithRestaurant({ id: 1 });

        // menambahkan restaurant dengan id 1 ke yang daftar restaurant yang di sukai
        await FavoriteRestaurants.putRestaurant({ id: 1 });

        // Pengguna menekan tombol likebutton
        document.querySelector('#likeButton').dispatchEvent(new Event('click'));

        // tidak ada restaurant yang ganda
        expect(await FavoriteRestaurants.getAllRestaurants()).toEqual([{ id: 1 }]);
        FavoriteRestaurants.deleteRestaurant(1);
    });

    // test 5 (like & unlike)
    it('should not add a restaurant when it has no id', async() => {
        await TestFactories.createLikeButtonPresenterWithRestaurant({});

        document.querySelector('#likeButton').dispatchEvent(new Event('click'));
        expect(await FavoriteRestaurants.getAllRestaurants()).toEqual([]);
    });
});