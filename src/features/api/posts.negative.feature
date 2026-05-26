Feature: Негативные API сценарии для постов

  @Regression
  Scenario Outline: Получение несуществующего поста возвращает 404
    When Отправлен GET запрос "/posts/<id>"
    Then Статус ответа равен 404

    Examples:
      | id  |
      | -1  |
      | 0   |
      | 999 |

  @Regression
  Scenario Outline: Обновление несуществующего поста возвращает 500
    When Отправлен PUT запрос "/posts/<id>" с заголовком "<data_title>" и телом "<data_body>"
    Then Статус ответа равен 500

    Examples:
      | id  | data_title | data_body |
      | -1  | Test       | Content   |
      | 999 | Test       | Content   |
      | 0   | Test       | Content   |

