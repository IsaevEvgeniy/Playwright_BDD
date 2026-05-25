import { test as base, createBdd } from 'playwright-bdd';
import { ApiClient } from '../api/api.client';
import { CartPage } from '../pages/cart.page';
import { CheckoutPage } from '../pages/checkout.page';
import { Header } from '../pages/header.menu';
import { LoginPage } from '../pages/login.page';
import { ProductPage } from '../pages/product.page';

export const test = base.extend<{
  loginPage: LoginPage;
  productPage: ProductPage;
  cartPage: CartPage;
  checkoutPage: CheckoutPage;
  header: Header;
  api: ApiClient;
}>({
  loginPage: async ({ page }, use) => {
    await use(new LoginPage(page));
  },
  productPage: async ({ page }, use) => {
    await use(new ProductPage(page));
  },
  cartPage: async ({ page }, use) => {
    await use(new CartPage(page));
  },
  checkoutPage: async ({ page }, use) => {
    await use(new CheckoutPage(page));
  },
  header: async ({ page }, use) => {
    await use(new Header(page));
  },
  api: async ({ playwright }, use) => {
    const request = await playwright.request.newContext({
      baseURL: process.env.BASE_URL_API,
    });
    await use(new ApiClient(request));
    await request.dispose();
  },
});

export const { Given, When, Then } = createBdd(test);
