import { test, expect } from '@playwright/test';

test.skip('Skip the test', async ({ page }) => {
    // Test will be skipped
});

test('Not yet ready', async ({ page }) => {
    test.fail();
    // Will mark test as failure, will show error if test does not fail
});

test.fixme('Test to be fixed', async ({ page }) => {
});

test('Slow test', async ({ page }) => {
    test.slow()
});

//test.only('Focus this test', async ({ page }) => {
    // Run only focused tests in the entire project
//});

test('Test login page @smoke', async ({ page }) => {
    // Run only focused tests in the entire project
});


// You can tag your tests with tags like
// @smoke
// @sanity
// @fast  @slow 
// and only run the tests that have the certain tag

// test('Test full report @smoke, async ({ page }) =＞ {
//    // ...
// });

// npx playwright test --grep “@smoke”

// Opposite of grep  Skip tests with certain tag
// npx playwright test --grep-invert “@smoke”
