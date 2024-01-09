import { Page } from "playwright";

const waitForElement = 12000;

export class WebActions {
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async navigateToURL(url: string) {
        await this.page.goto(url);
    }

    async waitForNavigation(event: string): Promise<void> {
        switch (event.toLowerCase()) {
            case `networkidle`:
                await this.page.waitForNavigation({ waitUntil: `networkidle`, timeout: waitForElement });
                break;
            case `load`:
                await this.page.waitForNavigation({ waitUntil: `load`, timeout: waitForElement });
                break;
            case `domcontentloaded`:
                await this.page.waitForNavigation({ waitUntil: `domcontentloaded`, timeout: waitForElement });
        }
    }

    async sendKeys(locator: string, text: string): Promise<void> {
        await this.page.fill(locator, text);
    }

    async keyPress(locator: string, key: string): Promise<void> {
        await this.page.press(locator, key);
    }

    async elementVisibility(locator: string): Promise<void> {
        await this.page.waitForSelector(locator, { state: "visible", timeout: waitForElement });
    }
}