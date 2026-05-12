import { test, expect } from "@fixtures/base";
import { positiveUser, negativeUser } from "@data/users";

test("Test positive user", async ({ loginFlow, page }) => {
  await loginFlow.loginAs(positiveUser);

  await expect(page).toHaveURL(/.*inventory.html/);
});

test("Test negative user", async ({ loginFlow, pages }) => {
  await loginFlow.loginAs(negativeUser);

  await expect(pages.loginPage.errorMessage).toHaveText("Epic sadface: Sorry, this user has been locked out.");
});

test("Test random user", async ({ pages }) => {
  await pages.loginPage.goto();
  await pages.loginPage.loginToStore("qwefsgrdf", "qwfesgrfd");

  await expect(pages.loginPage.errorMessage).toHaveText(
    "Epic sadface: Username and password do not match any user in this service",
  );
});
