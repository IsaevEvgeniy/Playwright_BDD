import { Locator, Page, expect } from '@playwright/test';
import { Urls } from '../config/urls.config';
import { UserRole, Users } from '../config/users.config';
import { BasePage } from './base.page';

export class LoginPage extends BasePage {
  protected readonly url = Urls.login;
  readonly username: Locator;
  readonly password: Locator;
  readonly button: Locator;
  readonly errorMessage: Locator;

  constructor(page: Page) {
    super(page);
    this.username = page.locator('[data-test="username"]');
    this.password = page.locator('[data-test="password"]');
    this.button = page.locator('[data-test="login-button"]');
    this.errorMessage = page.locator('[data-test="error"]');
  }

  async checkLoaded(): Promise<void> {
    await this.waitForUrl();
  }

  async loginAs(role: UserRole): Promise<void> {
    const { username, password } = Users[role];
    await this.username.fill(username);
    await this.password.fill(password);
    await this.button.click();
  }

  async fillUser(role: UserRole): Promise<void> {
    await this.username.fill(Users[role].username);
  }

  async fillPassword(role: UserRole): Promise<void> {
    await this.password.fill(Users[role].password);
  }

  async clickSubmit(): Promise<void> {
    await this.button.click();
  }

  async checkError(message: string): Promise<void> {
    await expect(this.errorMessage).toHaveText(message);
  }
}
