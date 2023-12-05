
class Other {
    constructor() {
        this.elements = {
            'VK Логин': this.vkLoginButton,
            'Далее VK': this.vkNextButton,
            'VK Пароль': this.vkPassButton,
            'VK Войти': this.vkSubmitButton


            // 'Google Логин': this.googleLoginField,
            // 'Далее Google': this.googleNextButton,
            // 'Google Пароль': this.googlePassField,
            // // 'Войти Google': this.googleEnterButton

        }

        this.values = {
            'Почта Доверенной Соц Сети': 'regpaylebedev1',
            'Пароль Доверенной Соц Сети': '*eary21IoTOY',
            'Логин Недоверенной Соц Сети': '+375298061510',
            'Пароль Недоверенной Соц Сети': 'casino12345',
        }
    }

    get vkLoginButton() {
        return 'input[name="login"]';
    }

    get vkPassButton() {
        return 'input[name="password"]';
    }
    get vkNextButton() {
        return '//span[text()="Продолжить"]';
        }

    get vkSubmitButton() {
        return '[data-test-id="continue-as-button"]'
    }

    // get googleLoginField() {
    //     return 'input[type="email"]';
    // }
    //
    // get googleNextButton(){
    //     return '//span[text()="Далее"]';
    // }
    //
    // get googlePassField() {
    //     return 'input[type="password"]';
    // }

    // get googleEnterButton(){
    //     return '//span[@class=\'statuseName\']';
    // }


}
export default Other;
