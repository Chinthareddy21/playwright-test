import type { Page } from "playwright/test";
import { WebActions } from "@lib/WebActions"
import { googleObjects } from "@objects/googleObjects";
import { urls } from "@lib/url's"
import { credentials } from "@lib/credentials";

let webactions: WebActions;

export class googlePage extends googleObjects {
    readonly page: Page

    constructor(page: Page) {
        super();
        this.page = page;
        webactions = new WebActions(this.page);
    }

    async navigationToSearch(): Promise<void> {
        await webactions.navigateToURL(urls.baseURL);
    }

    async enterSearchtext(): Promise<void> {
        
        await this.page.locator(googleObjects.searchBox_XPATH).fill("Something");

        await webactions.sendKeys(googleObjects.searchBox_XPATH, credentials.searchText);
    }

    async searchBoxVisibility(): Promise<void> {
        await webactions.elementVisibility(googleObjects.searchBox_XPATH);
    }

    async clickingEnter(): Promise<void> {
        await webactions.keyPress(googleObjects.searchBox_XPATH, "Enter");
    }
}