import { test } from '../../UI/fixtures/loginPage.fixtures'
import { expect } from '@playwright/test'

test('successful login redirect to dashboard', async ({ loginPage, userData, page }) => {
    await loginPage.login(userData.username, userData.password)

    await expect(page).toHaveURL(/dashboard/)
})

//~~~~~~~~~~~~~Invalid scenarios~~~~~~~~~~~~~//

// test('unsuccessful login with empty field, check error meassage', async ({ loginPage, userData, page }) => {
//     await loginPage.login("invalid_username", "invalid_password")

//     await expect(page).toHaveURL(/\?controller=AuthController&action=check/)
//     await expect(loginPage.errorMessage).toHaveText("Bad username or password")
// })  

const staticInvalidCases = () => [
    { username: "invalid_username", password: null, description: "invalid username" },
    { username: null, password: "invalid_password", description: "invalid password" },
    { username: null, password: null, description: "invalid username and password" }
]

for (const { username, password, description } of staticInvalidCases()) {
    test(`unsuccessful login: ${description}, check error message`, async ({ loginPage, userData, page }) => {
        
        const finalUsername = username ?? userData.username
        const finalPassword = password ?? userData.password

        await loginPage.login(finalUsername, finalPassword)

        await expect(page).toHaveURL(/\?controller=AuthController&action=check/)
        await expect(loginPage.errorMessage).toHaveText("Bad username or password")

    })
}