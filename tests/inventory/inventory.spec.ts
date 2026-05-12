import { test, expect } from "@fixtures/base";

test("should display inventory page after login", async ({ authenticatedPages, page }) => {
  await expect(page).toHaveURL(/.*inventory.html/);
});

test("should display correct number of products", async ({ authenticatedPages }) => {
  await expect(authenticatedPages.mainPage.classProduct).toHaveCount(6);
});

test("should add product to cart", async ({ authenticatedPages }) => {
  await authenticatedPages.mainPage.addItemToCart("Sauce Labs Backpack");
  await expect(authenticatedPages.mainPage.cartNumber).toHaveText("1");
});
