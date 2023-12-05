
class AuthForm {
    constructor() {
        this.elements = {
            'Поле Почта': this.emailField,
            'Поле Пароль': this.passField,
            'Поле Почта Регистрация': this.emailRegistrationField,
            'Поле Пароль Регистрация': this.passRegistrationField,
            Войти: this.enterButton,
            Зарегистрироваться: this.signUpButton,
            'Таб номер телефона': this.phoneNumberTab,
            'Таб соцсети': this.socialsTab,
            'Поле Телефон': this.phoneNumberField,
            'Войти через Google': this.googleButton,
            'Войти через VK': this.vkButton,
            Страна: this.countryButton,
            'Поле Поиска Страны': this.countrySearchField,
            Германия: this.germanyButton
        }
        this.values = {
            'Логин с подтвержденной почтой': 'd.lebedev+1@jetmail.cc',
            Пароль: '123456789',
            'Правильная Почта': 'd.lebedev+30@jetmail.cc',
            'Правильный Пароль': '123456789',
            'Правильный Телефон': '9452352352',
            'Случайная Почта': this.generateRandomEmail()

        }
    }


    generateRandomEmail() {

        return 'd.lebedev+' + Math.random().toString(36).substring(2,6) + '@jetmail.cc';

    }


    get emailField () {
        return '[data-test="email_field"]';
    }

    get emailRegistrationField () {
        return '[data-test="email_field"]';
    }

    get passField () {
        return '[data-test="password-field"]';
    }

    get passRegistrationField () {
        return '[data-test="password-field"]';
    }
    get signUpButton () {
        return '[data-test="registr_submit_btn"]';
    }

    get enterButton () {
        return '[data-test="auth-form-btn"]';
    }

    get phoneNumberField () {
        return '[data-test="phone_field"]';
    }

    get phoneNumberTab () {
        return '[data-test="dt-phone"]';
    }

    get socialsTab () {
        return '[data-test="dt-social"]';
    }

    get googleButton () {
        return '//*[text()[contains(.,"Войти через Google")]]';
    }

    get vkButton () {
        return '[data-test="register_vkontakte"]';
    }

    get countryButton () {
        return '[data-test="edit_country_depos"]';
    }

    get countrySearchField () {
        return '[data-test="registr_search_field"]';
    }

    get germanyButton () {
        return '[name="германия"]';
    }

}

export default AuthForm;
