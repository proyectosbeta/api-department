const swagger = {
    openapi: "3.0.3",
    info: {
      title: "API department",
      description: "The API REST department",
      version: "0.1.0",
      contact: {
        email: "hello@proyectosbeta.net",
      },
    },
    servers: [
      {
        url: "http://localhost:3000/api",
        description: "Development server,",
      },
    ],
    paths: {
      "/": {
        get: {
          description: "Welcome to the API REST (api department)",
          summary: "Welcome to the API REST (api department)",
          parameters: [
            {
              in: "header",
              name: "accept-language",
              schema: {
                type: "string",
              },
            },
          ],
          responses: {
            200: {
              description: "Return a welcome",
            },
          },
        },
      },
    },
    components: {},
    tags: [],
  };
  
  export { swagger };
  