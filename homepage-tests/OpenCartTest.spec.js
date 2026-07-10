const { test, expect } = require('@playwright/test');

test('OpenCart Home Page', async ({ page }) => {
  // Navigate to the OpenCart demo site
  await page.goto('https://demo.opencart.com', { waitUntil: 'domcontentloaded' });

  // Wait for a specific element to ensure the page is fully loaded
  await page.waitForSelector('div#logo img'); // Wait for the logo to appear

  // Get the page title
  const pageTitle = await page.title();
  console.log('Title of the page:', pageTitle);

  // Verify the page title
  await expect(page).toHaveTitle('Your Store');
});