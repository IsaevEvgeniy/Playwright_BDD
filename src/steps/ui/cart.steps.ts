import { expect } from '@playwright/test';
import { When, Then } from '../../fixtures/fixtures';

When('Удалён товар {string} из корзины', async ({ cartPage }, name: string) => {
  await cartPage.removeItemByName(name);
});

When('Выполнен возврат к каталогу из корзины', async ({ cartPage }) => {
  await cartPage.continueShopping();
});

When('Выполнен переход к оформлению заказа', async ({ cartPage }) => {
  await cartPage.proceedToCheckout();
});

Then('Корзина содержит товар {string}', async ({ cartPage }, name: string) => {
  await cartPage.checkContainsItem(name);
});

Then('Количество товаров в корзине равно {int}', async ({ cartPage }, count: number) => {
  const actual = await cartPage.getCartItemsCount();
  expect(actual).toBe(count);
});

Then('Отображается страница оформления заказа', async ({ checkoutPage }) => {
  await checkoutPage.checkLoaded();
});
