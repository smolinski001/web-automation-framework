import { CartPage } from "@pages/CartPage";
import { CheckoutPage } from "@pages/CheckoutPage";
import { FinishPage } from "@pages/FinishPage";
import { CompletePage } from "@pages/CompletePage";

export class CheckoutFlow {
  constructor(
    private cartPage: CartPage,
    private checkoutPage: CheckoutPage,
    private finishPage: FinishPage,
    private completePage: CompletePage,
  ) {}

  async clickCheckoutButton() {
    await this.cartPage.clickCheckoutButton();
  }

  async proceedToCheckout(firstName: string, lastName: string, postalCode: string) {
    await this.checkoutPage.proceedToCheckout(firstName, lastName, postalCode);
  }

  async clickContinueButton() {
    await this.checkoutPage.clickContinueButton();
  }

  async clickFinishButton() {
    await this.finishPage.finishShopping();
  }

  async clickBackHomeButton() {
    await this.completePage.backHomePage();
  }
}
