class Tournaments {
    constructor() {
        this.elements = {
            SLOTOPOLIS: this.slotopolisElement,
            ROXSTARS: this.roxStarElement
        }
    }

    get slotopolisElement() {
        return '//a[@href="/tournaments/slotopolis"]';
    }

    get roxStarElement() {
        return '//a[@href="/tournaments/roxstars"]';
    }
}

export default Tournaments;
