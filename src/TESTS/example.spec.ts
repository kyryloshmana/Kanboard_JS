import { test, expect } from '@playwright/test';
import { request } from 'node:http';
import dotenv from 'dotenv';
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

// test('get users', async ({ request }) => {
//   const credentials = Buffer.from('jsonrpc:d763c3e57d92da72762f03df1cf2604b98e79d506e5bcf869d86de16c527').toString('base64');

//   const newIssue = await request.post('/jsonrpc.php', {
//     headers: {
//       'Authorization': `Basic ${credentials}`,
//       'Content-Type': 'application/json',
//     },

//     data: {
//       jsonrpc: "2.0",
//       method: "getAllUsers",
//       id: 1438712131

//     }
//   })

//       console.log('Status:', newIssue.status());
//       console.log('Body:', await newIssue.json());

  

//   const body = await newIssue.json();
//   const userIds: number[] = body.result.map((user: { id: number }) => user.id);
//   console.log(userIds);

//   expect(newIssue.ok()).toBeTruthy();

// })





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


// test('create user by token', async ({ request }) => {
//   const credentials = Buffer.from('jsonrpc:d763c3e57d92da72762f03df1cf2604b98e79d506e5bcf869d86de16c527').toString('base64');


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
//         username: "qwe123" ,
//         password: "123456"
//     }}
//   }
  
//   )

//     console.log('Status:', newIssue.status());
//   console.log('Body:', await newIssue.json());
  

//   expect(newIssue.ok()).toBeTruthy();
// })


// test('get user by ID', async ({ request }) => {
//   const credentials = Buffer.from('jsonrpc:d763c3e57d92da72762f03df1cf2604b98e79d506e5bcf869d86de16c527').toString('base64');

//   const newIssue = await request.get('/jsonrpc.php', {
//     headers: {
//       'Authorization': `Basic ${credentials}`,
//       'Content-Type': 'application/json',
//     },

//     data: {
//       jsonrpc: "2.0",
//       method: "getUser",
//       id: 1769674781,
//       params: {
//         user_id: 67331
//       }

//     }
//   })

//       console.log('Status:', newIssue.status());
//   console.log('Body:', await newIssue.json());
  

//   expect(newIssue.ok()).toBeTruthy();
// })

