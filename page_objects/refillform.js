class RefillForm {
    constructor() {
        this.elements = {
            'Модальное Окно Недостающих Данных': this.refillForm,
            'Дата Рождения': this.birthdayElement,
            // 'Год 2001': this.yearElement,
            // 'Месяц Январь': this.monthElement,
            // 'День 1':
        }
    }

    get refillForm() {
        return '[data-test="payment-modal_deposit-form"]';
    }

    get birthdayElement() {
        return '[data-test="profile_calendar_edit"]';
    }
}

export default RefillForm;
