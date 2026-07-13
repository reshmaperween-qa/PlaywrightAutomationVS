const { test } = require('@playwright/test');

test('Check OpenCart', async ({ page }) => {

    await page.goto('https://demo.opencart.com/en-gb');

    console.log(await page.title());

    await page.screenshot({ path: 'screenshots/opencart.png' });

});