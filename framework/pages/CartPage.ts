import { type Locator, type Page } from "@playwright/test";

export class CartPage {
  readonly page: Page;
  readonly btnCheckout: Locator;

  constructor(page: Page) {
    this.page = page;
    this.btnCheckout = page.locator('[data-test="checkout"]');
  }

  async clickCheckoutButton() {
    await this.btnCheckout.click();
  }
}
