import { test, expect } from '@playwright/test';
test('api test', async ({ request }) => {
  const res = await request.get('http://localhost:8080/api/products');
  expect(res.status()).toBe(200);
});