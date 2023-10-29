class Promotions {
    constructor() {
        this.elements = {
            'Первая активная акция': this.firstActivePromoElement,
            'Вторая активная акция': this.secondActivePromoElement,
            'Первая завершенная акция': this.firstInactivePromoElement,
            'Вторая завершенная акция': this.secondInactivePromoElement,
            'Завершенные акции': this.inactivePromosElement
        }
    }

    get firstActivePromoElement() {
        return '(//div[@class=\'news-list__item\'])[1]\n';
    }

    get secondActivePromoElement() {
        return '(//div[@class=\'news-list__item\'])[2]\n';
    }

    get firstInactivePromoElement() {
        return '//p[text()=\'Завершенные\']/following::div[@class=\'actions__items\']/' +
            'div[@class=\'news-list__item\'][1]\n';
    }



    get secondInactivePromoElement() {

        return '//p[text()=\'Завершенные\']/following::div[@class=\'actions__items\']/' +
            'div[@class=\'news-list__item\'][2]\n';

    }

    get inactivePromosElement() {

        return '//p[text()=\'Завершенные\']\n';

    }
}


export default Promotions;
