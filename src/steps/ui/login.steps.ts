import { UserRole } from '../../config/users.config';
import { Given, Then, When } from '../../fixtures/fixtures';

Given('Открыта страница авторизации', async ({ page, loginPage }) => {
  await page.context().clearCookies();
  await loginPage.navigate();
});

When('Выполнен вход как пользователь {string}', async ({ loginPage }, role: UserRole) => {
  await loginPage.loginAs(role);
});

When('Заполнен логин пользователя {string}', async ({ loginPage }, role: UserRole) => {
  await loginPage.fillUser(role);
});

When('Заполнен пароль пользователя {string}', async ({ loginPage }, role: UserRole) => {
  await loginPage.fillPassword(role);
});

When('Форма отправлена без заполнения полей', async ({ loginPage }) => {
  await loginPage.clickSubmit();
});

When('Форма входа отправлена', async ({ loginPage }) => {
  await loginPage.clickSubmit();
});

Then('Отображается страница каталога товаров', async ({ productPage }) => {
  await productPage.checkLoaded();
});

Then('Отображается сообщение об ошибке {string}', async ({ loginPage }, message: string) => {
  await loginPage.checkError(message);
});
