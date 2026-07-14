import { test} from '../../../API/fixtures/userApi.fixtures';
import { ResponseValidator} from '../../../API/validators/ResponseValidator'


//~~~~~~~~~~~~~Valid scenarios~~~~~~~~~~~~~//


test('delete valid user', async ({ userApi, userData }) => {
    const createUser = await userApi.createUser(userData);
    const user_id = createUser.body.result

    
    const removeUser = await userApi.removeUser(user_id as number)

    new ResponseValidator(removeUser)
        .expectStatus(200)
        .expectBodyField("result", true)
})



test('delete not reat user', async ({ userApi }) => {
    const removeUser = await userApi.removeUser(99999999)

    new ResponseValidator(removeUser)
        .expectStatus(200)
        .expectBodyField("result", false)
})