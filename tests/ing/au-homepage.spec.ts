import { test, expect } from '../../src/fixtures/base';
import { IngAuHomePage } from '../../src/pages/IngAuHomePage';

test.describe('ING Australia homepage', () => {
  test('homepage loads with its key content @smoke @critical', async ({ page }) => {
    const homePage = new IngAuHomePage(page);

    await test.step('Open the homepage and verify its title and branding', async () => {
      await homePage.goto();
      await expect(page).toHaveTitle(
        'ING Australia, Bank Accounts, Credit Cards, Loans & Insurance',
      );
      await expect(homePage.logo).toBeVisible();
    });

    await test.step('Verify the main homepage sections render', async () => {
      await expect(homePage.heroHeading).toBeVisible();
      await expect(homePage.welcomeHeading).toBeVisible();
      await expect(homePage.productsHeading).toBeVisible();
      await expect(homePage.importantInformationHeading).toBeVisible();
    });
  });

  test('header links and product navigation work @smoke @critical', async ({ page }) => {
    const homePage = new IngAuHomePage(page);

    await test.step('Open the homepage and verify header links', async () => {
      await homePage.goto();
      await expect(homePage.jointApplicationLink).toBeVisible();
      await expect(homePage.loginLabel).toBeVisible();

      const primaryNavigation = [
        [homePage.bankAndSaveLink, '/everyday-banking.html'],
        [homePage.creditCardsLink, '/credit-cards.html'],
        [homePage.personalLoansLink, '/personal-loans.html'],
        [homePage.homeLoansLink, '/home-loans.html'],
        [homePage.insuranceLink, '/insurance.html'],
        [homePage.superannuationLink, '/superannuation/living-super.html'],
        [homePage.businessLink, '/business.html'],
      ] as const;

      for (const [link, destination] of primaryNavigation) {
        await expect(link).toBeVisible();
        await expect(link).toHaveAttribute('href', destination);
      }

      await expect(homePage.helpAndSupportLink).toBeVisible();
      await expect(homePage.helpAndSupportLink).toHaveAttribute('href', '/help-and-support.html');
    });

    await test.step('Verify the joint application dialog can be opened and cancelled', async () => {
      await homePage.openJointApplication();
      await expect(homePage.jointApplicationDialogHeading).toBeVisible();
      await expect(homePage.jointAccountCodeInput).toBeVisible();
      await homePage.cancelJointApplication();
      await expect(homePage.jointApplicationDialog).not.toBeVisible();
    });

    await test.step('Verify login navigation and return to the homepage', async () => {
      await homePage.openLogin();
      await expect(page).toHaveURL(/\/securebanking\/?$/);
      await homePage.goto();
    });

    await test.step('Open each primary menu and inspect its tools', async () => {
      await homePage.bankAndSaveLink.focus();
      await expect(homePage.bankAndSaveLink).toBeFocused();
      await page.keyboard.press('Enter');
      await expect(homePage.readyToSwitchLink).toBeVisible();

      const additionalMenus = [
        [homePage.creditCardsLink, homePage.compareCreditCardsLink, '/credit-cards/compare-credit-cards.html'],
        [
          homePage.personalLoansLink,
          homePage.personalLoanCalculatorLink,
          '/personal-loans/calculators/personal-loan-borrowing-power-calculator.html',
        ],
        [
          homePage.homeLoansLink,
          homePage.homeLoanCalculatorLink,
          '/home-loans/calculators/borrowing-power.html',
        ],
        [
          homePage.insuranceLink,
          homePage.makeInsuranceClaimLink,
          '/insurance/claims.html?pid=vis:meganav:ins:claim',
        ],
        [
          homePage.superannuationLink,
          homePage.livingSuperAccountsLink,
          '/superannuation/living-super/compare-super-accounts.html',
        ],
        [
          homePage.businessLink,
          homePage.businessCalculatorsLink,
          '/calculators-and-tools.html#ING-content-2',
        ],
      ] as const;

      for (const [menuLink, toolLink, destination] of additionalMenus) {
        await homePage.openPrimaryNavigationMenu(menuLink);
        await expect(toolLink).toBeVisible();
        await expect(toolLink).toHaveAttribute('href', destination);
      }
    });

    await test.step('Follow product and help links, then return home', async () => {
      await homePage.goto();
      await homePage.openPrimaryNavigationMenu(homePage.bankAndSaveLink);
      await expect(homePage.readyToSwitchLink).toBeVisible();
      await homePage.readyToSwitchLink.click();
      await expect(page).toHaveURL(/\/everyday-banking\.html#ING-content-5$/);

      await homePage.goto();
      await homePage.openHelpAndSupport();
      await expect(page).toHaveURL(/\/help-and-support\.html$/);

      await homePage.goto();
      await expect(homePage.heroHeading).toBeVisible();
    });
  });
});
