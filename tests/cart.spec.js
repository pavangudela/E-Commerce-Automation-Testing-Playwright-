import { test, expect } from '@playwright/test'; 
import {LoginPage} from '../pages/LoginPage';
test('cart test', async ({ page }) => {
  const loginPage =new LoginPage(page);
  await page.goto('http://localhost:5173/login');
  await loginPage.login("kalyan@90","kalyan@90");
  await page.getByTestId('product-5').waitFor();
  await page.getByTestId('product-5').click();
  await expect(page).toHaveURL(/\/product\/\d+/);
  await page.getByText('Add to Cart').click();
  await expect(page.getByTestId('cart-count')).toHaveText('1');
});