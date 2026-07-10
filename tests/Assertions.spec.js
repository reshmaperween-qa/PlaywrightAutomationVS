const { test, expect }= require ('@playwright/test');
const { type } = require('os');

test('Assertions', async ({ page }) => {
  // to open url
  await page.goto('https://demo.nopcommerce.com/register');

// toHaveURL() - Check page has URL           
await expect(page).toHaveURL('https://demo.nopcommerce.com/register');

// toHaveTitle() - Check page has Tile
await expect(page).toHaveTitle('nopCommerce demo store. Register');

// expect(Locator) - to check Web element is visible or not 
const Logo=await page.locator('.header-logo');
await expect(Logo).toBeVisible();

// expect(Locator).ToBeEnabled() - controled is enabled
const SearchBox=await page.locator('//input[@id="small-searchterms"]');
await expect(SearchBox).toBeEnabled()

// toBeChecked() - to check radio button 
 const MaleRadiobutton=await page.locator('#gender-male')
 await MaleRadiobutton.click();
 await expect(MaleRadiobutton).toBeChecked();

 //check box
 const Newslettercheckbox=await page.locator('//input[@id="Newsletter"]')
 await expect(Newslettercheckbox).toBeChecked();

 // toHaveAttribute(name, value) element has attribute
 const regbutton=await page.locator('//button[@id="register-button"]')
 await expect(regbutton).toHaveAttribute('type','submit');

 // expect(locator).toHaveText() Element matches text 
 const Text=await page.locator('//div[@class="page-title"]')
 await expect(Text).toHaveText('Register');   // full value Register

 // expect(locator).toContainText() - Element matches text(note here we can also pass partial text value also, no need to pass full values)
 await expect(await page.locator('.page-title h1')).toContainText('Reg'); // partial value

 // toHaveValue(value)        - input has a value
  const emailInput= await page.locator('#Email')
  await emailInput.fill('test@demo.com');
  await expect(emailInput).toHaveValue('test@demo.com');

  // expect(locator).toHaveCount() - to verify list of element has given lenght or not
  await page.goto('https://demo.nopcommerce.com/customer/addressadd');
  const dropdown = await page.locator('//select[@id="Address_CountryId"]');
  await expect(dropdown).toHaveCount(250);
  console.log(dropdown);
  
});