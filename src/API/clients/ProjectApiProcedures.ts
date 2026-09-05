import { ApiRequest, ApiResponse, ProjectData } from "../types/api.types";
import { BaseApiClient } from "./BaseApiClient";




export class ProjectApiProcedures extends BaseApiClient{
    async createProject(params: ProjectData): Promise<ApiResponse<number|false>> {
        return this.call<number|false>("createProject", params)
    }
}