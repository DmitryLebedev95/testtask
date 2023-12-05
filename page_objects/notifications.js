class Notifications {
    constructor() {
        this.elements = {
            Уведомление: this.notificationElement
        }
    }

    get notificationElement() {
        return '[data-test="notification"]';
    }

}


export default Notifications;
