import { When, Then } from '../../fixtures/fixtures';

When('Добавлен товар {string} в корзину', async ({ productPage }, name: string) => {
  await productPage.addToCartByName(name);
});

When('Добавлен первый товар из каталога в корзину', async ({ productPage }) => {
  await productPage.addToCartByIndex(0);
});

Then('Счётчик корзины равен {int}', async ({ productPage }, count: number) => {
  await productPage.checkCartCount(count);
});
