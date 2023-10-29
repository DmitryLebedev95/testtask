class Lotteries {
    constructor() {
        this.elements = {
            'Узнать больше': this.showMoreButton
        }
    }

    get showMoreButton() {
        return '//a[@href=\'/lottery/rox-chart-eur\' and text()=\'Узнать больше\']\n';
    }
}


export default Lotteries;
