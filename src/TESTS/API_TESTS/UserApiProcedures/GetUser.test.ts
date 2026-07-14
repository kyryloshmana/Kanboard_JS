import { test } from '../../../API/fixtures/userApi.fixtures'
import { ResponseValidator } from '../../../API/validators/ResponseValidator';

test('get user by ID', async ({ userApi, createdUser }) => {
    
    const result = await userApi.getUser(createdUser.id)

    new ResponseValidator(result)
        .expectStatus(200)
        .expectBodyField("result.id", createdUser.id)
        .expectBodyField("result.username",createdUser.username )
})

test('get not valid user', async ({ userApi }) => {
    const result = await userApi.getUser(99999999999)

    console.log("status", result.status);
    console.log("body", result.body);

    new ResponseValidator(result)
        .expectStatus(200)
        .expectBodyField("result", null)
})