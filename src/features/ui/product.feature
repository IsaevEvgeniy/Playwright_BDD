Feature: Каталог товаров

  Background:
    Given Открыта страница каталога товаров

  Rule: Пользователь может добавить товар в корзину

    @Smoke @Regression
    Scenario: Добавление товара в корзину по названию
      When Добавлен товар "Sauce Labs Backpack" в корзину
      Then Счётчик корзины равен 1

    @Regression
    Scenario: Добавление нескольких товаров в корзину
      When Добавлен товар "Sauce Labs Backpack" в корзину
      And Добавлен товар "Sauce Labs Bike Light" в корзину
      Then Счётчик корзины равен 2

    @Regression
    Scenario: Добавление первого товара из каталога в корзину
      When Добавлен первый товар из каталога в корзину
      Then Счётчик корзины равен 1
