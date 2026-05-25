Feature: Авторизация пользователя

  Background:
    Given Открыта страница авторизации

  Rule: Авторизованный пользователь получает доступ к каталогу

    @Sanity @Smoke @Regression
    Scenario: Успешный вход для стандартного пользователя
      When Выполнен вход как пользователь "standard"
      Then Отображается страница каталога товаров

    @Smoke @Regression
    Scenario Outline: Успешный вход для пользователя "<user>"
      When Выполнен вход как пользователь "<user>"
      Then Отображается страница каталога товаров

      Examples:
        | user    |
        | problem |
        | error   |
        | visual  |

    @Performance
    Scenario: Успешный вход для медленного пользователя
      When Выполнен вход как пользователь "performanceGlitch"
      Then Отображается страница каталога товаров

  Rule: Система запрещает доступ при неверных учётных данных

    @Regression
    Scenario: Заблокированный пользователь не может войти
      When Выполнен вход как пользователь "locked"
      Then Отображается сообщение об ошибке "Epic sadface: Sorry, this user has been locked out."

    @Regression
    Scenario: Вход с неверным паролем запрещён
      When Выполнен вход как пользователь "invalid"
      Then Отображается сообщение об ошибке "Epic sadface: Username and password do not match any user in this service"

  Rule: Система валидирует обязательные поля формы

    @Regression
    Scenario: Отправка пустой формы показывает ошибку
      When Форма отправлена без заполнения полей
      Then Отображается сообщение об ошибке "Epic sadface: Username is required"

    @Regression
    Scenario: Отправка формы без пароля показывает ошибку
      When Заполнен логин пользователя "standard"
      And Форма входа отправлена
      Then Отображается сообщение об ошибке "Epic sadface: Password is required"

    @Regression
    Scenario: Отправка формы без логина показывает ошибку
      When Заполнен пароль пользователя "standard"
      And Форма входа отправлена
      Then Отображается сообщение об ошибке "Epic sadface: Username is required"
