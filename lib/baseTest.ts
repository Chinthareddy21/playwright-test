import { googlePage } from "./pageFactory/pageRepository/googlePage";
import { test as baseTest } from '@playwright/test';

const test = baseTest.extend<{
    googlepage: googlePage;

}>({
    googlepage: async ({ page }, use) => {
        await use(new googlePage(page));
    }
});

export default test;