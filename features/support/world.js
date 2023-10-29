import Header from '../page_objects/header.js';
import AuthForm from '../page_objects/auth_form.js';
import Promo from '../page_objects/promo.js';
import Profile from '../page_objects/profile.js';
import Menu from '../page_objects/menu.js';
import Statuses from '../page_objects/statuses.js';
import Tournaments from '../page_objects/tournaments.js';
import Bonuses from "../page_objects/bonuses.js";
import Lotteries from "../page_objects/lotteries.js";
import Cashback from "../page_objects/cashback.js";
import News from "../page_objects/news.js";
import Promotions from "../page_objects/promotions.js";



const pageObjects = {
    Хедер: new Header(),
    Авторизация: new AuthForm(),
    Промо: new Promo(),
    Профиль: new Profile(),
    Меню: new Menu(),
    Статусы: new Statuses(),
    Турниры: new Tournaments(),
    Бонусы: new Bonuses(),
    Лотереи: new Lotteries(),
    Кэшбэк: new Cashback(),
    Новости: new News(),
    Акции: new Promotions()
};

class World {
    constructor() {
        this.pageObjects = pageObjects;
        this.page = {
            url: 'https://roxcasino1536.com/'
        };
    }
}

export default World;

