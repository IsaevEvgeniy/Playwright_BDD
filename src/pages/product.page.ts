import { Locator, Page, expect } from '@playwright/test';
import { SortOption } from './header.menu';
import { Urls } from '../config/urls.config';
import { BasePage } from './base.page';

export class ProductPage extends BasePage {
  protected readonly url = Urls.inventory;
  private readonly itemNames: Locator;
  private readonly itemPrices: Locator;
  private readonly inventoryItems: Locator;
  private readonly addToCartButtons: Locator;
  private readonly cartBadge: Locator;

  constructor(page: Page) {
    super(page);
    this.itemNames = page.locator('[data-test="inventory-item-name"]');
    this.itemPrices = page.locator('[data-test="inventory-item-price"]');
    this.inventoryItems = page.locator('[data-test="inventory-item"]');
    this.addToCartButtons = page.locator('[data-test^="add-to-cart"]');
    this.cartBadge = page.locator('[data-test="shopping-cart-badge"]');
  }

  async checkLoaded(): Promise<void> {
    await this.waitForUrl();
  }

  async addToCartByName(name: string): Promise<void> {
    const item = this.inventoryItems.filter({ hasText: name });
    await item.locator(this.addToCartButtons).click();
  }

  async addToCartByIndex(index: number): Promise<void> {
    await this.addToCartButtons.nth(index).click();
  }

  async checkCartCount(count: number): Promise<void> {
    await expect(this.cartBadge).toHaveText(String(count));
  }

  async checkSorted(option: SortOption): Promise<void> {
    if (option === 'az' || option === 'za') {
      const names = await this.itemNames.allTextContents();
      const sorted = [...names].sort();
      if (option === 'za') sorted.reverse();
      expect(names).toEqual(sorted);
    } else {
      const texts = await this.itemPrices.allTextContents();
      const prices = texts.map(t => parseFloat(t.replace('$', '')));
      const sorted = [...prices].sort((a, b) => a - b);
      if (option === 'hilo') sorted.reverse();
      expect(prices).toEqual(sorted);
    }
  }
}
