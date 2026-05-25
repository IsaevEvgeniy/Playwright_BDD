import { SortOption } from '../pages/header.menu';
import { Given, When, Then } from '../../fixtures/fixtures';

Given('Открыта страница каталога товаров', async ({ productPage }) => {
  await productPage.navigate();
});

When('Выполнен выход из системы', async ({ header }) => {
  await header.logout();
});

When('Выполнен переход к каталогу через меню', async ({ header }) => {
  await header.goToAllItems();
});

When('Выполнен переход в корзину', async ({ header }) => {
  await header.goToCart();
});

When('Выбрана сортировка {string}', async ({ header }, option: SortOption) => {
  await header.selectSort(option);
});

When('Выполнен сброс состояния приложения', async ({ header }) => {
  await header.resetAppState();
});

Then('Отображается страница авторизации', async ({ loginPage }) => {
  await loginPage.checkLoaded();
});

Then('Отображается страница корзины', async ({ cartPage }) => {
  await cartPage.checkLoaded();
});

Then('Товары отсортированы по варианту {string}', async ({ productPage }, option: SortOption) => {
  await productPage.checkSorted(option);
});
