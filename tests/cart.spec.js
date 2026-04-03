import { test, expect, request } from '@playwright/test'; 
import {LoginPage} from '../pages/LoginPage';
import { createApiContext } from '../utils/apiClient';
test('cart test', async ({ page }) => {

  const loginPage =new LoginPage(page);

  await page.goto('/login');
  await loginPage.login("kalyan@90","kalyan@90");
   await expect(page).toHaveURL(/localhost:5173/); 
   await page.waitForFunction(() => localStorage.getItem('token') !== null);
     const token =await page.evaluate(()=>localStorage.getItem('token'))
      
       console.log("token :",token) 
        const api =await createApiContext(request,token) 
   const response=await api.delete('cart');
     console.log( "response" , await response.text());
  expect(response.status()).toBe(200);

  await page.getByTestId('product-5').waitFor();
  await page.getByTestId('product-5').click();
  await expect(page).toHaveURL(/\/product\/\d+/);
  await page.getByText('Add to Cart').click();
   await page.getByTestId('cart-count').textContent().then((count)=>console.log(count));
  await expect(page.getByTestId('cart-count')).toHaveText('1');
  
  await page.getByTestId('cart-count').click();
  await page.getByRole("button").last().click();

  await page.locator('label:has-text("Cash On Delivery")').click();
  await  expect(page.locator('input[value="COD"]')).toBeChecked();
  await page.getByRole('button',{name:/proceed to payment/i}).click();

});