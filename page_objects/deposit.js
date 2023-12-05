class Deposit {
    constructor() {
        this.elements = {
            'Форма депозита': this.depositElement,
            'Закрыть окно': this.closeButton
        }
    }

    get depositElement() {
        return '[data-test="payment-modal_deposit-form"]';
    }

    get closeButton() {
        return '[data-test="modal_close"]';
    }


}

export default Deposit;
