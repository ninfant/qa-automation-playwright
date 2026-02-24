// tests/admin/login.spec.js
import { test, expect } from "@playwright/test";
import { adminUser } from "../../fixtures/test-users";
import { LoginPage } from "../../lib/login.pages";

test("admin can log in", async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.goto();

  await loginPage.login(adminUser.email, adminUser.password);

  await expect(page).toHaveURL(/dashboard|admin|home/);
  // o: await expect(page.getByText('Dashboard')).toBeVisible();
});
