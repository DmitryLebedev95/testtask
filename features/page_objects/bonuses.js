class Bonuses {
    constructor() {
        this.elements = {
            'Подарок на ДР': this.birthdayGiftElement
        }
    }

    get birthdayGiftElement() {
        return '//*[@id=\'birthday\']';
    }


}

export default Bonuses;
