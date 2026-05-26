Feature: Негативные API сценарии для комментариев

  @Regression
  Scenario Outline: Получение несуществующего комментария возвращает 404
    When Отправлен GET запрос "/comments/<id>"
    Then Статус ответа равен 404

    Examples:
      | id   |
      | -1   |
      | 0    |
      | 9999 |

  @Regression
  Scenario Outline: Обновление несуществующего комментария возвращает 500
    When Отправлен PUT запрос "/comments/<id>" с именем "<name>" почтой "<email>" и телом "<body>"
    Then Статус ответа равен 500

    Examples:
      | id   | name    | email            | body    |
      | -1   | Invalid | invalid@test.com | No body |
      | 9999 | Invalid | invalid@test.com | No body |
      | 0    | Invalid | invalid@test.com | No body |
