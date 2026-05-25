import { Locator, Page, expect } from '@playwright/test';
import { Urls } from '../config/urls.config';

export class CheckoutPage {
  readonly page: Page;
  private readonly firstNameInput: Locator;
  private readonly lastNameInput: Locator;
  private readonly postalCodeInput: Locator;
  private readonly continueButton: Locator;
  private readonly finishButton: Locator;
  private readonly errorMessage: Locator;
  private readonly completeHeader: Locator;

  constructor(page: Page) {
    this.page = page;
    this.firstNameInput = page.locator('[data-test="firstName"]');
    this.lastNameInput = page.locator('[data-test="lastName"]');
    this.postalCodeInput = page.locator('[data-test="postalCode"]');
    this.continueButton = page.locator('[data-test="continue"]');
    this.finishButton = page.locator('[data-test="finish"]');
    this.errorMessage = page.locator('[data-test="error"]');
    this.completeHeader = page.locator('[data-test="complete-header"]');
  }

  async checkLoaded(): Promise<void> {
    await expect(this.page).toHaveURL(new RegExp(Urls.checkout.replace(/\./g, '\\.')));
  }

  async fillFirstName(value: string): Promise<void> {
    await this.firstNameInput.fill(value);
  }

  async fillLastName(value: string): Promise<void> {
    await this.lastNameInput.fill(value);
  }

  async fillForm(firstName: string, lastName: string, zip: string): Promise<void> {
    await this.firstNameInput.fill(firstName);
    await this.lastNameInput.fill(lastName);
    await this.postalCodeInput.fill(zip);
  }

  async submitForm(): Promise<void> {
    await this.continueButton.click();
  }

  async finish(): Promise<void> {
    await this.finishButton.click();
  }

  async checkError(message: string): Promise<void> {
    await expect(this.errorMessage).toHaveText(message);
  }

  async checkComplete(): Promise<void> {
    await expect(this.page).toHaveURL(new RegExp(Urls.checkoutComplete.replace(/\./g, '\\.')));
    await expect(this.completeHeader).toBeVisible();
  }
}
