import { test, expect } from '@playwright/test';

test('GET Request', async ({ request }) => {
    //send GET request
    const response = await request.get('https://reqres.in/api/users?page=2')
    //verify status code
    expect(response.status()).toBe(200)
    //response contains text
    const text = await response.text();
    expect(text).toContain('Michael')
    //log console
    console.log(await response.json());
});

test('POST Request', async ({ request }) => {
    //send POST request
    const response = await request.post('https://reqres.in/api/users', {
        data: {
            "name": "john",
            "job": "developer"
        }
    })
    //verify status code
    expect(response.status()).toBe(201);
    //response contains text
    const text = await response.text();
    expect(text).toContain('john')
    //log console
    console.log(await response.json());
})

