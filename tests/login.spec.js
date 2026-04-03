import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
test('login test', async ({ page }) => {
const loginPage =new LoginPage(page);
  await page.goto('/login');
  await loginPage.login("kalyan@90","kalyan@90");
   await expect(page).toHaveURL(/localhost:5173/);
});