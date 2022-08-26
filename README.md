# Rutas

- /api/v1/users
- /api/v1/users/:id
- /api/v1/users/me
- /api/v1/auth/login
- /api/v1/auth/register
- /api/v1/auth/password-recovery

- /api/v1/users
- - GET 

- /api/v1/users/:id
- - GET
- - PUT (ADMIN)
- - DELETE (ADMIN)

- /api/v1/users/me
- - GET
- - PUT
- - PATCH
- - DELETE

- /api/v1/auth/login
- - POST

- /api/v1/auth/register
- - POST

- /api/v1/auth/password-recovery
- - POST
- - PATCH

- /api/v1/posts
    1. Crear posts
    2. Ver los posts de todos los usuarios
2. /api/v1/posts/:id 
    1. Ver un post en especifico
3. /api/v1/users/me/posts
    1. Ver unicamente los posts del usuario loggeado
4. /api/v1/users/me/posts/:id 
    1. Ver un post en especifico pero solo los del usuario loggeado
    2. Editar un post
    3. Eliminar un post