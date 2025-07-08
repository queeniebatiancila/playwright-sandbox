import { test, expect } from '@playwright/test';

test('Playwright: Login Demo 1', async ({ page }) => {
    test.setTimeout(60000);
    await page.goto('https://demo.applitools.com');
    await expect(page.locator('text=Login Form')).toBeVisible({ timeout: 6000 })

    await page.getByRole('textbox', { name: 'Enter your username' }).click();
    await page.getByRole('textbox', { name: 'Enter your username' }).fill('maevemillay');
    await page.getByRole('textbox', { name: 'Enter your password' }).click();
    await page.getByRole('textbox', { name: 'Enter your password' }).fill('12345');
    await page.getByRole('link', { name: 'Sign in' }).click();
    await page.waitForSelector('text=ACME', { timeout: 3000 })
    await expect(page.locator('text=ACME')).toHaveClass('logo-label')
    // await page.pause();

});