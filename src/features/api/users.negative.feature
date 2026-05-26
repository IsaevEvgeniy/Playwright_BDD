Feature: Негативные API сценарии пользователей

  @Regression
  Scenario Outline: Запрос несуществующего пользователя возвращает 404
    When Отправлен GET запрос "/users/<id>"
    Then Статус ответа равен 404

    Examples:
      | id  |
      | 999 |
      | 0   |
      | -1  |

  @Regression
  Scenario Outline: Обновление несуществующего пользователя возвращает 500
    When Отправлен PUT запрос "/users/<id>" с именем "Test" и должностью "QA"
    Then Статус ответа равен 500

    Examples:
      | id  |
      | 999 |
      | 0   |
      | -1  |

  @Regression
  Scenario Outline: Удаление несуществующего пользователя возвращает 200
    When Отправлен DELETE запрос "/users/<id>"
    Then Статус ответа равен 200

    Examples:
      | id  |
      | 999 |
      | 0   |

  @Regression
  Scenario Outline: Частичное обновление несуществующего пользователя возвращает 200
    When Отправлен PATCH запрос "/users/<id>" с именем "Test" и должностью "QA"
    Then Статус ответа равен 200

    Examples:
      | id  |
      | 999 |
      | 0   |
