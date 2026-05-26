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
  Scenario Outline: Получение пользователя по id
    When Отправлен GET запрос "/users/<id>"
    Then Статус ответа равен 200

    Examples:
      | id |
      | 1  |
      | 2  |

  @Regression
  Scenario Outline: Пользователь содержит обязательные поля
    When Отправлен GET запрос "/users/1"
    Then Статус ответа равен 200
    And Ответ содержит поле "<field>"

    Examples:
      | field    |
      | name     |
      | email    |
      | username |

  @Regression
  Scenario Outline: Создание нового пользователя
    When Отправлен POST запрос "/users" с именем "John" и должностью "QA"
    Then Статус ответа равен 201
    And Ответ содержит поле "<field>"

    Examples:
      | field |
      | id    |
      | name  |

  @Regression
  Scenario Outline: Полное обновление пользователя
    When Отправлен PUT запрос "/users/2" с именем "Jane" и должностью "Lead"
    Then Статус ответа равен 200
    And Ответ содержит поле "<field>"

    Examples:
      | field |
      | name  |
      | id    |

  @Regression
  Scenario Outline: Частичное обновление пользователя
    When Отправлен PATCH запрос "/users/2" с именем "Mike" и должностью "Dev"
    Then Статус ответа равен 200
    And Ответ содержит поле "<field>"

    Examples:
      | field |
      | name  |
      | id    |

  @Regression
  Scenario: Удаление пользователя
    When Отправлен DELETE запрос "/users/2"
    Then Статус ответа равен 200
