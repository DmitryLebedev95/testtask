import {Then} from "@wdio/cucumber-framework";
import World from '../support/world.js';
import {browser} from "@wdio/globals";

const { pageObjects } = new World();
import { context } from './when.js'



Then(/^Я вижу "([^"]*)" в "([^"]*)"$/, async (element, pageObject) => {

    const elementSelector = pageObjects[pageObject].elements[element];

    // await $(elementSelector).scrollIntoView();
    await $(elementSelector).isDisplayed();

});

Then(/^Я "([^"]*)" "([^"]*)" в "([^"]*)"$/, async (action, element, pageObject) => {

    const elementSelector = pageObjects[pageObject].elements[element];

    // (action === "Вижу") ? await $(elementSelector).isDisplayed() :
    //     await expect(elementSelector).not.toBeDisplayed();


    if (action === "Вижу") {

        // await $(elementSelector).scrollIntoView();
        await $(elementSelector).isDisplayed();

    }else if (action === "Не вижу") {

        await expect(elementSelector).not.toBeDisplayed();

    }

});


Then(/^Я вижу "([^"]*)" и "([^"]*)" в "([^"]*)"$/, async (element1, element2, pageObject) => {

    const element1Selector = pageObjects[pageObject].elements[element1];
    const element2Selector = pageObjects[pageObject].elements[element2];

    await $(element1Selector).isDisplayed();
    await $(element2Selector).isDisplayed();

});


Then(/^Я вижу "([^"]*)" у "([^"]*)" в "([^"]*)"$/, async (text, element, pageObject) => {

    const elementSelector = pageObjects[pageObject].elements[element];
    const elementText = await $(elementSelector).getText();

    await expect(elementText).toContain(text);


});
Then(/^Я очищаю сессию$/, async () => {

    await browser.reloadSession()

});
Then(/^Я вижу "([^"]*)" с текстом "([^"]*)" в "([^"]*)"$/, async (element, text, pageObject) => {

    const elementSelector = pageObjects[pageObject].elements[element];
    const elementText = await $(elementSelector).getText();

    // await $(elementSelector).isDisplayed();
    // await expect(elementText).toContain(text);

    if (text === 'Ваша Страна Определена') {

        await $(elementSelector).isDisplayed();
        await expect(elementText).toContain('Ваша страна определена как Российская Федерация. Внимание!' +
            ' В случае изменения страны будет изменен список доступных способов оплаты')




    }
});
Then(/^Я вижу, что количество элементов больше "([^"]*)"$/, async (expectedCount) => {

    const actualCount = context.actualCount;

    expect(actualCount).toBeGreaterThan(+expectedCount);

});
Then(/^Я вижу что "([^"]*)" "([^"]*)" в "([^"]*)"$/, async (element, state, pageObject) => {

    const elementSelector = pageObjects[pageObject].elements[element];

    if(state === "Активна") {

        await $(elementSelector).isSelected();

    } else if(state === "Неактивна") {

        await expect(elementSelector).not.toBeSelected();
    }


});