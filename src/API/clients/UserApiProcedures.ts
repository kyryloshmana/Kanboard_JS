import { ApiResponse, User, UserData, UserSchema} from '../types/api.types'
import { BaseApiClient } from './BaseApiClient';

export class UserApiProcedures extends BaseApiClient{

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