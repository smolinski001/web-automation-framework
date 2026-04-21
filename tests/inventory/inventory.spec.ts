import { test, expect } from "@fixtures/base";

test("should display inventory page after login", async ({ loggedInPage, page }) => {
  await expect(page).toHaveURL(/.*inventory.html/);
});

test("should display correct number of products", async ({ loggedInPage, pages }) => {
  await expect(pages.mainPage.classProduct).toHaveCount(6);
});

test("should add product to cart", async ({ loggedInPage }) => {
  await loggedInPage.mainPage.addItemToCart("Sauce Labs Backpack");
  await expect(loggedInPage.mainPage.cartNumber).toHaveText("1");
});
