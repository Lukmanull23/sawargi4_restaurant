Feature('Liking Restaurant');

Scenario('Menyukai salah satu restaurant dan membatalkannya', async({ I }) => {
    I.amOnPage('/');
    I.wait(2);
    I.seeElement('.title_restaurant');
    await I.grabTextFrom(locate('.title_restaurant').first());
    I.click(locate('.title_restaurant').first());
    I.wait(2);
    I.click('#likeButton');
    I.amOnPage('/#/like');
    I.click(locate('.title_restaurant').first());
    I.wait(2);

    I.seeElement('#likeButton');
    I.click('#likeButton');
    I.amOnPage('/#/like');
    I.dontSeeElement('.title_restaurant');
});
