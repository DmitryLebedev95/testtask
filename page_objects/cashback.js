class Cashback {
    constructor() {
        this.elements = {
            'Как получить кешбэк?': this.howToGetCashbackElement
        }
    }

    get howToGetCashbackElement() {
        return '//h3[text()="Как получить Кешбэк?"]';
    }


}

export default Cashback;
