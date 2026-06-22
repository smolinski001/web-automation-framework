# Web Automation Framework

A production-style E2E and API test automation framework built with **Playwright** and **TypeScript**.

Designed to demonstrate SDET-level architecture: layered abstraction, typed API clients, dependency injection via fixtures, and CI/CD integration.

![CI](https://github.com/smolinski001/web-automation-framework/actions/workflows/playwright.yml/badge.svg)

---

## Tech Stack

| Tool                                  | Purpose                          |
| ------------------------------------- | -------------------------------- |
| [Playwright](https://playwright.dev/) | Browser automation & test runner |
| TypeScript                            | Type-safe test code              |
| GitHub Actions                        | CI/CD pipeline                   |
| dotenv                                | Local environment configuration  |

**Test targets:**

- [saucedemo.com](https://www.saucedemo.com) — E2E UI tests
- [restful-booker.herokuapp.com](https://restful-booker.herokuapp.com) — API tests

---

## Architecture

```
web-automation-framework/
├── framework/
│   ├── pages/       # Page Object Model — selectors & page actions
│   ├── flows/       # Flow Layer — multi-step business scenarios
│   ├── fixtures/    # Dependency injection via base.extend()
│   ├── api/
│   │   ├── clients/ # Typed REST clients
│   │   └── dto/     # Request / response interfaces
│   └── data/        # Test users and static data
├── tests/
│   ├── login/
│   ├── inventory/
│   ├── finish/
│   └── api/
├── docs/
│   ├── TEST_PLAN.md
│   └── ADR.md
└── playwright.config.ts
```

---

## Setup

Clone repositories:

```bash
git clone https://github.com/smolinski001/web-automation-framework.git
cd web-automation-framework
npm install
npx playwright install
```

Run tests:

```bash
npm test                  # all tests
npm run test:chrome       # Chrome only
npm run test:headed       # visible browser
npm run report            # open HTML report
```

---

## Documentation

- [`docs/TEST_PLAN.md`](docs/TEST_PLAN.md) — test strategy and test cases
- [`docs/ADR.md`](docs/ADR.md) — architecture decisions and rationale
