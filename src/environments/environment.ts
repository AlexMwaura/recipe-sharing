export const environment = {
    production: true,
    apiUrl: {
        baseUrl: 'http://localhost:9001/recipes/',
        auth: {
            portal: {
              login: 'api/auth/login',
            }
          },
          menuItems: {
            portal: {
              items: 'api/menu/items',
              addItems: 'api/menu/addItems',
              itemsCategory: 'api/menu/items/category',
              recipeDetails: 'api/menu/items'


            }
          }
    }
};
