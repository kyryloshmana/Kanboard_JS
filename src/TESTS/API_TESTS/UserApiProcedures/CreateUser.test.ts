import { logger } from '../../../API/builders/Logger';
import { test} from '../../../API/fixtures/userApi.fixtures';
import { ResponseValidator} from '../../../API/validators/ResponseValidator'
import { faker } from '@faker-js/faker'
import { cleanUpUsers } from '../../../API/builders/Helpers';
//~~~~~~~~~~~~~Valid scenarios~~~~~~~~~~~~~//
const log = logger.child({module: "UserApiProcedures"})

test('create valid user', async ({ userApi, userData}) => {
    const result = await userApi.createUser(userData)
    
    console.log("Username", userData.username);
    console.log("Password", userData.password);
    console.log("Status:", result.status);
    console.log("Body:", result.body);
    
    

    const userId = result.body.result as number
    try {
        new ResponseValidator(result)
        .expectStatus(200)
        .expectResultType('number') 
    } finally {
       await cleanUpUsers(userApi, [userId])
    }
})

const validCasesEmpties = () => [
    { username: faker.string.alpha({ length: 7, casing: 'lower' }), password: faker.internet.password(), description: 'lowercase username' }, 
    { username: faker.string.alpha({length: 7, casing: "upper"}), password: faker.internet.password(), description: 'uppercase username' }, 
    { username: faker.string.alpha({ length: 7, casing: 'mixed' }), password: faker.internet.password(), description: 'mixedcase username' }, 
    { username: faker.string.alpha({ length: 7 }), password: faker.internet.password(), description: 'username without numbers' }, 
    { username: faker.string.numeric({ length: 7 }), password: faker.internet.password(), description: 'username only numbers' }, 
    { username: faker.string.fromCharacters('/[!@#$%^&*]/', 7), password: faker.internet.password(), description: 'username with special characters' },
]


for (const{ username, password, description } of validCasesEmpties()) {
    test(`Create user: ${description}`, async ({userApi}) => {
        const result = await userApi.createUser({username, password})
      
    const userId = result.body.result as number
    try {
        new ResponseValidator(result)
        .expectStatus(200)
        .expectResultType('number') 
    } finally {
       await cleanUpUsers(userApi, [userId])
    }
    
    })
}


//~~~~~~~~~~~~~Invalid scenarios~~~~~~~~~~~~~//
test('create dublicate user', async ({ userApi, userData }) => {
    const result = await userApi.createUser(userData)

    log.info({}, "create dublicate user")
    const resultDublicate = await userApi.createUser(userData)

    const userId = result.body.result as number
    try {
    new ResponseValidator(result)
        .expectStatus(200)
        .expectResultType('number')
    
    new ResponseValidator(resultDublicate)
        .expectStatus(200)
        .expectResultType('boolean')
        .expectBodyField('result', false)
    } finally {
       await cleanUpUsers(userApi, [userId])
    }

})

const invalidCasesEmpties = () =>[
    { username: '', password: 'valid_password', description: 'empty username' }, 
    { username: 'valid_username', password: '', description: 'empty password' }, 
    { username: '', password: '', description: 'empty username and password' }, 
]
 
for (const{ username, password, description } of invalidCasesEmpties()) {
    test(`Create user with empty fields: ${description}`, async ({userApi}) => {
        const result = await userApi.createUser({username, password})
        
        new ResponseValidator(result)
            .expectStatus(200)
            .expectBodyField('result', false)
    
    })
}


const invalidCasesRaw = () => [
    { username: 'valid_username', description: 'without password' }, 
    { password: 'valid_password', description: 'without username' }, 
    {  description: 'without username and password' }, 
]

for (const{ username, password, description } of invalidCasesRaw()) {
    test(`Create user without fild or filds: ${description}`, async ({userApi}) => {
        const result = await userApi.createUserRaw({username, password})
        
        new ResponseValidator(result)
            .expectStatus(200)
            .expectBodyField('error.data', "Wrong number of arguments")
            .expectBodyField('error.message',  "Invalid params")
    })
}
