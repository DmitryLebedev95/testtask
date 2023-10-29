class News {
    constructor() {
        this.elements = {
            'Первая новость': this.firstNewsElement,
            'Вторая новость': this.secondNewsElement
        }
    }

    get firstNewsElement() {
        return '(//div[@class=\'news-list__item\'])[1]\n';
    }

    get secondNewsElement() {
        return '(//div[@class=\'news-list__item\'])[2]\n';
    }
}


export default News;
