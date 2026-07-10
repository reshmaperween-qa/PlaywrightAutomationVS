import test, {page, expect} from ('@playwright/test')
test('AssertionsDemo', async({page}) => {
await page.goto('https://kitchen.applitools.com/')
await page.pause()

// Element present or not
await expect(page.locator('//h1[text()="The Kitchen"]')).toHaveCount(1)


if(await  page.$('//h1[text()="The Kitchen"]'))
{
    await page.locator('//h1[text()="The Kitchen"]').click()
    
}

// checkl element hidden or not visible
await expect(page.locator('//h1[text()="The Kitchen"]')).toBeVisible()
//await expect.soft(page.locator('//h1[text()="The Kitchen"]')).toBeHidden()
// check element enabled or disabled
await expect(page.locator('//h1[text()="The Kitchen"]')).toBeEnabled()
//await expect.soft(page.locator('//h1[text()="The Kitchen"]')).toBeDisabled()


// Check element has text or not
await expect(page.locator('//h1[text()="The Kitchen"]')).toHaveText('The Kitchen')
//await expect(page.locator('//h1[text()="The Kitchen"]')).not.toHaveText()
// Check attribute value 
await expect(page.locator('//h1[text()="The Kitchen"]')).toHaveAttribute('class',/.*css-dpmy2a/)

//check attribute class
await expect(page.locator('//h1[text()="The Kitchen"]')).toHaveClass(/.*css-dpmy2a/)
// Check URL
await expect(page).toHaveURL('https://kitchen.applitools.com/')
// Check Title
await expect(page).toHaveTitle(/.* Kitchen/)
// Check Screenshort
await expect(page).toHaveScreenshot()



})