import { Locator, Page } from "@playwright/test"
import { BasePage } from "./BasePage"

export class LoginPage extends BasePage{

    readonly usernameInput: Locator;
    readonly passwortInput: Locator;
    readonly submitButton: Locator;
    readonly errorMessage: Locator;

    constructor(page: Page) {
        super(page)
        this.usernameInput = page.locator('xpath = //*[@id="form-username"]')
        this.passwortInput = page.locator('xpath = //*[@id="form-password"]')
        this.submitButton = page.locator('xpath = //button[text()= "Sign in"]')
        this.errorMessage = page.locator('xpath = //p[text()= "Bad username or password"]')
    }
    async goto(): Promise<void> {
        await this.page.goto('login')
    }

    async login(username: string, password: string):Promise<void> {
        await this.usernameInput.fill(username);
        await this.passwortInput.fill(password)
        await this.submitButton.click()
    }

    async getErrorMessage(): Promise<string|null>{
        return this.errorMessage.textContent();
    }
}