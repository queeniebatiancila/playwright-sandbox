import { test, expect } from '@playwright/test';

test('Playwright: Login Demo 1', async ({ page }) => {
  
    await page.goto('https://kitchen.applitools.com/');
    await expect(page.locator('text=The Kitchen')).toBeVisible({timeout: 6000})

    //check if element is present or not
    await expect(page.locator('text=The Kitchen')).toHaveCount(1)
    if( await page.$('text=The Kitchen')){  //condition if-block
        await page.locator('text=The Kitchen').click();
    }

    //check if element is hidden or visible
    await expect(page.locator('text=The Kitchen')).toBeVisible()
    //await expect.soft(page.locator('text=The Kitchen')).toBeHidden()

    //check if element is enabled or disabled
    await expect(page.locator('text=The Kitchen')).toBeEnabled()

    await expect(page.locator('text=The Kitchen')).toHaveText('The Kitchen')
    //await expect(page.locator('text=The Kitchen')).not.toHaveText('The Kitchen')

    await expect(page.locator('text=The Kitchen')).toHaveAttribute('class', /.*css-dpmy2a/)
    await expect(page.locator('text=The Kitchen')).toHaveClass(/.*css-dpmy2a/)

    await expect(page).toHaveURL('https://kitchen.applitools.com/')
    await expect(page).toHaveTitle(/.*Kitchen/)

    //await expect(page).toHaveScreenshot()
    //await page.pause();

});