
class Header {
    constructor() {
        this.elements = {
            Профиль: this.profileNameButton,
            Войти: this.signIn,
            Регистрация: this.registrationButton,
            Поиск: this.searchElement,
            'Депозит/Вывод': this.depositButton,
            Профайл: this.profileButton
        }
    }


    get profileNameButton() {
        return '[data-test="main_profile_login_name"]';
    }

    get profileButton() {
        return '[data-test="top-profile"]';
    }

    get depositButton() {
        return '[data-test="main_deposit"]';
    }

    get signIn () {
        return '[data-test="main_signin"]';
    }

    get registrationButton() {
        return '[data-test="main_register"]'
    }

    get searchElement () {
        return '[data-test="top-search"]';
    }

}

export default Header;
