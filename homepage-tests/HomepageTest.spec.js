const { test,expect } = require('@playwright/test');

test('Home Page', async ({ page })=> {
        await page.goto('https://demoblaze.com/index.html');

        const PageTitle = await page.title();
        console.log('Title of the page:', PageTitle);
        await expect(page).toHaveTitle('STORE');
      
        const PageURL = await page.url();
        console.log('URL of the page:', PageURL);
        await expect(page).toHaveURL('https://demoblaze.com/index.html');
      
        await page.close();
})