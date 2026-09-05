import { test as apiContextTest } from './apiContext.fixtures';
import { UserApiProcedures } from "../clients/UserApiProcedures";
import { generateUserData } from '../builders/DataBuilder';
import { UserData, CreatedUser } from '../types/api.types';
import { logger } from '../builders/Logger';
import { cleanUpUsers } from '../builders/Helpers';

const log = logger.child({module: "fixtures"})


type UserApiFixtures = {
    userApi: UserApiProcedures;
    userData: UserData;
    createdUser: CreatedUser;
}


export const test = apiContextTest.extend<UserApiFixtures>({

    userApi: async ({apiContext}, use) => {
        logger.debug("userApi fixtures: setup")

        const userApi = new UserApiProcedures(apiContext);
        await use(userApi)
        logger.debug("userApi fixtures:teardown")
    },

    userData: async ({}, use) => {
        const userData = generateUserData()
        log.debug({username: userData.username, userpass: userData.password}, "userData fixture: generated")
        await use(userData)
        },

    createdUser: async ({ userApi, userData }, use) => {
        //const userData = generateUserData();
        log.debug({ username: userData.username, userpass: userData.password }, "createdUser fixture: creating user")

        const createUser = await userApi.createUser(userData);
        const userId = createUser.body.result as number;
        if (typeof userId !== "number"){
                throw new Error (`Expected userId to be a number, got: ${userId}`)
            }
        log.debug({ userId: userId, username: userData.username }, "createdUser fixture: creating user")
        await use({ ...userData, id: userId })

        log.info({ userId: userId }, "createdUser fixture: removing user")
        await cleanUpUsers(userApi, [userId])
     }
})


