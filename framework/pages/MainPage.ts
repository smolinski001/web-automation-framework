import { type Locator, type Page } from "@playwright/test";

export class MainPage {
  readonly page: Page;
  readonly cartLink: Locator;
  readonly cartNumber: Locator;
  readonly classProduct: Locator;
  readonly btnBurger: Locator;
  readonly logOut: Locator;

  //stałe elementy które nie ulegają zmianie na danej stronie
  constructor(page: Page) {
    this.page = page;

    this.cartLink = page.locator('[data-test="shopping-cart-link"]');
    this.cartNumber = page.locator('[data-test="shopping-cart-badge"]');
    this.classProduct = page.locator(".inventory_item");
    this.btnBurger = page.locator(".bm-burger-button");
    this.logOut = page.locator('[data-test="logout-sidebar-link"]');
  }

  async goToCart() {
    await this.cartLink.click();
  }

  async clickBtnBurger() {
    await this.btnBurger.click();
  }

  async clicklogOut() {
    await this.clickBtnBurger();
    await this.logOut.click();
  }

  //Chaining methods
  //dynamiczna metoda która posiada lokatory które mogą się zmieniać
  async addItemToCart(productName: string) {
    await this.classProduct.filter({ hasText: productName }).locator("button").click();
  }
}
