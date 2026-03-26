import { test, expect } from '@playwright/test';
test('login test', async ({ page }) => {
  await page.goto('http://localhost:5173/login');
  await page.locator( 'input[type= "mail"]').fill('kalyan@90');
  await page.locator( 'input[type = "password"]').fill('kalyan@90');
  await page.locator('input[type = "submit"]').click();
  await expect(page).toHaveURL(/localhost:5173/);
});