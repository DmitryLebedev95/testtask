import { Given } from '@wdio/cucumber-framework';
import World from '../support/world.js';
const world = new World();

Given(/^Я нахожусь на главной странице$/, async function ()  {

    await browser.url(world.page.url);

});




