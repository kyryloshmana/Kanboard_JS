import {faker } from '@faker-js/faker'


import type { UserData } from '../types/api.types'

export const generateUserData = (): UserData => ({
    username: faker.internet.username(),
    password: faker.internet.password()
});
