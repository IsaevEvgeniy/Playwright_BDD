import { chromium } from '@playwright/test';
import * as dotenv from 'dotenv';

dotenv.config();

export default async function globalSetup() {
  const browser = await chromium.launch();
  const context = await browser.newContext({ baseURL: process.env.BASE_URL });
  const page = await context.newPage();

  await page.goto('/');
  await page.locator('[data-test="username"]').fill(process.env.USER_STANDARD!);
  await page.locator('[data-test="password"]').fill(process.env.PASSWORD_STANDARD!);
  await page.locator('[data-test="login-button"]').click();
  await page.waitForURL('**/inventory.html');
  await context.storageState({ path: '.auth/user.json' });
  await browser.close();
}
