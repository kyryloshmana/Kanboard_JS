import { test as apiContextTest } from './apiContext.fixtures'
import { ProjectApiProcedures } from '../clients/ProjectApiProcedures'
import { logger } from '../builders/Logger';
import {generateProjectData} from '../builders/DataBuilder'
import { ProjectData, CreatedProject} from '../types/api.types';

const log = logger.child({ module: "fixtures" })

type ProjectApiFixtures = {
    projectApi: ProjectApiProcedures;
    projectData: ProjectData;
    createProject: CreatedProject;
}


export const test = apiContextTest.extend<ProjectApiFixtures>({
    projectApi: async ({apiContext}, use) => {
        logger.debug("projectApi fixtures: setup")

        const projectApi = new ProjectApiProcedures(apiContext)
        await use(projectApi)

        logger.debug("projectApi fixtures: teardown")

    },

    projectData: async ({}, use) => {
        const projectData = generateProjectData()
        logger.debug({projectData})
        await use(projectData)
    },

    createProject: async ({ projectApi, projectData}, use) => {
        log.debug({projectName: projectData.name})
        const createProject = await projectApi.createProject(projectData)
        const projectId = createProject.body.id as number

        if (typeof projectId !== "number"){
                throw new Error (`Expected userId to be a number, got: ${projectId}`)
        }
        log.debug({projectId: projectId, projectName: projectData.name })
        await use({ ...createProject, id: projectId })
        
        //log.info({}, "createdProjectFixture: removing project")
    }
})