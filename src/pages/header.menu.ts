import { Locator, Page } from '@playwright/test';

export type SortOption = 'az' | 'za' | 'lohi' | 'hilo';

export class Header {
  readonly page: Page;
  private readonly menuButton: Locator;
  private readonly cart: Locator;
  private readonly sortDropdown: Locator;
  private readonly menuAllItems: Locator;
  private readonly menuLogout: Locator;
  private readonly menuResetAppState: Locator;

  constructor(page: Page) {
    this.page = page;
    this.menuButton = page.locator('#react-burger-menu-btn');
    this.cart = page.locator('[data-test="shopping-cart-link"]');
    this.sortDropdown = page.locator('[data-test="product-sort-container"]');
    this.menuAllItems = page.locator('[data-test="inventory-sidebar-link"]');
    this.menuLogout = page.locator('[data-test="logout-sidebar-link"]');
    this.menuResetAppState = page.locator('[data-test="reset-sidebar-link"]');
  }

  async goToCart(): Promise<void> {
    await this.cart.click();
  }

  async selectSort(option: SortOption): Promise<void> {
    await this.sortDropdown.selectOption(option);
  }

  async logout(): Promise<void> {
    await this.menuButton.click();
    await this.menuLogout.click();
  }

  async goToAllItems(): Promise<void> {
    await this.menuButton.click();
    await this.menuAllItems.click();
  }

  async resetAppState(): Promise<void> {
    await this.menuButton.click();
    await this.menuResetAppState.click();
  }
}
