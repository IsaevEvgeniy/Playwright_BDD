Feature: Негативные API сценарии для альбомов

  @Regression
  Scenario Outline: Получение несуществующего альбома возвращает 404
    When Отправлен GET запрос "/albums/<id>"
    Then Статус ответа равен 404

    Examples:
      | id   |
      | -1   |
      | 0    |
      | 9999 |

  @Regression
  Scenario Outline: Обновление несуществующего альбома возвращает 500
    When Отправлен PUT запрос "/albums/<id>" с заголовком "<title>"
    Then Статус ответа равен 500

    Examples:
      | id   | title   |
      | -1   | Invalid |
      | 0    | Invalid |
      | 9999 | Invalid |
