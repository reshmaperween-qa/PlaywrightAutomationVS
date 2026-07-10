//const {test, expect } = require("@playwright/test");

import{test, expect} from '@playwright/test';
test ('Locators', async ({page})=>{

await page.goto("https://demoblaze.com/index.html");
//Click on login button  -Using property 
//await page.locator('id=login2').click()
await page.click('id=login2')

//provide username -Using CSS
//await page.fill('#loginusername','Reshma')
 //await page.locator('#loginusername').fill ("Reshma");
 await page.fill('#loginusername','Reshma')

 //Provided password using css tag name along with attribute  combination if you want to class name you can also use class (.)
 await page.fill("input[id='loginpassword']", 'test@ 123')

// Click on login button using xpath
await page.click("//button[normalize-space()='Log in']")

// verify logout link presence using xpath
const LogoutLink = await page.locator("(//a[normalize-space()='Log out'])");
LogoutLink.click();
await expect(LogoutLink).toBeVisible();


//closing browser
  await page.close(); 
});