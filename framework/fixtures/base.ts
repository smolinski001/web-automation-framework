import { test as base } from "@playwright/test";

//POM
import { CartPage } from "@pages/CartPage";
import { CheckoutPage } from "@pages/CheckoutPage";
import { FinishPage } from "@pages/FinishPage";
import { LoginPage } from "@pages/LoginPage";
import { MainPage } from "@pages/MainPage";
import { CompletePage } from "@pages/CompletePage";

//API
import { BookingClient } from "@api/clients/BookingClient";

//flows
import { LoginFlow } from "@flows/LoginFlow";
import { CartFlow } from "@flows/CartFlow";
import { CheckoutFlow } from "@flows/CheckoutFlow";

//data
import { positiveUser } from "@data/users";

type Pages = {
  cartPage: CartPage;
  checkoutPage: CheckoutPage;
  completePage: CompletePage;
  finishPage: FinishPage;
  loginPage: LoginPage;
  mainPage: MainPage;
};

export const test = base.extend<{
  pages: Pages;
  loginFlow: LoginFlow;
  cartFlow: CartFlow;
  checkoutFlow: CheckoutFlow;
  bookingClient: BookingClient;
}>({
  pages: async ({ page }, use) => {
    await use({
      cartPage: new CartPage(page),
      checkoutPage: new CheckoutPage(page),
      completePage: new CompletePage(page),
      finishPage: new FinishPage(page),
      loginPage: new LoginPage(page),
      mainPage: new MainPage(page),
    });
  },

  loginFlow: async ({ pages }, use) => {
    const loginFlow = new LoginFlow(pages.loginPage);
    await use(loginFlow);
  },

  cartFlow: async ({ loginFlow, pages }, use) => {
    await loginFlow.loginAs(positiveUser);
    const cartFlow = new CartFlow(pages.mainPage);
    await use(cartFlow);
  },

  checkoutFlow: async ({ cartFlow, pages }, use) => {
    const checkoutFlow = new CheckoutFlow(pages.cartPage, pages.checkoutPage, pages.finishPage, pages.completePage);
    await use(checkoutFlow);
  },

  bookingClient: async ({ request }, use) => {
    const bookingClient = new BookingClient(request);
    await use(bookingClient);
  },
});

export { expect } from "@playwright/test";
