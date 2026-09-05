import { test, expect } from '@playwright/test';
import { request } from 'node:http';
import dotenv from 'dotenv';
//import {generateProjectData} from '../API/builders/DataBuilder'
import { logger } from '../API/builders/Logger';


dotenv.config();

// test('has title', async ({ page }) => {
//   await page.goto('https://playwright.dev/');

//   // Expect a title "to contain" a substring.
//   await expect(page).toHaveTitle(/Playwright/);
// });

// test('get started link', async ({ page }) => {
//   await page.goto('https://playwright.dev/');

//   // Click the get started link.
//   await page.getByRole('link', { name: 'Get started' }).click();

//   // Expects page to have a heading with the name of Installation.
//   await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
// });

// // test('login as admin', async ({ page }) => {
// //   await page.goto('/login')

// //   await page.locator('#form-username').fill('admin')
// //   await page.locator('#form-password').fill('admin')

// //   await page.getByRole('button', { name: 'Sign in' }).click();


// // })

////

// const ids =  [
//  883]
// for (let id of ids) {
//     test(`delete users - ${id}`, async ({request}) => {
//         const credentials = Buffer.from('admin:admin').toString('base64');


//         const newIssue = await request.post('/jsonrpc.php', {

  
//             headers: {
//                 'Authorization': `Basic ${credentials}`,
//                 'Content-Type': 'application/json',
//             },

//             data: {
//                 jsonrpc: "2.0",
//                 method: "removeUser",
//                 id: 2094191872,
//                 params: {
//                     user_id: id
//                 }
//             }
//         }
  
//         )

//         console.log('Status:', newIssue.status());
//         console.log('Body:', await newIssue.json());
  

//         expect(newIssue.ok()).toBeTruthy();
//     })
// }

test('get users', async ({ request }) => {
  const credentials = Buffer.from('jsonrpc:d763c3e57d92da72762f03df1cf2604b98e79d506e5bcf869d86de16c527').toString('base64');

  const newIssue = await request.post('/jsonrpc.php', {
    headers: {
      'Authorization': `Basic ${credentials}`,
      'Content-Type': 'application/json',
    },

    data: {
      jsonrpc: "2.0",
      method: "getAllUsers",
      id: 1438712131

    }
  })

      console.log('Status:', newIssue.status());
      console.log('Body:', await newIssue.json());

  

  const body = await newIssue.json();
  const userIds: number[] = body.result.map((user: { id: number }) => user.id);
  console.log(userIds);

  expect(newIssue.ok()).toBeTruthy();

})





// test('create user by admin damin', async ({ request }) => {
//   const credentials = Buffer.from('admin:admin').toString('base64');


//   const newIssue = await request.post('/jsonrpc.php', {

  
//     headers: {
//       'Authorization': `Basic ${credentials}`,
//       'Content-Type': 'application/json',
//     },

//     data:{
//       jsonrpc: "2.0",
//       method: "createUser",
//       id: 1518863034,
//       params: {
//         username: "biloute" + new Date() ,
//         password: "123456"
//     }}
//   }
  
//   )

//     console.log('Status:', newIssue.status());
//   console.log('Body:', await newIssue.json());
  

//   expect(newIssue.ok()).toBeTruthy();
// })


test('create user by token', async ({ request }) => {
  const credentials = Buffer.from('jsonrpc:d763c3e57d92da72762f03df1cf2604b98e79d506e5bcf869d86de16c527').toString('base64');


  const newIssue = await request.post('/jsonrpc.php', {

  
    headers: {
      'Authorization': `Basic ${credentials}`,
      'Content-Type': 'application/json',
    },

    data:{
      jsonrpc: "2.0",
      method: "createUser",
      id: 1518863034,
      params: {
        username: "qwe123",
        password: "123456"
    }}
  }
  
  )

    console.log('Status:', newIssue.status());
  console.log('Body:', await newIssue.json());
  

  expect(newIssue.ok()).toBeTruthy();
})


test('get user by ID', async ({ request }) => {
  const credentials = Buffer.from('jsonrpc:d763c3e57d92da72762f03df1cf2604b98e79d506e5bcf869d86de16c527').toString('base64');

  const newIssue = await request.get('/jsonrpc.php', {
    headers: {
      'Authorization': `Basic ${credentials}`,
      'Content-Type': 'application/json',
    },

    data: {
      jsonrpc: "2.0",
      method: "getUser",
      id: 1769674781,
      params: {
        user_id: 893
      }

    }
  })

      console.log('Status:', newIssue.status());
  console.log('Body:', await newIssue.json());
  

  expect(newIssue.ok()).toBeTruthy();
})


test('get all projects', async ({ request }) => {
  const credentials = Buffer.from('jsonrpc:d763c3e57d92da72762f03df1cf2604b98e79d506e5bcf869d86de16c527').toString('base64');

  const newIssue = await request.get('/jsonrpc.php', {
    headers: {
      'Authorization': `Basic ${credentials}`,
      'Content-Type': 'application/json',
    },

    data: {
    "jsonrpc": "2.0",
    "method": "getAllProjects",
    "id": 2134420212
}
  })

  console.log('Status:', newIssue.status());
  console.log('Body:', await newIssue.json());
  
  const body = await newIssue.json();
  const projIds: number[] = body.result.map((projects: { id: number }) => projects.id);
  console.log(projIds);
  expect(newIssue.ok()).toBeTruthy();
})



const ids = [
  266, 149, 150, 155, 157, 158, 162, 163, 164, 165, 166, 169,
  171, 173, 174, 175, 176, 177, 178, 180, 181, 182, 184, 185,
  186, 188, 189, 193, 195, 196, 200, 202, 203, 208, 210, 211,
  216, 218, 219, 224, 226, 227, 232, 234, 235, 240, 242, 243,
  248, 250, 251, 403, 263, 271, 279,  34,  36,  37,  38, 322,
  330, 338,  83, 346,  91,  99, 100, 101, 102, 358, 103, 104,
  105, 106, 114, 370, 122, 382, 383, 130, 138, 398, 146, 154,
  168, 207, 215, 223, 231, 239, 247, 255,  35,  13,  11,  14,
    4,   6,   7,   8
]
for (let id of ids) {
    test(`remove projects - ${id}`, async ({request}) => {
        const credentials = Buffer.from('jsonrpc:d763c3e57d92da72762f03df1cf2604b98e79d506e5bcf869d86de16c527').toString('base64');


        const newIssue = await request.post('/jsonrpc.php', {

  
            headers: {
                'Authorization': `Basic ${credentials}`,
                'Content-Type': 'application/json',
            },

            data: {
                "jsonrpc": "2.0",
                "method": "removeProject",
                "id": 46285125,
                "params": {
                "project_id": id
                }
}
        }
  
        )

        console.log('Status:', newIssue.status());
        console.log('Body:', await newIssue.json());
  

        expect(newIssue.ok()).toBeTruthy();
    })
}


test('create project', async ({ request }) => {
  const credentials = Buffer.from('jsonrpc:d763c3e57d92da72762f03df1cf2604b98e79d506e5bcf869d86de16c527').toString('base64');

  const newIssue = await request.post('/jsonrpc.php', {
    headers: {
      'Authorization': `Basic ${credentials}`,
      'Content-Type': 'application/json',
    },

    data: {
    "jsonrpc": "2.0",
    "method": "createProject",
    "id": 1797076613,
    "params": {
        "name": "PHP client",
    }
}
  })

  console.log('Status:', newIssue.status());
  console.log('Body:', await newIssue.json());
  
  
  expect(newIssue.ok()).toBeTruthy();
})

test('Enable public access for a given project', async ({ request }) => {
  const credentials = Buffer.from('jsonrpc:d763c3e57d92da72762f03df1cf2604b98e79d506e5bcf869d86de16c527').toString('base64');

  const newIssue = await request.post('/jsonrpc.php', {
    headers: {
      'Authorization': `Basic ${credentials}`,
      'Content-Type': 'application/json',
    },

    data: {
    "jsonrpc": "2.0",
    "method": "enableProjectPublicAccess",
    "id": 103792571,
    "params": [
        "407"
    ]
}
  })

  console.log('Status:', newIssue.status());
  console.log('Body:', await newIssue.json());
  
  
  expect(newIssue.ok()).toBeTruthy();
})




// test('test', async ({}) => {
//          const projectData = generateProjectData({"description": undefined})
//           logger.debug({ projectData })
// })

