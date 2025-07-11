const { test, expect } = require('@playwright/test');

test('POST request to reqres.in should return status 201', async ({ request }) => {
  // The URL for the API endpoint
  const url = 'https://reqres.in/api/users';

  // Data to send in the POST request
  const requestData = {
    name: 'John Doe',
    job: 'Software Developer'
  };

  // Send POST request
  const response = await request.post(url, {
    data: requestData
  });

  // Log the response for debugging
  console.log('Response:', await response.json());

  // Assert the status code is 201 (Created)
  expect(response.status()).toBe(201);
});
