# ING Australia Homepage Test Plan

**Application:** [ING Australia](https://www.ing.com.au/)  
**Page title observed:** `ING Australia, Bank Accounts, Credit Cards, Loans & Insurance`  
**Scope:** Public homepage layout, product promotion, navigation, help/search, joint-account invitation dialog, links, footer, and responsive/accessibility behavior.  
**Plan basis:** Live browser inspection. Product rates, offers, and content can change; verify that content is coherent and properly qualified rather than asserting fixed values. No cookie-consent dialog was shown during inspection.

## Test setup and data

- Start independent scenarios at `https://www.ing.com.au/` in a fresh browser context.
- Do not enter real customer credentials, account numbers, or valid joint-account codes.
- Use non-sensitive terms for help/search scenarios; avoid asserting fixed result ranking or counts.
- Wait for visible content and navigation using locator-based readiness, not fixed sleeps.
- Treat third-party app-store destinations and dynamic promotional content as external dependencies.
- Record browser console errors and failed requests. Separate first-party application failures from analytics, media, or other third-party failures.

## Scenarios

### 1. Homepage load and global header

#### 1.1 Load the homepage

1. Navigate to the homepage.
2. Verify the page title and ING logo.
3. Verify the main content renders, including the savings hero, welcome section, product promotion, and footer.
4. Verify the page remains usable while content below the fold loads.

**Expected:** The homepage loads at the expected URL, has a meaningful title, and displays its main content without blocking overlays or broken layout.

#### 1.2 Header links and product navigation

1. Verify header links for **Joint application** and **Login**.
2. Verify the primary navigation is present and its menu items are keyboard accessible.
3. Open each primary navigation menu and inspect its links.
4. Follow representative product/help links, then return to the homepage.

**Expected:** Header controls have descriptive names and working destinations. Navigation menus open and close correctly, and the links correspond to their labels. Capture the live menu labels before automating exact menu assertions.

#### 1.3 Logo navigation

1. Navigate to a linked homepage destination.
2. Select the ING logo.

**Expected:** The logo returns to the ING Australia homepage.

#### 1.4 Share control

1. Locate and activate **Share this**.
2. Verify the share options or share dialog are shown.
3. Dismiss the share interface without leaving the homepage.

**Expected:** The share control offers usable share actions and can be dismissed. If browser/device sharing is unavailable, the page should fail gracefully.

### 2. Savings hero and welcome section

#### 2.1 Savings hero promotion

1. Verify the hero heading **Save like there's lots of tomorrows.**
2. Verify promotional copy, including the variable-rate and eligibility/criteria qualifications.
3. Select **Find out more** in the hero.

**Expected:** The hero is readable and the CTA navigates to the Savings Booster destination. Do not assert the observed rate, offer duration, or cap as permanent values.

#### 2.2 Welcome section and banking products

1. Locate **Welcome to ING.** and its supporting copy.
2. Verify the **Banking products** navigation within the section.
3. Select each available product option and verify it updates or navigates to the selected product.
4. Return to the homepage and repeat for the other available options.

**Expected:** Product choices are visible, their selected state is clear, and each option leads to the correct content. Validate exact options and interaction style against the current page before implementation.

#### 2.3 Everyday banking feature

1. Locate the **Everyday banking** feature and the heading **Banking that fits your life.**
2. Verify the descriptive text and **Learn more about Everyday banking** affordance.
3. Select the feature.

**Expected:** The feature is operable and navigates to `/everyday-banking.html`.

### 3. Product and service promotions

#### 3.1 Product discovery cards

1. Locate the **Products** section and its introductory heading.
2. Verify cards/links for savings, credit cards, personal loans, and home loans.
3. Open each product link and verify the corresponding product page loads.
4. Return to the homepage after each navigation.

**Expected:** Each card has readable descriptive content, a meaningful link name, and a destination matching the represented product.

#### 3.2 Business Term Deposit promotion

1. Verify the **Business Term Deposit** label and **Get your surplus funds working.** heading.
2. Verify the terms describing business/SMSF deposits, amounts, and term range are present.
3. Select **Find out more**.

**Expected:** The promotion links to `/business/term-deposit.html`. Verify amounts and terms are displayed as current content, not hard-coded test constants.

#### 3.3 Insurance options

1. Locate the **Insurance** section and its heading.
2. Verify available insurance cards and their content.
3. Navigate through any carousel controls, if present.
4. Select **View all insurances options**.

**Expected:** Insurance content is readable, carousel controls (if present) change the visible item, and the link navigates to `/insurance.html`.

#### 3.4 Mobile banking app promotion

1. Locate **Your bank in your pocket.**
2. Verify the supporting copy about accounts, payments, and banking tools.
3. Verify the App Store and Google Play links and their accessible names.
4. Check each link’s destination without installing the app.

**Expected:** Both app-store links point to the appropriate ING Australia banking app listing. Do not download or install applications as part of this test.

#### 3.5 Remaining homepage promotion/content module

1. Inspect the final homepage content module before the footer.
2. Verify its heading, descriptive content, image/media, and controls or links.
3. Exercise any visible carousel or navigation controls.

**Expected:** The module renders and its controls work. Record exact content and control labels from the live page before writing selectors, as this module’s accessible content was not fully exposed in the initial snapshot.

### 4. Help and support

#### 4.1 Open and close help panel

1. Select **Can we help?**
2. Verify a panel appears with the heading **How can we help?**
3. Verify the **Search item...** field, **Popular searches**, and contact guidance are displayed.
4. Close the panel using **Close**.

**Expected:** The panel opens, exposes its key content, and closes without navigating away or leaving the page in an unusable state.

#### 4.2 Search help topics

1. Open the help panel.
2. Enter a non-sensitive query in **Search item...**.
3. Select a relevant suggestion or result if one appears.
4. Repeat with a query that should not match.

**Expected:** Matching help content or suggestions are presented for relevant queries; an unmatched query receives a clear empty state. Search results should not expose customer information.

#### 4.3 Popular searches

1. Open the help panel.
2. Verify a list of popular help questions is displayed.
3. Select a representative question.

**Expected:** The question opens a relevant help answer or destination. Do not require the exact current question list to remain unchanged.

#### 4.4 Contact guidance

1. Open the help panel.
2. Locate **If you can't find your answer, contact us:** and the **Message us** guidance.
3. Verify the instructions are readable and do not imply that unauthenticated users can access protected banking messages.

**Expected:** Contact guidance is visible, accurate, and does not expose a path into another customer's banking session.

### 5. Joint application and login entry points

#### 5.1 Joint-account invitation dialog

1. Select **Joint application**.
2. Verify the dialog heading **Invited to a joint account?**
3. Verify the **Enter joint account code** textbox and **Submit** and **Cancel** buttons.
4. Select **Cancel**.

**Expected:** The dialog opens and Cancel closes it without changing page location or submitting data.

#### 5.2 Empty or invalid invitation code

1. Open the joint-account invitation dialog.
2. Submit the form with the code field empty.
3. Verify any required-field feedback.
4. Enter a deliberately invalid, non-sensitive code and submit.

**Expected:** Empty and invalid codes do not produce success or expose account information. Errors are clear and allow correction. Never use a real invitation code.

#### 5.3 Login link

1. Select **Login**.
2. Verify navigation to the secure-banking entry page.
3. Verify the secure page loads over HTTPS.

**Expected:** The link opens the intended secure-banking destination. Do not enter credentials or test authentication as part of homepage coverage.

### 6. Footer and important information

#### 6.1 Important information

1. Scroll to **Important information**.
2. Verify the section and its disclosures render and can be read.
3. Verify disclosure links, if present, open their expected destinations.

**Expected:** Important product/legal information is not clipped or hidden behind other content.

#### 6.2 Footer links

1. Verify footer links for **Help and Support**, **Tools and Calculators**, and **Rates and Fees**.
2. Verify the **Connect with Us** and **Download the app** areas.
3. Verify the corporate links for **About Us**, **Contact Us**, **Careers**, **Security**, **Privacy**, **Legal**, and **Site Map**.
4. Open representative links and verify navigation.

**Expected:** Footer links are descriptive, operable, and point to the appropriate destinations.

#### 6.3 Australian legal identity and acknowledgment

1. Verify the footer contains ING Bank (Australia) Limited business/legal identification.
2. Verify the Traditional Custodians acknowledgment is displayed.
3. Select **Reconciliation Action Plan**.

**Expected:** Legal/acknowledgment text is readable and the plan link opens the intended PDF destination.

### 7. Responsive behavior, accessibility, and resilience

#### 7.1 Responsive layout

1. Inspect the homepage at desktop, tablet, and narrow mobile widths.
2. Check header/navigation, hero, product cards, insurance module, app promotion, help panel, and footer.
3. Operate interactive controls at each width.

**Expected:** Content reflows without horizontal overflow, clipped controls, or overlapping text. Mobile navigation and overlays remain operable.

#### 7.2 Keyboard-only operation

1. Use Tab/Shift+Tab to traverse the page.
2. Open and close navigation menus, help panel, share interface, and joint-application dialog using the keyboard.
3. Operate links and controls using Enter/Space; use Escape to dismiss overlays if supported.

**Expected:** Focus is visible and logical, controls are keyboard operable, and dialogs do not lose or improperly trap focus.

#### 7.3 Accessibility semantics

1. Inspect the accessibility tree.
2. Verify page title, one clear primary heading, logical section headings, navigation/main/footer landmarks, and accessible names for interactive controls.
3. Verify informative images have useful alternative text and decorative images do not add redundant announcements.
4. Check that the two app-store links have distinguishable accessible names.

**Expected:** Assistive technologies can identify page regions and controls without relying on visual styling or icon-only labels.

#### 7.4 Dynamic content and service failures

1. Verify promotional content and product links when services are available.
2. Where test tooling permits, simulate an external media/content failure.
3. Verify the rest of the homepage remains usable and unavailable content is not represented as a successful result.

**Expected:** A failed external module does not prevent unrelated page sections from rendering. Dynamic offers are treated as changing content.

#### 7.5 Console and failed-request review

1. Load the homepage and exercise representative header, help, product, and footer controls.
2. Review console errors and failed requests.
3. Classify each error as first-party, third-party, or test-environment related.

**Expected:** No uncaught first-party application errors or broken first-party navigation. Investigate console errors rather than treating an existing browser-console baseline as a passing result.
