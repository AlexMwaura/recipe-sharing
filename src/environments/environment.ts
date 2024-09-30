export const environment = {
    production: true,
    apiUrl: {
        baseUrl: 'http://localhost:9001/recipes/',
        auth: {
            portal: {
              login: 'api/auth/login',
            }
          }
    }
};
