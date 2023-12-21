import {When} from "@wdio/cucumber-framework";
import World from '../support/world.js';
const { pageObjects } = new World();

export const context = {};

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

When(/^Я задаю куки$/, async () => {

    // if(cookieName === "Выключение формы регистрации на браузер") {
       await browser.setCookies({
           name: "1P_JAR",
           value: "2023-11-17-13"
        });
    // }

});


When(/^Я перезагружаю страницу$/, async () => {

  await browser.refresh();

});
When(/^Я жду "([^"]*)" секунд$/, async (seconds) => {

    await browser.pause(seconds * 1000)

});
When(/^Я подсчитываю количество элементов "([^"]*)" на "([^"]*)"$/, async (element, pageObject) => {

    const elementSelector = pageObjects[pageObject].elements[element];

    const parentElement = await $(elementSelector);

    const childElement = await parentElement.$$(':scope > div')

    const actualCount = childElement.length;

    context.actualCount = actualCount;

});

