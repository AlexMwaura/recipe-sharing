export const environment = {
    production: false,
    apiUrl: {
        baseUrl: 'http://localhost:9001/recipes/',
        auth: {
            portal: {
              login: 'api/auth/login',
            }
          }
    }
};
