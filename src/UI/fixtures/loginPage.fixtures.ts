import { test as base } from '../../API/fixtures/userApi.fixtures';
import { LoginPage } from '../pages/LoginPage';
import { Page } from '@playwright/test';

type UiLoginPageFixtures = {
    loginPage: LoginPage;
    authenticatedPage  : Page // page з виконаним логінм
}

export const test = base.extend<UiLoginPageFixtures>({
    loginPage: async ({ page }, use) => {
        const loginPage = new LoginPage(page)
        await loginPage.goto()
        await use(loginPage)
    },

    authenticatedPage  : async ({ page, userData, createdUser }, use) => {
        const loginPage = new LoginPage(page)
        await loginPage.goto()
        await loginPage.login(createdUser.username, userData.password)
        await use(page)
    }
})