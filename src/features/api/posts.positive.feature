Feature: Позитивные API сценарии для постов

  @Regression
  Scenario Outline: Получение поста по id
    When Отправлен GET запрос "/posts/<id>"
    Then Статус ответа равен 200
    And Ответ содержит поле "title"

    Examples:
      | id |
      | 1  |
      | 3  |

  @Regression
  Scenario Outline: Получение постов по фильтрации пользователя
    When Отправлен GET запрос "/posts?userId=<id>"
    Then Статус ответа равен 200
    And Список не пустой

    Examples:
      | id |
      | 2  |
      | 5  |

  @Regression
  Scenario Outline: Создание нового поста
    When Отправлен POST запрос "/posts" с заголовком "Test" и телом "Content"
    Then Статус ответа равен 201
    And Ответ содержит поле "<field>"

    Examples:
      | field |
      | id    |
      | title |
      | body  |

  @Regression
  Scenario Outline: Полное обновление поста
    When Отправлен PUT запрос "/posts/1" с заголовком "Updated" и телом "Content"
    Then Статус ответа равен 200
    And Ответ содержит поле "<field>"

    Examples:
      | field |
      | id    |
      | title |
      | body  |

  @Regression
  Scenario Outline: Частичное обновление поста по id
    When Отправлен PATCH запрос "/posts/<id>" с заголовком "<test_title>" и телом "<test_body>"
    Then Статус ответа равен 200
    And Ответ содержит поле "<field>"

    Examples:
      | id | field | test_title    | test_body      |
      | 1  | title | Updated title | Updated body   |
      | 5  | body  | Another title | Another body   |

  @Regression
  Scenario Outline: Удаление поста по id
    When Отправлен DELETE запрос "/posts/<id>"
    Then Статус ответа равен 200

    Examples:
      | id |
      | 1  |
      | 5  |
