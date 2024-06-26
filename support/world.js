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
import Deposit from "../page_objects/deposit.js";
import Other from "../page_objects/other.js";
import Notifications from "../page_objects/notifications.js";
import Search from "../page_objects/search.js";
import Refillform from "../page_objects/refillform.js";



const pageObjects = {
    Хедер: new Header(),
    'Форма регистрации/авторизации': new AuthForm(),
    Промо: new Promo(),
    Профиль: new Profile(),
    Меню: new Menu(),
    Статусы: new Statuses(),
    Турниры: new Tournaments(),
    Бонусы: new Bonuses(),
    Лотереи: new Lotteries(),
    Кэшбэк: new Cashback(),
    Новости: new News(),
    Акции: new Promotions(),
    Касса: new Deposit(),
    'Прочие Элементы': new Other(),
    Уведомления: new Notifications(),
    Поиск: new Search(),
    'Форма Дорегистрации': new Refillform()
};

class World {
    constructor() {
        this.pageObjects = pageObjects;
        this.page = {
            url: process.env.URL
        };
    }
}

export default World;

