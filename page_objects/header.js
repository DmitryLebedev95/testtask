
class Header {
    constructor() {
        this.elements = {
            Профиль: this.profileButton,
            Войти: this.signIn
        }
    }


    get profileButton() {
        return '[data-test="main_profile_login_name"]';
    }

    get signIn (){
        return '[data-test="main_signin"]';
    }

}

export default Header;
