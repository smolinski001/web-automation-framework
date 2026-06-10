import { MainPage } from "@pages/MainPage";

export class CartFlow {
  constructor(private mainPage: MainPage) {}

  async addProduct(productName: string) {
    await this.mainPage.addItemToCart(productName);
  }

  async goToCart() {
    await this.mainPage.goToCart();
  }

  async clicklogOut() {
    await this.mainPage.clicklogOut();
  }
}
