import axios from '../utils/config/axios.config';

export const login = (email: string, password: string) => {
    let body = {
        email,
        password
    }

    return axios.post('/auth/login', body)
}

/**
 * Register
 * @param {string} name 
 * @param {string} email 
 * @param {string} password 
 * @param {number} age 
 * @returns 
 */
export const register = (name: string, email: string, password: string, age: number) => {
    let body = {
        name,
        email,
        password,
        age
    }

    return axios.post('/auth/register', body)
}