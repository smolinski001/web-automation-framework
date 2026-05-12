# Playwright-lab

A project for learning to write an automated testing framework using Playwright and Typescript.

# Stack

- Playwright
- TypeScript
- Node.js
- dotenv

# Setup

1. Clone repository.
2. Install dependencies.
3. Install Playwright browsers.
4. Create local `.env` file based on `.env.example`.

Required variables:

- BASE_URL
- USER_STANDARD
- USER_LOCKED
- USER_PASSWORD

# Running tests

Run all tests:
npm test

Run tests in Chrome only:
npm run test:chrome

Open Playwright report:
npm run report

# Current status

- Framework divided into fixtures, flows, pages, data, and separate tests.
- Tests divided into the login process, adding products to the cart, and basic API tests.
