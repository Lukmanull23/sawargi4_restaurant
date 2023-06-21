/* eslint-disable no-undef */
import FavoriteRestaurants from '../src/scripts/data/favorite-restaurant-idb';
import * as TestFactories from './helpers/testFactories';

const addLikeButtonContainer = () => {
    document.body.innerHTML = '<div id="likeButtonContainer"></div>';
};

describe('Unliking A Restaurant', () => {
    beforeEach(async () => {
        addLikeButtonContainer();
        await FavoriteRestaurants.putRestaurant({ id: 1 });
    });

    afterEach(async () => {
        await FavoriteRestaurants.deleteRestaurant(1);
    });

    // tes 6 (unlike)
    it('should display unlike widget when the Restaurannt has been liked', async () => {
        await TestFactories.createLikeButtonPresenterWithRestaurant({ id: 1 });

        expect(document.querySelector('[aria-label="unlike this restaurant"]'))
            .toBeTruthy();
    });

    // tes 7
    it('should not display like widget when the Restaurant has been liked', async () => {
        await TestFactories.createLikeButtonPresenterWithRestaurant({ id: 1 });

        expect(document.querySelector('[aria-label="like this restaurant"]'))
            .toBeFalsy();
    });

    // tes 8
    it('should be able to remove liked Restaurant from the list', async () => {
        await TestFactories.createLikeButtonPresenterWithRestaurant({ id: 1 });

        document.querySelector('[aria-label="unlike this restaurant"]').dispatchEvent(new Event('click'));

        expect(await FavoriteRestaurants.getAllRestaurants()).toEqual([]);
    });

    // tes 9
    it('should not throw error if the unliked Restaurant is not in the list', async () => {
        await TestFactories.createLikeButtonPresenterWithRestaurant({ id: 1 });

        // menghapus restaurant dari daftar restaurant yang disukai
        await FavoriteRestaurants.deleteRestaurant(1);

        //  pengguna menekan lagi widget batal menyukai restaurant
        document.querySelector('[aria-label="unlike this restaurant"]').dispatchEvent(new Event('click'));

        expect(await FavoriteRestaurants.getAllRestaurants()).toEqual([]);
    });
});