import { type Locator, type Page } from "@playwright/test";
export class CheckoutPage {
  readonly page: Page;

  readonly firstName: Locator;
  readonly lastName: Locator;
  readonly postalCode: Locator;
  readonly btnContinue: Locator;

  constructor(page: Page) {
    this.page = page;
    this.firstName = page.locator('[data-test="firstName"]');
    this.lastName = page.locator('[data-test="lastName"]');
    this.postalCode = page.locator('[data-test="postalCode"]');
    this.btnContinue = page.locator('[data-test="continue"]');
  }

  async proceedToCheckout(firstName: string, lastName: string, postalCode: string) {
    await this.firstName.fill(firstName);
    await this.lastName.fill(lastName);
    await this.postalCode.fill(postalCode);
  }

  async clickContinueButton() {
    await this.btnContinue.click();
  }
}
