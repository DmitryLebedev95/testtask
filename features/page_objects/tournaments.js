class Tournaments {
    constructor() {
        this.elements = {
            SLOTOPOLIS: this.slotopolisElement
        }
    }

    get slotopolisElement() {
        return '//a[@href=\'/tournaments/slotopolis\']';
    }
}

export default Tournaments;
