import { test, expect } from "@fixtures/base";
import { positiveUser } from "@data/users";

test("should display inventory page after login", async ({ loginFlow, page }) => {
  await loginFlow.loginAs(positiveUser);
  await expect(page).toHaveURL(/.*inventory.html/);
});

test("should display correct number of products", async ({ loginFlow, pages }) => {
  await loginFlow.loginAs(positiveUser);
  await expect(pages.mainPage.classProduct).toHaveCount(6);
});

test("should add product to cart", async ({ cartFlow, pages }) => {
  await cartFlow.addProduct("Sauce Labs Backpack");
  await expect(pages.mainPage.cartNumber).toHaveText("1");
});
