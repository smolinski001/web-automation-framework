import { test, expect } from "@fixtures/base";

test("Testing API", async ({ request }) => {
  const response = await request.get(`${process.env.API_BASE_URL!}/booking`);
  expect(response.status()).toBe(200);

  const body = await response.json();
  expect(Array.isArray(body)).toBe(true);
  expect(body.length).toBeGreaterThan(0);
});

test("single ID", async ({ request }) => {
  const response = await request.get(`${process.env.API_BASE_URL!}/booking/`);
  expect(response.status()).toBe(200);

  const body = await response.json();
  expect(body.firstname).toBeDefined();
});

test("Testing POST", async ({ request }) => {
  const response = await request.post(`${process.env.API_BASE_URL!}/auth`, {
    data: { username: "admin", password: "password123" },
  });
  expect(response.status()).toBe(200);

  const body = await response.json();
  expect(body.token).toBeDefined();
});
