import test, {page, expect} from ('@playwright/test')
test("Soft Assertion", async({page})=>{

await page.goto("https://demoblaze.com/index.html")
await page.pause()
    //Hard Asserssertion
    await expect(page).toHaveTitle('STORE')
    await expect(page).toHaveURL("https://demoblaze.com/index.html")
   // To check element on page 'navbar-brand' visible or not
    await expect(page.locator('navbar-brand')).toBeVisible();
    




})