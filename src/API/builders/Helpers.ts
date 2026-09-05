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

export function buildAuthHeaders(): Record<string, string>{
    return {
        'Authorization': `Basic ${Buffer.from('jsonrpc:d763c3e57d92da72762f03df1cf2604b98e79d506e5bcf869d86de16c527').toString('base64')}`,
        'Content-Type': 'application/json',
    };
}

export function getBaseURL(): string{
    return process.env.BASE_URL ?? 'http://localhost:81'
}