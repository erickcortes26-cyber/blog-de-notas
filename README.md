Blog de Notas 

Este proyecto está hecho con https://nextjs.org/ y fue arrancado usando https://nextjs.org/docs/pages/api-reference/create-next-app
Es básicamente un blog de notas con su panel de administración, donde tú puedes crear notas y si eres admin puedes editar y borrar como quieras.

Primero, corre el servidor de desarrollo:
npm run dev
# o
yarn dev
# o
pnpm dev
# o
bun dev

Después, abre tu navegador en: http://localhost:3000 Y ya estás listo para ver la página. Si quieres cambiar algo, edita pages/index.js y el navegador se actualizará solito.

Rutas importantes:

Página principal: /

Login / Registro de usuarios normales: /login y /register

Panel admin: /admin 

Dentro de /admin puedes crear y manejar admins, y ver el dashboard de administración.

Login de admin: /admin/login

Registro de admin: /admin/register

Todo lo que pongas en pages/api se convierte en rutas de API, no páginas normales.
Por ejemplo:
pages/api/register --> /api/register


Estas rutas son perfectas para manejar datos, hacer login, registro y todo lo que no quieres que la gente vea directamente en el front.

