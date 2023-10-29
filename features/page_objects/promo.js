
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
        return '//a[@href=\'/status\' and text()=\'СТАТУСЫ\']\n';
    }

    get tournamentsButton (){
        return '//a[@href=\'/tournaments\' and text()=\'ТУРНИРЫ\']\n';
    }

    get bonusesButton () {
        return '//a[@href=\'/bonus\' and text()=\'БОНУСЫ\']\n';
    }

    get lotteryButton () {
        return '//a[@href=\'/lottery\' and text()=\'ЛОТЕРЕИ\']\n';
    }

    get cashBackButton () {
        return '//a[@href=\'/cashback\']\n';
    }

    get newsButton () {
        return '[data-test="news"]';
    }

    get promotionsButton () {
        return '//a[@href=\'/promotions\' and text()=\'АКЦИИ\']\n';
    }
}

export default Promo;
