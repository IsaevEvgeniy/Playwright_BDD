import { Locator, Page, expect } from '@playwright/test';
import { Urls } from '../config/urls.config';
import { BasePage } from './base.page';

export class CartPage extends BasePage {
  protected readonly url = Urls.cart;
  private readonly cartItems: Locator;
  private readonly cartItemNames: Locator;
  private readonly checkoutButton: Locator;
  private readonly removeButtons: Locator;
  private readonly continueShoppingButton: Locator;

  constructor(page: Page) {
    super(page);
    this.cartItems = page.locator('[data-test="inventory-item"]');
    this.cartItemNames = page.locator('[data-test="inventory-item-name"]');
    this.checkoutButton = page.locator('[data-test="checkout"]');
    this.removeButtons = page.locator('[data-test^="remove"]');
    this.continueShoppingButton = page.locator('[data-test="continue-shopping"]');
  }

  async checkLoaded(): Promise<void> {
    await this.waitForUrl();
  }

  async getCartItemsCount(): Promise<number> {
    return this.cartItems.count();
  }

  async checkContainsItem(name: string): Promise<void> {
    await expect(this.cartItemNames.filter({ hasText: name })).toBeVisible();
  }

  async removeItemByName(name: string): Promise<void> {
    const item = this.cartItems.filter({ hasText: name });
    await item.locator(this.removeButtons).click();
  }

  async continueShopping(): Promise<void> {
    await this.continueShoppingButton.click();
  }

  async proceedToCheckout(): Promise<void> {
    await this.checkoutButton.click();
  }
}
