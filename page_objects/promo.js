
class Promo {
    constructor() {
        this.elements = {
            Статусы: this.statusButton,
            Турниры: this.tournamentsButton,
            Бонусы: this.bonusesButton,
            Лотереи: this.lotteryButton,
            Кэшбэк: this.cashBackButton,
            Новости: this.newsButton,
            Акции: this.promotionsButton
        }
    }

    get statusButton() {
        return '//a[@href="/status" and text()="СТАТУСЫ"]';
    }

    get tournamentsButton (){
        return '//a[@href="/tournaments" and text()="ТУРНИРЫ"]';
    }

    get bonusesButton () {
        return '//a[@href="/bonus" and text()="БОНУСЫ"]';
    }

    get lotteryButton () {
        return '//a[@href="/lottery" and text()="ЛОТЕРЕИ"]';
    }

    get cashBackButton () {
        return '//a[@href="/cashback"]';
    }

    get newsButton () {
        return '[data-test="news"]';
    }

    get promotionsButton () {
        return '//a[@href="/promotions" and text()="АКЦИИ"]';
    }
}

export default Promo;
