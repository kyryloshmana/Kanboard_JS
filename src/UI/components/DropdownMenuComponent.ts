import { Page, Locator } from "@playwright/test";

export class DropdownMenuComponent {
    private readonly logoutButton: Locator
    private readonly dropdownMenu: Locator


    constructor(private readonly page: Page) {
        this.dropdownMenu = page.locator("//div[@class='menus-container']//div[@class='dropdown']")
        this.logoutButton = page.locator("xpath=//ul[@class='dropdown-submenu-open']//li//a[@href='/logout']")
    }

    private async open(): Promise<void>{
        await this.dropdownMenu.click();
    }

    async logout(): Promise<void> {
        await this.open();
        await this.logoutButton.click();
    }
}