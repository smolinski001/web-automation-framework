import { test as base } from "@playwright/test";

//POM
import { CartPage } from "@pages/CartPage";
import { CheckoutPage } from "@pages/CheckoutPage";
import { FinishPage } from "@pages/FinishPage";
import { LoginPage } from "@pages/LoginPage";
import { MainPage } from "@pages/MainPage";
import { CompletePage } from "@pages/CompletePage";

//flows
import { LoginFlow } from "@flows/LoginFlow";
import { CartFlow } from "@flows/CartFlow";

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

export const test = base.extend<{ pages: Pages; loginFlow: LoginFlow; authenticatedPages: Pages }>({
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

  authenticatedPages: async ({ loginFlow, pages }, use) => {
    await loginFlow.loginAs(positiveUser);
    await use(pages);
    await pages.mainPage.clicklogOut();
  },
});

export { expect } from "@playwright/test";
