import type { Locator, Page } from '@playwright/test';
import { BasePage } from './BasePage';

export class InventoryPage extends BasePage {
  readonly heading: Locator;
  readonly addToCartButtons: Locator;

  constructor(page: Page) {
    super(page);
    this.heading = page.getByText('Products', { exact: true });
    this.addToCartButtons = page.getByRole('button', { name: 'Add to cart' });
  }

  async goto(): Promise<void> {
    await this.page.goto('https://www.saucedemo.com/inventory.html');
  }
}
