import { test, expect } from "@fixtures/base";

test("Complete checkout shopping", async ({ cartFlow, checkoutFlow }) => {
  await cartFlow.addProduct("Sauce Labs Bike Light");
  await cartFlow.goToCart();
  await checkoutFlow.clickCheckoutButton();
  await checkoutFlow.proceedToCheckout("Jan", "Kowalski", "12-123");
  await checkoutFlow.clickContinueButton();
  await checkoutFlow.clickFinishButton();
  await checkoutFlow.clickBackHomeButton();
});
