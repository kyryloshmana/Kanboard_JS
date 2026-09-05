import {z} from 'zod'

export interface ApiRequest<T = unknown>{
    jsonrpc: string,
    method: string,
    id: number,
    params: T
}

export interface UserData{
    username: string,
    password:string
}

export interface ApiResponse<T> {
    status: number;
    body: ApiResponseBody<T>;
}

export interface RpcError{
    code: number;
    message: string;
}

export interface ApiResponseBody<T>{
    jsonrpc: string;
    id: number;
    result?: T;
    error?: RpcError;
}

export interface CreatedUser{
    id: number;
    username: string;
    password: string;
}

export interface ProjectData{
    name: string;
    description?: string;
    owner_id?: number;
    identifier?: string;
    start_date?: string; 
    end_date?: string;
    priority_default?: number;
    priority_start?: number;
    priority_end?: number;
    email?: string;
}

export interface CreatedProject{
    id: number;
}
// //---- Zod Schemas ---

// export const UserIdSchema = z.object({
//     user_id: z.union([z.number(), z.boolean()])
// })

export const UserSchema = z.object({
       id: z.number(),
    username: z.string(),
    password: z.string(),
    is_ldap_user: z.number(),
    name: z.string().nullable(),
    email: z.string().nullable(),
    google_id: z.string().nullable(),
    github_id: z.string().nullable(),
    notifications_enabled: z.number(),
    timezone: z.string().nullable(),
    language: z.string().nullable(),
    disable_login_form: z.number(),
    twofactor_activated: z.number(),
    twofactor_secret: z.string().nullable(),
    token: z.string(),
    notifications_filter: z.number(),
    nb_failed_login: z.number(),
    lock_expiration_date: z.number().nullable(),
    gitlab_id: z.string().nullable(),
    role: z.string(),
    is_active: z.number(),
    avatar_path: z.string().nullable(),
    api_access_token: z.string().nullable(),
    filter: z.string().nullable()
}).strict();

export const UsersSchema = z.array(UserSchema)


export type User = z.infer<typeof UserSchema>

export type Users = z.infer<typeof UsersSchema>