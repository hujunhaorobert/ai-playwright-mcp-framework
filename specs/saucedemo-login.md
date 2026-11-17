# SauceDemo Login Flow Test Plan

## Application Overview

Validate the SauceDemo login form at https://www.saucedemo.com/ for successful login, a locked account, required-field validation, and invalid credentials. Each scenario starts independently from a fresh login page. Use secret_sauce as the password wherever the scenario calls for one; the invalid-credentials scenario uses an unrecognized username (invalid_user). The supplied user data is tests/data/users.json.

## Test Scenarios

### 1. Login flow

**Seed:** `tests/data/users.json`

#### 1.1. standard_user logs in successfully

**File:** `tests/login/login-flow.spec.ts`

**Steps:**
  1. Start from a fresh visit to https://www.saucedemo.com/ with no credentials entered.
    - expect: The Swag Labs login form is displayed with Username, Password, and Login controls.
  2. Enter standard_user in the Username field and secret_sauce in the Password field.
    - expect: The entered credentials are present in their respective fields.
  3. Click Login.
    - expect: The browser navigates to /inventory.html.
    - expect: The Products page heading is visible and the inventory product list is displayed.
    - expect: No login error is shown.

#### 1.2. locked_out_user is rejected with a locked account error

**File:** `tests/login/login-flow.spec.ts`

**Steps:**
  1. Start from a fresh visit to https://www.saucedemo.com/ with no credentials entered.
    - expect: The Swag Labs login form is displayed.
  2. Enter locked_out_user in the Username field and secret_sauce in the Password field.
    - expect: The entered credentials are present in their respective fields.
  3. Click Login.
    - expect: The user remains on the login page.
    - expect: An error alert displays: Epic sadface: Sorry, this user has been locked out.
    - expect: The inventory page is not displayed.

#### 1.3. Empty username is rejected

**File:** `tests/login/login-flow.spec.ts`

**Steps:**
  1. Start from a fresh visit to https://www.saucedemo.com/ with no credentials entered.
    - expect: The Username and Password fields are empty.
  2. Leave Username empty and enter secret_sauce in the Password field.
    - expect: Username remains empty and Password contains secret_sauce.
  3. Click Login.
    - expect: The user remains on the login page.
    - expect: An error alert displays: Epic sadface: Username is required.
    - expect: The inventory page is not displayed.

#### 1.4. Empty password is rejected

**File:** `tests/login/login-flow.spec.ts`

**Steps:**
  1. Start from a fresh visit to https://www.saucedemo.com/ with no credentials entered.
    - expect: The Username and Password fields are empty.
  2. Enter standard_user in the Username field and leave Password empty.
    - expect: Username contains standard_user and Password remains empty.
  3. Click Login.
    - expect: The user remains on the login page.
    - expect: An error alert displays: Epic sadface: Password is required.
    - expect: The inventory page is not displayed.

#### 1.5. Invalid credentials are rejected

**File:** `tests/login/login-flow.spec.ts`

**Steps:**
  1. Start from a fresh visit to https://www.saucedemo.com/ with no credentials entered.
    - expect: The Swag Labs login form is displayed.
  2. Enter invalid_user in the Username field and secret_sauce in the Password field.
    - expect: The entered credentials are present in their respective fields.
  3. Click Login.
    - expect: The user remains on the login page.
    - expect: An error alert displays: Epic sadface: Username and password do not match any user in this service.
    - expect: The inventory page is not displayed.
