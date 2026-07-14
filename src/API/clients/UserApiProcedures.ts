import { APIRequestContext } from '@playwright/test';
import {ApiRequest, ApiResponse,ApiResponseBody, User, UserData, UserSchema} from '../types/api.types'
import { z } from 'zod';
import { logger } from '../builders/Logger'

const log = logger.child({module: "UserApiProcedures"})

export class UserApiProcedures{

    private readonly endpoint = '/jsonrpc.php';

    constructor(private request: APIRequestContext) { }
    
    private buildPayload<T>(method: string, params: T): ApiRequest<T>{
        return {
            jsonrpc: "2.0",
            method,
            id: Date.now(),
            params
        }
    }

    private async call <T>(method: string, params: unknown, schema?: z.ZodType<T>): Promise <ApiResponse<T>> {
        log.debug({method, params}, "Api call ->")

        try {
            const res = await this.request.post(this.endpoint, {
                data: this.buildPayload(method, params)
            });
        
            const body = await res.json() as ApiResponseBody<T>

            if (body.error) {
                log.warn({ method, status: res.status(), error: body.error }, "Api call returned error")
            } else {
                log.debug({ method, status: res.status(), result: body.result }, "Api call <-")
            }

            if (schema && body.result !== undefined) {
                schema.parse(body.result)
            }

            return {
                status: res.status(),
                body
            }
        } catch (error) {
            log.error({method, params, error}, "API call failed")    
            throw error;
        }
    }

    async getUser(userId: number): Promise<ApiResponse<User | null>>{
        return this.call<User |  null>('getUser', { user_id: userId }, UserSchema.nullable())
    }

    async createUser(params:UserData):Promise<ApiResponse<number|false>> {
        return this.call<number|false>('createUser', params)
    }

    async createUserRaw(params:Partial<UserData>):Promise<ApiResponse<number|false>> {
        return this.call<number|false>('createUser', params)
    }

    async removeUser(userId: number): Promise<ApiResponse<boolean>>{
        return this.call<boolean>('removeUser', { user_id: userId })
    }
}