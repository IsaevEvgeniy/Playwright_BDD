Feature: API пользователей

  @Regression
  Scenario: Получение списка пользователей
    When Отправлен GET запрос "/users"
    Then Статус ответа равен 200
    And Список не пустой

  @Regression
  Scenario: Получение второй страницы пользователей
    When Отправлен GET запрос "/users?_page=2&_limit=5"
    Then Статус ответа равен 200
    And Список не пустой

  @Regression
  Scenario: Получение пользователя по id
    When Отправлен GET запрос "/users/2"
    Then Статус ответа равен 200
    And Ответ содержит поле "email"

  @Regression
  Scenario: Запрос несуществующего пользователя возвращает 404
    When Отправлен GET запрос "/users/999"
    Then Статус ответа равен 404

  @Regression
  Scenario: Создание нового пользователя
    When Отправлен POST запрос "/users" с именем "John" и должностью "QA"
    Then Статус ответа равен 201
    And Ответ содержит поле "id"

  @Regression
  Scenario: Полное обновление пользователя
    When Отправлен PUT запрос "/users/2" с именем "Jane" и должностью "Lead"
    Then Статус ответа равен 200
    And Ответ содержит поле "name"

  @Regression
  Scenario: Частичное обновление пользователя
    When Отправлен PATCH запрос "/users/2" с именем "Mike" и должностью "Dev"
    Then Статус ответа равен 200
    And Ответ содержит поле "name"

  @Regression
  Scenario: Удаление пользователя
    When Отправлен DELETE запрос "/users/2"
    Then Статус ответа равен 200

  @Regression
  Scenario: Получение постов пользователя
    When Отправлен GET запрос "/users/1/posts"
    Then Статус ответа равен 200
    And Список не пустой

  @Regression
  Scenario: Получение задач пользователя
    When Отправлен GET запрос "/users/1/todos"
    Then Статус ответа равен 200
    And Список не пустой
