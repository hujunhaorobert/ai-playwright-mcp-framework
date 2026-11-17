# ING Homepage Test Plan

**Application:** [ING global website](https://www.ing.com/)  
**Page title observed:** `ING global company website | ING`  
**Scope:** Public homepage content, navigation, cookie consent, homepage modules, and responsive/accessibility behavior.  
**Plan basis:** Live browser inspection of the homepage. News, press releases, events, share prices, and location options are dynamic; assert meaningful structure and valid behavior rather than fixed values or ordering.

## Test data and setup

- Start each independent scenario at `https://www.ing.com/` in a clean browser context.
- For cookie scenarios, use a fresh context or clear site cookies/storage so the consent dialog is shown.
- For scenarios not testing consent, dismiss the dialog with **Reject** or use a previously selected preference; do not make a test depend on accepting optional cookies.
- Wait for page navigation and locator-based content readiness; do not use fixed sleeps.
- External content (market data, news, press releases, events, media) may update or be temporarily unavailable. Record service failures separately from homepage layout failures.

## Scenarios

### 1. Initial page load and cookie consent

#### 1.1 Homepage loads with cookie choices

1. Navigate to the homepage in a clean context.
2. Verify the page title and primary navigation are present.
3. Verify the cookie dialog is displayed with its explanatory text and **Choose**, **Reject**, and **Accept** options.
4. Verify the cookie statement link opens the cookie statement page.

**Expected:** The homepage renders, and consent choices are available before optional-cookie consent is assumed.

#### 1.2 Reject non-essential cookies

1. Open the homepage in a clean context.
2. Select **Reject**.
3. Verify the cookie dialog closes and homepage content is usable.
4. Reload the page in the same context.

**Expected:** The preference is retained for the session/context and the consent dialog does not immediately reappear. Only essential cookies are enabled, as described in the dialog.

#### 1.3 Accept cookies

1. Open the homepage in a clean context.
2. Select **Accept**.
3. Verify the dialog closes and the homepage remains usable after reload.

**Expected:** The selection is saved and the consent dialog is not shown again in that context.

#### 1.4 Configure cookie preferences

1. Open the homepage in a clean context.
2. Select **Choose**.
3. Verify the preference controls are displayed.
4. Change an optional-cookie preference and save the selection.
5. Reopen or revisit the preference interface.

**Expected:** The preference interface allows customization, saves the selected options, and reflects the saved selection. Verify the exact controls and save label against the live dialog before automating.

### 2. Header and navigation

#### 2.1 Header branding and primary navigation

1. Dismiss cookie consent.
2. Verify the ING.com logo is visible and links to the homepage.
3. Verify the primary navigation includes **About us**, **Sustainability**, **Investors**, **Newsroom**, and **Careers**.
4. Activate each top-level item using pointer and keyboard interaction.

**Expected:** Each item opens or navigates to its associated destination without layout errors; the current page or menu state is identifiable to assistive technology.

#### 2.2 Site search open and close

1. Select **Search** in the header.
2. Verify the site-search interface and a textbox named **Search** appear.
3. Close the search interface using **Close search bar**.
4. Reopen it and close it with the keyboard (Escape, if supported).

**Expected:** Search opens and closes reliably; focus moves into the search field when opened and returns to a sensible location when closed.

#### 2.3 Site search query

1. Open site search.
2. Enter a known term such as `investors`.
3. Submit the query using the available search control or Enter.
4. Inspect the results page and open a result.

**Expected:** A query produces relevant results or a clear empty-results state; result links navigate successfully. Do not assert exact ranking or volatile result counts.

#### 2.4 Global location selector

1. Select **ING Global** in the header.
2. Verify a dialog titled **Where do you want to go?** appears.
3. Verify the dialog contains the **All locations** and **Topic sites** sections and available location/topic links.
4. Close the dialog using **Close global popup**.
5. Reopen and close it with the keyboard (Escape, if supported).

**Expected:** The selector opens as a dialog, provides destination links, and can be dismissed without navigating. Verify the dynamic location list after it finishes loading.

#### 2.5 Header navigation menus

1. Open each primary navigation item.
2. Verify its menu content or destination is displayed.
3. Follow a representative link from each menu and verify the destination loads.
4. Return to the homepage and repeat for the remaining items.

**Expected:** Menus and destinations correspond to their labels and remain operable using keyboard navigation. Capture the live menu contents before finalizing detailed link assertions.

### 3. Homepage hero and content

#### 3.1 Hero content and primary call to action

1. Dismiss cookie consent.
2. Verify the hero heading **The bank that helps get Europe invested.**
3. Verify the supporting heading about Europe’s savings and investment.
4. Verify the hero image has meaningful alternative text.
5. Select **Get Europe invested**.

**Expected:** The CTA navigates to `/about-us/customers/get-europe-invested`; the target page loads successfully.

#### 3.2 News carousel

1. Locate the **News** section.
2. Verify at least one news article is displayed with its headline and link.
3. Select **Next article** and verify the displayed article changes.
4. Select **Previous article** and verify navigation back to the prior article.
5. Exercise the carousel boundary if the control indicates a first/last item.

**Expected:** Controls change the visible article in the expected direction, do not produce duplicate or blank content, and provide understandable accessible names. Do not require specific article titles or order.

#### 3.3 Purpose statement

1. Locate the homepage purpose statement.
2. Verify the full statement is visible and readable.

**Expected:** The statement is present as meaningful heading content and does not overlap adjacent sections.

#### 3.4 Share listings and market data

1. Locate **ING's share listings**.
2. Verify the descriptive text identifies Euronext Amsterdam (AEX) and the New York Stock Exchange (NYSE).
3. Verify the AEX and NYSE market-data areas load their labels and values when available.
4. Verify the displayed data-delay notice.
5. Select **Share performance**.

**Expected:** Both listings are identifiable, the delay is disclosed, and the link navigates to `/investors/share-information/share-performance`. Do not assert specific prices, percentages, or timestamps.

#### 3.5 Press releases carousel

1. Locate the **Press releases** section.
2. Verify press-release cards have readable headlines and links.
3. Use **Next article** and **Previous article**.
4. Open a representative press-release link and return to the homepage.

**Expected:** The carousel changes content in the correct direction and article links resolve. Assert structure and link behavior rather than fixed article content.

#### 3.6 Homepage feature cards

1. Locate the cards **We're a global bank with a strong European base**, **Your needs**, and **Climate action**.
2. Verify each card’s image has appropriate alternative text and its copy is readable.
3. Select **ING at a glance** and verify it navigates to `/about-us/ing-at-a-glance`.
4. Select **Our climate approach** and verify it navigates to `/sustainability/climate-action/our-climate-approach`.
5. Verify the **Your needs** card renders without broken or misleading link controls.

**Expected:** Cards render with coherent image, heading, and descriptive text; links navigate to their corresponding pages.

#### 3.7 Upcoming events

1. Locate **Upcoming events**.
2. Verify event cards display dates and event details when the feed is available.
3. Select a representative event link, if provided.

**Expected:** Event information is readable and any event links work. Dates and event listings may change; do not assert specific dates or event names.

#### 3.8 Quick links

1. Locate **Quick links**.
2. Verify links are present for event calendar, debt securities, dividend policy, board information, supervisory board, and annual reports.
3. Open representative links and verify the destination corresponds to its label.

**Expected:** Quick links are descriptive, keyboard accessible, and navigate to the correct investor/about-us pages.

### 4. Footer

#### 4.1 Footer navigation and legal links

1. Scroll to the footer.
2. Verify the footer logo and navigation groups **Go to**, **Stay up to date**, and **Follow us**.
3. Verify the **Legal links** region is present.
4. Follow a representative footer and legal link, then return to the homepage.

**Expected:** Footer groups are accessible, links have meaningful names and valid destinations, and navigating from the footer works.

#### 4.2 Footer global selector

1. Scroll to the footer.
2. Select **ING Global**.
3. Verify the global-location dialog opens and can be dismissed.

**Expected:** The footer selector behaves consistently with the header selector.

### 5. Responsive, accessibility, and resilience

#### 5.1 Responsive homepage layout

1. Load the homepage at desktop width.
2. Repeat at tablet and narrow mobile widths.
3. Check header/navigation, hero, carousels, market listings, cards, events, quick links, and footer.
4. Operate navigation and carousel controls at each width.

**Expected:** Content reflows without horizontal overflow, clipped controls, overlap, or inaccessible navigation. Content may stack or collapse according to the responsive design.

#### 5.2 Keyboard-only navigation

1. Reload the homepage and use Tab/Shift+Tab without a pointer.
2. Operate the cookie choices, header menus, search, global selector, carousel controls, links, and footer controls.
3. Use Enter/Space to activate controls and Escape to dismiss overlays where supported.

**Expected:** Focus is visible, the focus order is logical, interactive elements are keyboard operable, and overlays do not trap focus incorrectly.

#### 5.3 Accessible names, headings, and images

1. Inspect the page with an accessibility tree or screen reader.
2. Verify a meaningful document title, logical heading hierarchy, named navigation landmarks, and descriptive accessible names for buttons and links.
3. Verify informational images have useful alternative text and decorative images are ignored by assistive technology.

**Expected:** Major page regions and controls can be understood without relying on visual styling or icon glyphs alone.

#### 5.4 Dynamic content and failed third-party modules

1. Load the homepage with external content available.
2. Verify news, press releases, event listings, and market-data areas render.
3. Repeat with a controlled failure/block of an external module where test tooling permits.

**Expected:** A failing external module does not prevent the rest of the homepage from rendering or operating. Missing data should not be presented as valid market information; record the affected module separately.

#### 5.5 Browser console and navigation errors

1. Load the page and exercise representative header, hero, carousel, quick-link, and footer interactions.
2. Review browser console errors and failed navigation requests.

**Expected:** No uncaught application errors or broken first-party navigation. Third-party analytics or media failures should be distinguished from first-party defects.
