# NPM VITE JS - Proyecto Pruebas 1

## Proyecto básico de pruebas con Vite + JS vanilla

### Diferencias entre Vite y Webpack

Vite es un servidor de desarrollo y no packet bundler como Webpack

instalación
nmp create vite@latest

pnpm create vite

damos nombre a la carpeta del proyecto
...
seguimos los pasos de instalación

entrar a la carpeta del proyecto

npm run dev
npm run build

### EsLint

Instalación de la dependencia ESLint
comando:
npm install eslint --save-dev

O también:

npm i -D eslint

Una vez instalado, debes crear el archivo de configuración
(eslint.config.js o .eslintrc).
La forma más rápida de hacerlo es ejecutando el asistente de configuración de ESLint:

npm init @eslint/config
seguir los pasos de isntalación

npm run lint: Analiza tu código en busca de errores.
npm run lint:fix: Analiza y soluciona automáticamente los errores de estilo que pueda.

### Instalación de SASS

npm add -D sass

### Añadir archivo de configuración vite.config.js

aquí hay un problema con las variables de entorno del sistema
por eso no reconoce los comandos.
dos formas:
vite
vite --config my-config.js

crearlo a mano
git bash:

touch vite.config.js

configuración básica:

```
import { defineConfig } from 'vite';

export default defineConfig({
  define: {
    'process.env': process.env,
  },
  build: {
    sourcemap: true,
  },
});
```

### Formas de ver el proyecto en desarrllo y compilarlo para producción:

npm run build --> compilación crea la carpeta dist (modo producción)

- npm run dev --> localhost:5173 ---> desarrollo
- npm run preview --> localhost:4173 ---> producción (carpeta dist)

Para recompilar se recomienda borrar la carpeta node_modules y volver a lanzar los comandos

git bash:
rm -rf node_modules
