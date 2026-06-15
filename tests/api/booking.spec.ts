import { test, expect } from "@fixtures/base";

test("should return list of bookings", async ({ bookingClient }) => {
  const response = await bookingClient.getBookingId();
  expect(response.status()).toBe(200);

  const body = await response.json();
  expect(Array.isArray(body)).toBe(true);
  expect(body.length).toBeGreaterThan(0);
});

test("should return token for valid credentials", async ({ bookingClient }) => {
  const response = await bookingClient.createToken("admin", "password123");
  expect(response.status()).toBe(200);

  const body = await response.json();
  expect(body.token).toBeDefined();
});
