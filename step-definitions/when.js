import {When} from "@wdio/cucumber-framework";
import World from '../support/world.js';
const { pageObjects } = new World();

When(/^Я ввожу "([^"]*)" в "([^"]*)" в "([^"]*)"$/, async (value, element, pageObject) => {

    const elementSelector = pageObjects[pageObject].elements[element];
    const valueSelector =  pageObjects[pageObject].values[value];

    await $(elementSelector).setValue(valueSelector);

});

When(/^Я ввожу текст "([^"]*)" в "([^"]*)" в "([^"]*)"$/, async (text, element, pageObject) => {

    const elementSelector = pageObjects[pageObject].elements[element];

    await $(elementSelector).setValue(text);

});


When(/^Я нажимаю "([^"]*)" в "([^"]*)"$/, async (element, pageObject) => {

    const elementSelector = pageObjects[pageObject].elements[element];
    await $(elementSelector).click();

});


When(/^Я навожу на "([^"]*)" в "([^"]*)"$/, async (element, pageObject) => {

    const elementSelector = pageObjects[pageObject].elements[element];
    await $(elementSelector).moveTo();

});


When(/^Я скроллю к "([^"]*)" в "([^"]*)"$/, async (element, pageObject) => {

    const elementSelector = pageObjects[pageObject].elements[element];
    await $(elementSelector).scrollIntoView();

});


When(/^Я перезагружаю страницу$/, async () => {

  await browser.refresh();

});
When(/^Я жду "([^"]*)" секунд$/, async (seconds) => {

    await browser.pause(seconds * 1000)

});

