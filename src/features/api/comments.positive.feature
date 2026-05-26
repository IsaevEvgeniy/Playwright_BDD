Feature: Позитивные API сценарии для комментариев

  @Regression
  Scenario Outline: Получение комментария по id
    When Отправлен GET запрос "/comments/<id>"
    Then Статус ответа равен 200
    And Ответ содержит поле "<field>"

    Examples:
      | id  | field |
      | 1   | name  |
      | 50  | email |
      | 100 | body  |

  @Regression
  Scenario Outline: Получение комментариев по посту
    When Отправлен GET запрос "/comments?postId=<id>"
    Then Статус ответа равен 200
    And Список не пустой

    Examples:
      | id  |
      | 1   |
      | 50  |
      | 100 |

  @Regression
  Scenario Outline: Создание нового комментария
    When Отправлен POST запрос "/comments" с именем "<name>" почтой "<email>" и телом "<body>"
    Then Статус ответа равен 201
    And Ответ содержит поле "name" со значением "<name>"

    Examples:
      | name  | email          | body           |
      | Alice | alice@test.com | First comment  |
      | Bob   | bob@test.com   | Second comment |

  @Regression
  Scenario Outline: Полное обновление комментария
    When Отправлен PUT запрос "/comments/<id>" с именем "<name>" почтой "<email>" и телом "<body>"
    Then Статус ответа равен 200
    And Ответ содержит поле "email" со значением "<email>"

    Examples:
      | id | name  | email          | body    |
      | 1  | Alice | alice@test.com | Updated |
      | 50 | Bob   | bob@test.com   | Updated |

  @Regression
  Scenario Outline: Частичное обновление комментария
    When Отправлен PATCH запрос "/comments/<id>" с именем "<name>" почтой "<email>" и телом "<body>"
    Then Статус ответа равен 200
    And Ответ содержит поле "body" со значением "<body>"

    Examples:
      | id | name  | email          | body    |
      | 1  | Carol | carol@test.com | Patched |
      | 50 | Dave  | dave@test.com  | Patched |

  @Regression
  Scenario Outline: Удаление комментария по id
    When Отправлен DELETE запрос "/comments/<id>"
    Then Статус ответа равен 200

    Examples:
      | id |
      | 1  |
      | 50 |