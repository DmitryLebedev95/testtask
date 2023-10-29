
class AuthForm {
    constructor() {
        this.elements = {
            'Поле Почта': this.emailField,
            'Поле Пароль': this.passField,
            Войти: this.enterButton
        }
        this.values = {
            'Логин с подтвержденной почтой': 'd.lebedev+1@jetmail.cc',
            Пароль: '123456789'
        }
    }


    get emailField() {
        return '[data-test="email_field"]';
    }

    get passField (){
        return '[data-test="passwd_field"]';
    }

    get enterButton () {
        return '[data-test="auth-form-btn"]';
    }

}

export default AuthForm;
