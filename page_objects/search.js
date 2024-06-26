
class Search {
    constructor() {
        this.elements = {
            'Сейчас Выигрывают': this.nowWinnings,
            'Игра Победителей': this.winningsGame,
            'Иконка Игры': this.gameIcon,
            'Ник Пользователя': this.userNickname,
            'Сумма Выигрыша': this.winAmount,
            'Название Игры': this.gameName
        }
    }


    get nowWinnings() {
        return '[data-test="tab_win_now"]';
    }

    get winningsGame() {
        // return '//div[@data-test="winners__games_list_search"]/div[@class="search-last-winner__item"]'
        return '[data-test="winners__games_list_search"]';
    }

    get gameIcon() {
        return '[data-test="winner__game-icon_search"]';
    }

    get userNickname() {
        return '[data-test="winner__game-player_search"]';
    }

    get winAmount() {
        return '[data-test="winner_game-summ_search"]';
    }

    get gameName() {
        return '[data-test="winner__game-name_search"]';
    }

}
export default Search;
