class Menu {
    constructor() {
        this.elements = {
            Промо: this.promoElement
        }
    }

    get promoElement() {
        return '[href="/promo"]';
    }
}


export default Menu;
