import { test, expect } from '@playwright/test';

test('Playwright: Page Object Model Design', async ({ page }) => {
    test.setTimeout(60000);
    await page.goto('https://the-internet.herokuapp.com/login');
    await expect(page.locator('text=Login Form')).toBeVisible({ timeout: 6000 })

});


