import { Page } from '@playwright/test';

export abstract class BasePage {
  readonly page: Page;
  protected abstract readonly url: string;

  constructor(page: Page) {
    this.page = page;
  }

  async navigate(): Promise<void> {
    await this.page.goto(this.url);
  }

  async waitForUrl(): Promise<void> {
    await this.page.waitForURL(new RegExp(this.url.replace(/\./g, '\\.')), {
      timeout: 30000,
      waitUntil: 'domcontentloaded',
    });
  }
}
