/* eslint-disable no-undef */
import FavoriteRestaurants from '../src/scripts/data/favorite-restaurant-idb';
import * as TestFactories from './helpers/testFactories';

const addLikeButtonContainer = () => {
    document.body.innerHTML = '<div id="likeButtonContainer"></div>';
};

describe('Unliking A Resto', () => {
    beforeEach(async () => {
        addLikeButtonContainer();
        await FavoriteRestaurants.putRestaurant({ id: 1 });
    });

    afterEach(async () => {
        await FavoriteRestaurants.deleteRestaurant(1);
    });

    // test 6 (unlike)
    it('should display unlike widget when the Restaurannt has been liked', async () => {
        await TestFactories.createLikeButtonPresenterWithRestaurant({ id: 1 });

        expect(document.querySelector('[aria-label="unlike this restaurant"]'))
            .toBeTruthy();
    });

    // test 7
    it('should not display like widget when the Restaurant has been liked', async () => {
        await TestFactories.createLikeButtonPresenterWithRestaurant({ id: 1 });

        expect(document.querySelector('[aria-label="like this restaurant"]'))
            .toBeFalsy();
    });

    // test 8
    it('should be able to remove liked Restaurant from the list', async () => {
        await TestFactories.createLikeButtonPresenterWithRestaurant({ id: 1 });

        document.querySelector('[aria-label="unlike this restaurant"]').dispatchEvent(new Event('click'));

        expect(await FavoriteRestaurants.getAllRestaurants()).toEqual([]);
    });

    // test 9
    it('should not throw error if the unliked Restaurant is not in the list', async () => {
        await TestFactories.createLikeButtonPresenterWithRestaurant({ id: 1 });

        // hapus dulu restaurant dari daftar restaurant yang disukai
        await FavoriteRestaurants.deleteRestaurant(1);

        // kemudian, simulasikan pengguna menekan widget batal menyukai restaurant
        document.querySelector('[aria-label="unlike this restaurant"]').dispatchEvent(new Event('click'));

        expect(await FavoriteRestaurants.getAllRestaurants()).toEqual([]);
    });
});