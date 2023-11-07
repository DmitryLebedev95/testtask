import {When} from "@wdio/cucumber-framework";
import World from '../support/world.js';
import { $ } from "@wdio/globals";

const { pageObjects } = new World();


When(/^Я ввожу "([^"]*)" в "([^"]*)" в "([^"]*)"$/, async (value, element, pageObject) => {

    const elementSelector = pageObjects[pageObject].elements[element];
    const valueSelector =  pageObjects[pageObject].values[value];

    await $(elementSelector).setValue(valueSelector);

});


When(/^Я нажимаю "([^"]*)" в "([^"]*)"$/, async (element, pageObject) => {

    const elementSelector = pageObjects[pageObject].elements[element];
    await $(elementSelector).click();

});


When(/^Я навожу на "([^"]*)" в "([^"]*)"$/, async (element, pageObject) => {

    const selector = pageObjects[pageObject].elements[element];
    await $(selector).moveTo();

});


When(/^Я скроллю к "([^"]*)" в "([^"]*)"$/, async (element, pageObject) => {

    const elementSelector = pageObjects[pageObject].elements[element];
    await $(elementSelector).scrollIntoView();

});
