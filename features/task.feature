#language: ru

Функция: Тестовое задание

  Сценарий: Проверка раздела Промо неавторизованным пользователем
    Пусть Я нахожусь на главной странице
    Когда Я навожу на "Промо" в "Меню"
    Когда Я нажимаю "Статусы" в "Промо"
    Тогда Я вижу "Elite" в "Статусы"
    Когда Я навожу на "Промо" в "Меню"
    Когда Я нажимаю "Турниры" в "Промо"
#    Тогда Я вижу "SLOTOPOLIS" в "Турниры"
    Тогда Я вижу "ROXSTARS" в "Турниры"
    Когда Я навожу на "Промо" в "Меню"
    Когда Я нажимаю "Бонусы" в "Промо"
    Тогда Я вижу "Подарок на ДР" в "Бонусы"
    Когда Я навожу на "Промо" в "Меню"
    Когда Я нажимаю "Лотереи" в "Промо"
    Тогда Я вижу "Узнать больше" в "Лотереи"
    Когда Я навожу на "Промо" в "Меню"
    Когда Я нажимаю "Кэшбэк" в "Промо"
    Тогда Я вижу "Как получить кешбэк?" в "Кэшбэк"
    Когда Я навожу на "Промо" в "Меню"
    Когда Я нажимаю "Новости" в "Промо"
    Тогда Я вижу "Первая новость" и "Вторая новость" в "Новости"
    Когда Я навожу на "Промо" в "Меню"
    Когда Я нажимаю "Акции" в "Промо"
    Тогда Я вижу "Первая активная акция" и "Вторая активная акция" в "Акции"
    Когда Я скроллю к "Завершенные акции" в "Акции"
    Тогда Я вижу "Первая завершенная акция" и "Вторая завершенная акция" в "Акции"

  Сценарий: Авторизация
    Пусть Я нахожусь на главной странице
    Когда Я нажимаю "Войти" в "Хедер"
    Когда Я ввожу "Логин с подтвержденной почтой" в "Поле Почта" в "Авторизация"
    Когда Я ввожу "Пароль" в "Поле Пароль" в "Авторизация"
    Когда Я нажимаю "Войти" в "Авторизация"
    Когда Я нажимаю "Профиль" в "Хедер"
    Тогда Я вижу "Подтверждена" у "Почта пользователя" в "Профиль"
    Тогда Я вижу "New" у "Статус пользователя" в "Профиль"




