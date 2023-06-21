const assert = require('assert');

Feature('Liking Restaurants');

Scenario('liking one restaurant', async ({ I }) => {
    I.amOnPage('/');
    
    pause();

    I.waitForVisible('.title_restaurant');
    I.seeElement('.title_restaurant a');
    const firstRestaurant = locate('.title_restaurant a').first();
    const firstRestaurantName = await I.grabTextFrom(firstRestaurant);

    I.click(firstRestaurant);

    I.seeElement('#likeButton');
    I.click('#likeButton');

    I.amOnPage('/#/favorite');
    I.seeElement('.list_restaurant');
    const unlikeRestaurantName = await I.grabTextFrom('.title_restaurant');

    assert.strictEqual(firstRestaurantName, unlikeRestaurantName);
});

Scenario('unliking one restaurant', async ({ I }) => {
    I.amOnPage('/');
    I.waitForVisible('.title_restaurant');
    I.seeElement('.title_restaurant a');

    const firstRestaurant = locate('.title_restaurant a').first();
    const firstRestaurantName = await I.grabTextFrom(firstRestaurant);

    I.click(firstRestaurant);

    I.seeElement('#likeButton');
    I.click('#likeButton');

    I.amOnPage('/#/favorite');
    I.seeElement('.list_restaurant');

    const unlikeRestaurantName = await I.grabTextFrom('.title_restaurant');
    assert.strictEqual(firstRestaurantName, unlikeRestaurantName);

    I.seeElement('.title_restaurant a');
    const firstRestoFav = locate('.title_restaurant a').first();
    I.click(firstRestoFav);

    I.seeElement('#likeButton');
    I.click('#likeButton');

    I.amOnPage('/#/favorite');
    I.dontSeeElement('.list_restaurant');
});