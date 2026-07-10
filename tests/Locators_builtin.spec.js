//page.getByRole() to locate by explicit and implicit accessibility attributes.
//page.getByText() to locate by text content.
//page.getByLabel() to locate a form control by associated label's text.
//page.getByPlaceholder() to locate an input by placeholder.
//page.getByAltText() to locate an element, usually image, by its text alternative.

import {test, expect} from '@playwright/test';
test ( "Locators_builtin", async({page})=>{

//page.getByTitle() to locate an element by its title attribute.



await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

// page.getByAltText() - to locate an element, usally image, by its text alternative
 const logo= await page.getByAltText('company-branding')
 await expect(logo).toBeVisible();

 // page.getByPlaceHolder() - to locate an input by placeholder

await page.getByPlaceholder('username').fill("Admin");
await page.getByPlaceholder('password').fill("admin123");
await page.getByRole('button',{type:'submit'}).click();

// page.getByText()- to locate by text content.
const name=await page.locator('//p[@class="oxd-userdropdown-name"]').textContent();
await expect(await page.getByText(name)).toBeVisible();
})