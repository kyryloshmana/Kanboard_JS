import { test } from '../../UI/fixtures/loginPage.fixtures'
import { expect } from '@playwright/test'
import { MainPage } from '../../UI/pages/MainPage';

test('successful logout redirect to login page', async ({ authenticatedPage }) => {
    const mainPage = new MainPage(authenticatedPage);
    await mainPage.dropdownMenyComponent.logout()
    await expect(authenticatedPage).toHaveURL(/login/)

})