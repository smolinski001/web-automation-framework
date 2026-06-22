# TEST PLAN — saucedemo.com + restful-booker API

---

## 1. Application Context

| Field            | Value                                |
| ---------------- | ------------------------------------ |
| Application Name | saucedemo.com + restful-booker       |
| URL (E2E)        | https://www.saucedemo.com            |
| URL (API)        | https://restful-booker.herokuapp.com |
| App Type         | web app / e-commerce demo + REST API |
| Primary User     | end-customer purchasing products     |
| Stack (known)    | no access to source code — black-box |
| Analysis Date    | 2026-06                              |

**Available test accounts:**

| Role          | Username        | Password     | Notes                   |
| ------------- | --------------- | ------------ | ----------------------- |
| Standard user | standard_user   | secret_sauce | Full access             |
| Locked user   | locked_out_user | secret_sauce | Locked — tests sad path |

**Known environment limitations:**

- saucedemo.com is a public demo app — no control over availability
- restful-booker.herokuapp.com may reset — tests do not assume data persistence
- No staging environment — tests run directly against demo

---

## 2. Test Case

### Feature: Login

**Happy Path**

| ID    | Description                  | Input Data                   | Expected Result             | Priority | Status |
| ----- | ---------------------------- | ---------------------------- | --------------------------- | -------- | ------ |
| TC-01 | Login with valid credentials | standard_user / secret_sauce | Redirect to /inventory.html | P1       | ✅     |

**Sad Paths**

| ID    | Description                    | Input Data                     | Expected Result                                | Priority | Status |
| ----- | ------------------------------ | ------------------------------ | ---------------------------------------------- | -------- | ------ |
| TC-02 | Login with locked account      | locked_out_user / secret_sauce | Error: "Sorry, this user has been locked out." | P1       | ✅     |
| TC-03 | Login with random invalid data | random / random                | Error: "Username and password do not match..." | P1       | ✅     |

**Edge Cases**

| ID    | Description               | Input Data         | Expected Result               | Priority | Status |
| ----- | ------------------------- | ------------------ | ----------------------------- | -------- | ------ |
| TC-04 | Login with empty username | "" / secret_sauce  | Error: "Username is required" | P2       | [ ]    |
| TC-05 | Login with empty password | standard_user / "" | Error: "Password is required" | P2       | [ ]    |

---

### Feature: Inventory (product list)

**Happy Path**

| ID    | Description                         | Input Data          | Expected Result              | Priority | Status |
| ----- | ----------------------------------- | ------------------- | ---------------------------- | -------- | ------ |
| TC-10 | Inventory page loads after login    | standard_user       | URL contains /inventory.html | P1       | ✅     |
| TC-11 | Displays correct number of products | —                   | 6 products visible           | P2       | ✅     |
| TC-12 | Add product to cart                 | Sauce Labs Backpack | Cart badge shows "1"         | P1       | ✅     |

**Sad Paths**

| ID    | Description                          | Input Data | Expected Result        | Priority | Status |
| ----- | ------------------------------------ | ---------- | ---------------------- | -------- | ------ |
| TC-13 | Access /inventory.html without login | no session | Redirect to login page | P1       | [ ]    |

---

### Feature: Checkout (order finalization)

**Happy Path**

| ID    | Description        | Input Data                            | Expected Result         | Priority | Status |
| ----- | ------------------ | ------------------------------------- | ----------------------- | -------- | ------ |
| TC-20 | Full purchase flow | Sauce Labs Bike Light + customer data | Order confirmation page | P1       | ✅     |

**Sad Paths**

| ID    | Description                 | Input Data             | Expected Result                  | Priority | Status |
| ----- | --------------------------- | ---------------------- | -------------------------------- | -------- | ------ |
| TC-21 | Checkout without first name | "" / Kowalski / 02-550 | Error: "First Name is required"  | P1       | [ ]    |
| TC-22 | Checkout without zip code   | Jan / Kowalski / ""    | Error: "Postal Code is required" | P2       | [ ]    |

---

### Feature: API — restful-booker

**Happy Path**

| ID   | Description                           | Input Data          | Expected Result           | Priority | Status |
| ---- | ------------------------------------- | ------------------- | ------------------------- | -------- | ------ |
| A-01 | GET /booking returns list of bookings | —                   | Status 200, array of IDs  | P1       | ✅     |
| A-02 | POST /auth returns token              | admin / password123 | Status 200, defined token | P1       | ✅     |

**Sad Paths**

| ID   | Description                           | Input Data            | Expected Result                     | Priority | Status |
| ---- | ------------------------------------- | --------------------- | ----------------------------------- | -------- | ------ |
| A-03 | POST /auth with wrong password        | admin / wrongpassword | Status 200, body: "Bad credentials" | P2       | [ ]    |
| A-04 | GET /booking/{id} for non-existent ID | id=999999             | Status 404                          | P2       | [ ]    |

---

## 3. Coverage — tracker

| Feature   | Total TC | Covered | Coverage % | P1 Covered? |
| --------- | -------- | ------- | ---------- | ----------- |
| Login     | 5        | 3       | 60%        | ✅          |
| Inventory | 4        | 3       | 75%        | ✅          |
| Checkout  | 3        | 1       | 33%        | ✅          |
| API       | 4        | 2       | 50%        | ✅          |
| **TOTAL** | **16**   | **9**   | **56%**    | **✅**      |
