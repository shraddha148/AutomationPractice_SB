import { test, expect } from '@playwright/test';

test('Check Playwright website', async ({ page }) => {
    await page.goto('data:text/html,<title>Playwright</title><h1>Playwright</h1>', {
        waitUntil: 'domcontentloaded',
        timeout: 30000
    });

    await expect(page).toHaveTitle(/Playwright/);
});