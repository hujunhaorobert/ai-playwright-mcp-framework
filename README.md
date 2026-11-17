# ING Bank Playwright Automation Test Framework
   ING Bank Web App Automation Tests Framework using Playwright, POM, TypeScript, MCP & AI Agents (Planner, Generator, Healer).

   The AI Agents amplifies whatever the SDET already is. If the SDET is strong at fundamentals, the AI makes them stronger. If the SDET is weak at fundamentals, the AI ships weakness faster.

   Three habits SDET worth building:

    1. Read every diff. Every line of AI-generated code deserves the same review as human-written code.
    2. Distrust green builds from Healers. A test that suddenly passes after a Healer session is a suspect until proven otherwise.
    3. Codify your team rules once. Put them in AGENTS.md and the agent files. The AI will follow them. What you skip codifying, the AI will do its own way.
   
    The role of a SDET is not changing to "prompt writer." The role is changing to reviewer, guardrail, and architect. Those skills come from fundamentals, not from AI.

## How to run AI-generated tests
```
git clone this repo
cd ${project-root-folder}
npx playwright test --headed
```

## How to review AI-generated tests
This is the most important skill in AI-assisted testing. The code generation is easy. The review is where engineering judgment matters.

Use this checklist for every AI-generated PR:

1. Framework compliance

    - Imports come from your custom fixture file, not from @playwright/test directly
    - Page objects extend your base class
    - File lives in the correct folder
    - File name follows your naming convention

2. Locator quality   
   
    - getByRole used wherever possible
    - Falls back to getByLabel or getByTestId only when justified
    - No CSS selectors
    - No XPath
    - Locators would survive a common UI refactor

3. Assertion quality
   
    - Assertions test the actual feature, not just "page loaded"
    - Web-first assertions used (expect(locator).toBeVisible())
    - No waitForTimeout
    - Custom timeouts have code comments justifying them

4. Page Object compliance
   
    - Locators are readonly and declared in the constructor
    - Action methods return void or the next page object
    - No expect() calls inside page objects

5. Test independence
   
    - Test can run in isolation
    - Does not depend on execution order
    - Cleans up state it creates
    - Safe to run in parallel