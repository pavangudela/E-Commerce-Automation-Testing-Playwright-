import { test, expect } from '@playwright/test';
test('api test', async ({ request }) => {
  const res = await request.get('http://localhost:5173');
  expect(res.status()).toBe(200);
});