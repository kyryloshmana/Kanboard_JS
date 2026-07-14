import { test } from '../../UI/fixtures/loginPage.fixtures'
import { expect } from '@playwright/test'

test('successful login redirect to dashboard', async ({ loginPage, createdUser, userData, page }) => {
    await loginPage.login(userData.username, userData.password)

    await expect(page).toHaveURL(/dashboard/)
})