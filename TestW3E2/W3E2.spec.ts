import { test, expect } from '@playwright/test';

test('Validate Contact Us button', async ({ page }) => {

  await page.goto('https://www.unosquare.com/');
  
  const contactButton = page.locator('.nav-cta').first();
  await expect(contactButton).toBeVisible();

  const heading = page.locator('p.text-blue-300');
  await expect(heading).toBeVisible();

}); 
