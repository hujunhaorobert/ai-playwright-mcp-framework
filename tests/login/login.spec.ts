import { test, expect } from '../../src/fixtures/base';
import { InventoryPage } from '../../src/pages/InventoryPage';
import { LoginPage } from '../../src/pages/LoginPage';
import users from '../data/users.json';

test.describe('Login flow', () => {
  test('standard_user logs in successfully @smoke @critical', async ({ page }) => {
    const loginPage = new LoginPage(page);

    await test.step('Open the login page and verify its controls', async () => {
      await loginPage.goto();
      await expect(loginPage.usernameInput).toBeVisible();
      await expect(loginPage.passwordInput).toBeVisible();
      await expect(loginPage.loginButton).toBeVisible();
    });

    await test.step('Enter the standard user credentials', async () => {
      await loginPage.enterCredentials(users.standard);
      await expect(loginPage.usernameInput).toHaveValue(users.standard.username);
      await expect(loginPage.passwordInput).toHaveValue(users.standard.password);
    });

    const inventoryPage: InventoryPage = await test.step(
      'Submit the login form',
      async (): Promise<InventoryPage> => loginPage.submit(),
    );

    await test.step('Verify the inventory page is displayed', async () => {
      await expect(page).toHaveURL(/\/inventory\.html$/);
      await expect(inventoryPage.heading).toBeVisible();
      await expect(inventoryPage.addToCartButtons).toHaveCount(6);
      await expect(loginPage.errorMessage).not.toBeVisible();
    });
  });

  test('locked_out_user is rejected with a locked account error @smoke @critical', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const inventoryPage = new InventoryPage(page);

    await test.step('Open the login page and verify its controls', async () => {
      await loginPage.goto();
      await expect(loginPage.usernameInput).toBeVisible();
      await expect(loginPage.passwordInput).toBeVisible();
      await expect(loginPage.loginButton).toBeVisible();
    });

    await test.step('Enter the locked user credentials', async () => {
      await loginPage.enterCredentials(users.locked);
      await expect(loginPage.usernameInput).toHaveValue(users.locked.username);
      await expect(loginPage.passwordInput).toHaveValue(users.locked.password);
    });

    await test.step('Submit the login form', async () => {
      await loginPage.submit();
    });

    await test.step('Verify the locked account remains on the login page', async () => {
      await expect(loginPage.usernameInput).toBeVisible();
      await expect(loginPage.errorMessage).toHaveText(
        'Epic sadface: Sorry, this user has been locked out.',
      );
      await expect(inventoryPage.heading).not.toBeVisible();
    });
  });

  test('empty username is rejected @smoke @critical', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const inventoryPage = new InventoryPage(page);

    await test.step('Open the login page with empty fields', async () => {
      await loginPage.goto();
      await expect(loginPage.usernameInput).toBeVisible();
      await expect(loginPage.passwordInput).toBeVisible();
      await expect(loginPage.loginButton).toBeVisible();
      await expect(loginPage.usernameInput).toHaveValue('');
      await expect(loginPage.passwordInput).toHaveValue('');
    });

    await test.step('Enter the password while leaving username empty', async () => {
      await loginPage.enterPassword(users.standard.password);
      await expect(loginPage.usernameInput).toHaveValue('');
      await expect(loginPage.passwordInput).toHaveValue(users.standard.password);
    });

    await test.step('Submit and verify the required username error', async () => {
      await loginPage.submit();
      await expect(page).toHaveURL('https://www.saucedemo.com/');
      await expect(loginPage.errorMessage).toHaveText('Epic sadface: Username is required');
      await expect(inventoryPage.heading).not.toBeVisible();
    });
  });
});
