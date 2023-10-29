class Statuses {
    constructor() {
        this.elements = {
            Elite: this.eliteStatusElement
        }
    }

    get eliteStatusElement() {
        return '//p[@class=\'status-title\' and text()=\'elite\']\n';
    }

}

export default Statuses;
