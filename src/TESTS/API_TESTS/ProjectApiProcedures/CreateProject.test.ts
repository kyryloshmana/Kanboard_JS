import { logger } from '../../../API/builders/Logger';
import { test } from '../../../API/fixtures/projectApi.fixtures';
import { ResponseValidator } from '../../../API/validators/ResponseValidator'
import { faker } from '@faker-js/faker'
import { cleanUpUsers } from '../../../API/builders/Helpers';


test('create project (only name)', async ({ projectApi, projectData }) => {
    const result = await projectApi.createProject(projectData)
    //console.log("project Id", projectData.name);

    const projectId = result.body.result as number

    //try {
    new ResponseValidator(result)
        .expectStatus(200)
        .expectResultType("number")
    //}
})