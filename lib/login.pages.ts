import type { Locator, Page } from "@playwright/test";
//Page object model for the login page
//This page object model is used to interact with the login page

const adminBaseUrl = process.env.ADMIN_BASE_URL;
if (!adminBaseUrl) {
  throw new Error("ADMIN_BASE_URL is not set");
}
export class LoginPage {
  readonly page: Page;
  readonly emailInput: Locator;
  readonly passwordInput: Locator;
  readonly loginButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.emailInput = page.getByPlaceholder(/Email/i);
    this.passwordInput = page.getByPlaceholder(/Password/i);
    this.loginButton = page.getByRole("button", {
      name: /log\s*in|login|sign\s*in|submit/i,
    });
  }
  async goto() {
    await this.page.goto(adminBaseUrl!);
  }

  async login(email: string, password: string) {
    await this.emailInput.fill(email);
    await this.passwordInput.fill(password);
    await this.loginButton.click();
  }
}
