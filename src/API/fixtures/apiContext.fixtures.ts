import {test as base, request as playwrightRequest, APIRequestContext} from '@playwright/test'
import { buildAuthHeaders, getBaseURL } from "../builders/Helpers"
import { logger } from "../builders/Logger"

export const test = base.extend<{ apiContext: APIRequestContext }>({
    apiContext: async ({ }, use) => {
        logger.debug('apiContext fixture:setup')
        const contest = await playwrightRequest.newContext({
            baseURL: getBaseURL(),
            extraHTTPHeaders: buildAuthHeaders(),
        })
        await use(contest)
        logger.debug('ApiContext fixture:teardown')
        await contest.dispose();
    }
});