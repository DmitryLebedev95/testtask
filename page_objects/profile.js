
class Profile {
    constructor() {
        this.elements = {
            'Почта пользователя': this.userEmailField,
            'Статус пользователя': this.userStatusField
        }
    }


    get userEmailField() {
        return '//p[@class="label-input"]/span[@class="confirme"]';
    }

    get userStatusField(){
        return '//span[@class="statuseName"]';
    }


}
export default Profile;
