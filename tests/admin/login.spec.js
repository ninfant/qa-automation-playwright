// tests/admin/login.spec.js
import { test, expect } from "@playwright/test";
import { adminUser } from "../../fixtures/test-users";

test("admin can log in", async ({ page }) => {
  await page.goto(process.env.ADMIN_BASE_URL);

  await page.getByPlaceholder("Email").fill(adminUser.email);
  await page.getByPlaceholder("Password").fill(adminUser.password);
  await page
    .getByRole("button", { name: /log\s*in|login|sign\s*in|submit/i })
    .click();

  await expect(page).toHaveURL(/dashboard|admin|home/);
  // o: await expect(page.getByText('Dashboard')).toBeVisible();
});
