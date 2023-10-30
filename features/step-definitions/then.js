import {Then} from "@wdio/cucumber-framework";
import {expect}  from 'chai';
import { $ } from "@wdio/globals";
import World from './../support/world.js';

const { pageObjects } = new World();



Then(/^Я вижу "([^"]*)" в "([^"]*)"$/, async (element, pageObject) => {

    const elementSelector = pageObjects[pageObject].elements[element];

    await $(elementSelector).scrollIntoView();
    await $(elementSelector).isDisplayed();


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

    expect(elementText).to.equal(text);

});

