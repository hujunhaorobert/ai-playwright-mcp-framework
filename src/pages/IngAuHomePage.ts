import type { Locator, Page } from '@playwright/test';
import { BasePage } from './BasePage';

export class IngAuHomePage extends BasePage {
  readonly header: Locator;
  readonly logo: Locator;
  readonly heroHeading: Locator;
  readonly welcomeHeading: Locator;
  readonly productsHeading: Locator;
  readonly importantInformationHeading: Locator;
  readonly jointApplicationLink: Locator;
  readonly loginLabel: Locator;
  readonly bankAndSaveLink: Locator;
  readonly creditCardsLink: Locator;
  readonly personalLoansLink: Locator;
  readonly homeLoansLink: Locator;
  readonly insuranceLink: Locator;
  readonly superannuationLink: Locator;
  readonly businessLink: Locator;
  readonly helpAndSupportLink: Locator;
  readonly readyToSwitchLink: Locator;
  readonly compareCreditCardsLink: Locator;
  readonly personalLoanCalculatorLink: Locator;
  readonly homeLoanCalculatorLink: Locator;
  readonly makeInsuranceClaimLink: Locator;
  readonly livingSuperAccountsLink: Locator;
  readonly businessCalculatorsLink: Locator;
  readonly jointApplicationDialog: Locator;
  readonly jointApplicationDialogHeading: Locator;
  readonly jointAccountCodeInput: Locator;
  readonly cancelJointApplicationButton: Locator;

  constructor(page: Page) {
    super(page);
    this.header = page.getByRole('banner');
    this.logo = this.header.getByRole('link', { name: 'ING logo' });
    this.heroHeading = page.getByRole('heading', {
      name: "Save like there's lots of tomorrows.",
      level: 1,
    });
    this.welcomeHeading = page.getByRole('heading', {
      name: 'Welcome to ING.',
      level: 2,
    });
    this.productsHeading = page.getByRole('heading', {
      name: 'Discover ways to get the most out of your banking.',
      level: 2,
    });
    this.importantInformationHeading = page.getByRole('heading', {
      name: 'Important information',
      level: 2,
    });
    this.jointApplicationLink = this.header.getByRole('link', { name: 'Joint application' });
    // The site exposes a zero-size Login anchor; target its visible label instead.
    this.loginLabel = this.header.getByText('Login', { exact: true });
    this.bankAndSaveLink = this.header.getByRole('link', { name: 'Bank & Save', exact: true });
    this.creditCardsLink = this.header.getByRole('link', { name: 'Credit Cards', exact: true });
    this.personalLoansLink = this.header.getByRole('link', { name: 'Personal Loans', exact: true });
    this.homeLoansLink = this.header.getByRole('link', { name: 'Home Loans', exact: true });
    this.insuranceLink = this.header.getByRole('link', { name: 'Insurance', exact: true });
    this.superannuationLink = this.header.getByRole('link', { name: 'Superannuation', exact: true });
    this.businessLink = this.header.getByRole('link', { name: 'Business', exact: true });
    this.helpAndSupportLink = this.header.getByRole('link', {
      name: 'Help and support',
      exact: true,
    });
    this.readyToSwitchLink = this.header.getByRole('link', {
      name: 'Ready to switch?',
      exact: true,
    });
    this.compareCreditCardsLink = this.header.getByRole('link', {
      name: 'Compare All credit cards',
      exact: true,
    });
    this.personalLoanCalculatorLink = this.header.getByRole('link', {
      name: 'Personal loan borrowing power calculator',
      exact: true,
    });
    this.homeLoanCalculatorLink = this.header.getByRole('link', {
      name: 'Home loan borrowing power calculator',
      exact: true,
    });
    this.makeInsuranceClaimLink = this.header.getByRole('link', {
      name: 'Make a claim or manage my policy',
      exact: true,
    });
    this.livingSuperAccountsLink = this.header.getByRole('link', {
      name: 'Living Super accounts',
      exact: true,
    });
    this.businessCalculatorsLink = this.header.getByRole('link', {
      name: 'Business calculators',
      exact: true,
    });
    this.jointApplicationDialog = page.getByRole('alertdialog');
    this.jointApplicationDialogHeading = this.jointApplicationDialog.getByRole('heading', {
      name: 'Invited to a joint account?',
    });
    this.jointAccountCodeInput = this.jointApplicationDialog.getByRole('textbox', {
      name: 'Enter joint account code',
    });
    this.cancelJointApplicationButton = this.jointApplicationDialog.getByRole('button', {
      name: 'Cancel',
    });
  }

  async goto(): Promise<void> {
    await this.page.goto('https://www.ing.com.au/');
  }

  async openJointApplication(): Promise<void> {
    await this.jointApplicationLink.click();
  }

  async cancelJointApplication(): Promise<void> {
    await this.cancelJointApplicationButton.click();
  }

  async openLogin(): Promise<void> {
    await this.loginLabel.click();
  }

  async openBankAndSave(): Promise<void> {
    await this.bankAndSaveLink.click();
  }

  async openHelpAndSupport(): Promise<void> {
    await this.helpAndSupportLink.click();
  }

  async openPrimaryNavigationMenu(link: Locator): Promise<void> {
    await link.click();
  }

}
