import { UserApiProcedures } from "../clients/UserApiProcedures";
import { logger } from '../builders/Logger'

export async function cleanUpUsers(userApi: UserApiProcedures, userIds: number[]): Promise<void>{

    const log = logger.child({ module: 'cleanUpUser' })
    
    for (const userId of userIds) {
        try {
            await userApi.removeUser(userId)
            log.info({ userId: userId }, "createdUser fixture: user removed")
        }catch (error) {
            log.warn({userId, error}, "created user fixture: teardown failed") 
        }
    }
}