import { When, Then } from '../../fixtures/fixtures';

When('Форма оформления заказа отправлена', async ({ checkoutPage }) => {
  await checkoutPage.submitForm();
});

When('Заполнено имя покупателя {string}', async ({ checkoutPage }, name: string) => {
  await checkoutPage.fillFirstName(name);
});

When('Заполнена фамилия покупателя {string}', async ({ checkoutPage }, lastName: string) => {
  await checkoutPage.fillLastName(lastName);
});

When('Заполнена форма оформления заказа {string} {string} {string}',
  async ({ checkoutPage }, firstName: string, lastName: string, zip: string) => {
    await checkoutPage.fillForm(firstName, lastName, zip);
  },
);

When('Заказ подтверждён', async ({ checkoutPage }) => {
  await checkoutPage.finish();
});

Then('Отображается страница завершения заказа', async ({ checkoutPage }) => {
  await checkoutPage.checkComplete();
});

Then('Отображается ошибка в форме заказа {string}', async ({ checkoutPage }, message: string) => {
  await checkoutPage.checkError(message);
});
