Feature: Позитивные API сценарии для альбомов

  @Regression
  Scenario Outline: Получение альбома по id
    When Отправлен GET запрос "/albums/<id>"
    Then Статус ответа равен 200
    And Ответ содержит поле "<field>"

    Examples:
      | id | field  |
      | 1  | title  |
      | 50 | userId |
      | 99 | id     |

  @Regression
  Scenario Outline: Фильтрация альбомов по userId
    When Отправлен GET запрос "/albums?userId=<id>"
    Then Статус ответа равен 200
    And Список не пустой

    Examples:
      | id |
      | 1  |
      | 3  |

  @Regression
  Scenario Outline: Создание нового альбома
    When Отправлен POST запрос "/albums" с заголовком "<title>"
    Then Статус ответа равен 201
    And Ответ содержит поле "title" со значением "<title>"

    Examples:
      | title       |
      | My Album    |

  @Regression
  Scenario Outline: Полное обновление альбома
    When Отправлен PUT запрос "/albums/<id>" с заголовком "<title>"
    Then Статус ответа равен 200
    And Ответ содержит поле "title" со значением "<title>"

    Examples:
      | id | title          |
      | 1  | Updated Album  |
      | 50 | Another Update |

  @Regression
  Scenario Outline: Частичное обновление альбома
    When Отправлен PATCH запрос "/albums/<id>" с заголовком "<title>"
    Then Статус ответа равен 200
    And Ответ содержит поле "title" со значением "<title>"

    Examples:
      | id | title         |
      | 1  | Patched Album |
      | 50 | Patched Title |

  @Regression
  Scenario Outline: Удаление альбома по id
    When Отправлен DELETE запрос "/albums/<id>"
    Then Статус ответа равен 200

    Examples:
      | id |
      | 1  |
      | 50 |
