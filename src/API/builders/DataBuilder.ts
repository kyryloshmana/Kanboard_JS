import {faker } from '@faker-js/faker'


import type { UserData, ProjectData } from '../types/api.types'

export const generateUserData = (): UserData => ({
    username: faker.internet.username(),
    password: faker.internet.password()
});

export const generateProjectData = (overrides:Partial<ProjectData> = {}): ProjectData => ({
    name: faker.commerce.productName(),
    ...overrides,
})

export const generateProjectFullData = (overrides:Partial<ProjectData> = {}): ProjectData => ({
    name: faker.commerce.productName(),
    description: faker.lorem.sentence(),
    owner_id: faker.number.int({min: 1, max: 1000}),
    identifier: faker.string.alphanumeric({length: 6, casing: 'upper'}),
    start_date: faker.date.soon({ days: 7}).toISOString().split('T')[0], 
    end_date: faker.date.future({ years: 7}).toISOString().split('T')[0],
    priority_default: faker.number.int({min: 1, max: 3}),
    priority_start: faker.number.int({min: 1, max: 3}),
    priority_end: faker.number.int({min: 4, max: 10}),
    email: faker.internet.email(),
    ...overrides,
})



