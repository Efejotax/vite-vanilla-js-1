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

## Rama Desarrollo - Componentes

https://www.npmjs.com/package/@dile/dile-info-box
https://dile-components.com/components/dile-info-box/

Installation:
npm i @dile/ui
npm i @dile/dile-info-box

### Usage

Import the component:
import '@dile/ui/components/info-box/info-box.js';

Use the component:
<dile-info-box showCloseButton>Information message...</dile-info-box>

https://www.npmjs.com/package/@spectrum-web-components/color-wheel

npm i @spectrum-web-components/color-wheel

Import the side effectful registration of <sp-color-wheel> via:

import '@spectrum-web-components/color-wheel/sp-color-wheel.js';
When looking to leverage the ColorWheel base class as a type and/or for extension purposes, do so via:

import { ColorWheel } from '@spectrum-web-components/color-wheel';

Nota: en el estandar de JS ES6 los imports son siempre rutas.
Pero herramientas de desarrollo como Vite nos permiten
integrar cosas como las de abajo.
sacadas del main.js

import './styles.css';

Módulos:
import styles from './style.module.css';

Componentes npm:
import '@dile/ui/components/info-box/info-box.js';

He implemenetado un alias 'src' en mi archivo vite.config.js

src/
assets/
javascript.svg
vite.svg
js/
main.js
counter.js
css/
style.css
style.module.css
scss/
styles.scss

Nunca importar desde la carpeta public, No está permitido.
Para usar la carpeta public para linkear algo se hace de otra manera
usando algo similar a esto:

const nombre './public/logo.png'

Más ejemplos de rutas:

antes del alias 'src':
import javascriptLogo from './javascript.svg';
import viteLogo from './vite.svg';

import javascriptLogo from 'src/assets/javascript.svg';

## Instalaión Postcss (opcional)

Permite la anidación de estilos CSS (nesting)...
y por lo tanto un código CSS menos verboso agil y conciso

añadimos un archivo llamado:
postcss.config.js
postcss.config.cjs (cjs--> common JS) paar usar con Vite

No lo vamos a implementar en este proyecto que ya usa SASS.

Existen varias opciones:

npm install -D postcss-nesting
o también...
$ npm install -D postcss-cli autoprefixer

## Instalación de SASS

npm add -D sass

## Instalando y configurando Tailwind css

https://www.corecode.school/blog/css-tailwind

npm install -D tailwindcss postcss autoprefixer

Durante la instalación, es posible que te pregunte si deseas agregar el paquete "create-vite", si es así, confirma tu elección escribiendo "y".

Después de crear el proyecto, navega hasta la carpeta y ejecuta el siguiente comando para instalar Tailwind:

bash
npm install -D tailwindcss postcss autoprefixer
Copiar
🔩 Configurando Tailwind
Para configurar Tailwind necesitas generar un archivo de configuración predeterminada, lo haces ejecutando el siguiente comando:

bash
npx tailwindcss init -p

🟦 Si tienes TailwindCSS v4 (lo más probable)
En Tailwind 4:

No existe tailwind.config.js por defecto

No existe postcss.config.js

No existe npx tailwindcss init

Todo se configura automáticamente

Por eso el comando falla.

✔️ Instalación correcta en Vite (Tailwind 4)
bash
npm install tailwindcss @tailwindcss/vite
Luego en tu vite.config.js:

js
import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
plugins: [
tailwindcss(),
],
})
Y en tu CSS principal:

css
@import "tailwindcss";
Eso es todo.
No necesitas tailwind.config.js a menos que quieras personalizar cosas avanzadas.

🟩 Si quieres forzar un tailwind.config.js en Tailwind 4
Puedes crearlo manualmente:

bash
echo "export default { theme: { extend: {} } }" > tailwind.config.js
Pero no es obligatorio.

🟧 Si tienes TailwindCSS v3 y el comando no funciona
Puede deberse a:

Tailwind no está instalado

Estás fuera del proyecto

Node/npm dañados

npx no encuentra el binario

En ese caso reinstala:

bash
npm install -D tailwindcss postcss autoprefixer
Y luego:

bash
npx tailwindcss init -p
🎯 Conclusión
Tu comando no funciona porque Tailwind 4 eliminó tailwindcss init.
La instalación ahora se hace con un plugin de Vite y un simple @import "tailwindcss".

Si quieres, puedo revisar tu package.json o tu proyecto y decirte exactamente qué versión tienes y cómo configurarlo correctamente.

---

### Tailwind 4 - archivo opcional tailwind.config.js

dame el código estandar un archivo tailwind.config.js tailwind 4 y estoy con Vite
Aquí tienes un tailwind.config.js estándar para Tailwind CSS v4 usando Vite, siguiendo la nueva sintaxis simplificada de Tailwind 4 (que ya no usa content, theme, etc. como antes).

✅ tailwind.config.js (Tailwind CSS 4 + Vite)
js
// tailwind.config.js
export default {
// Activa el modo "content" automático de Tailwind 4
// Tailwind escanea todos los archivos por defecto, así que no necesitas configurarlo.

theme: {
extend: {
colors: {
primary: "#4f46e5",
secondary: "#64748b",
},
},
},

// Plugins opcionales
plugins: [],
};
📌 Estructura típica del proyecto con Vite + Tailwind 4
Código
project/
│ index.html
│ tailwind.config.js
│ package.json
│
└─ src/
│ main.js
│ style.css
📌 style.css (Tailwind 4 usa las mismas directivas)
css
@import "tailwindcss";
En Tailwind 4 ya no se usa @tailwind base; @tailwind components; @tailwind utilities;  
Todo se importa con una sola línea.

📌 Instalación rápida (por si la necesitas)
bash
npm install -D tailwindcss@next
📌 Vite + Tailwind 4: main.js
js
import './style.css';
Si quieres, puedo darte también un template completo, o ayudarte a configurar Dark Mode, plugins, o un layout base con Tailwind 4. ¿Quieres algo más avanzado?

---

# ERROR DE CSS y JS con TAILWIND

El error es claro: Vite está intentando cargar @tailwindcss/vite, pero ese paquete no existe en tu proyecto (y probablemente tampoco debería existir según tu configuración).

La causa más común es que tu vite.config.js contiene algo como:

js
import tailwindcss from '@tailwindcss/vite'
❌ Ese import es incorrecto.
Tailwind no tiene un paquete llamado @tailwindcss/vite.

✅ Cómo solucionarlo

1. Revisa tu vite.config.js
   Debe verse así si usas Vite + Tailwind + PostCSS:

js
import { defineConfig } from 'vite'

export default defineConfig({
css: {
postcss: './postcss.config.js'
}
})
O incluso más simple:

js
import { defineConfig } from 'vite'

export default defineConfig({})
El plugin de Tailwind NO se importa en Vite, se usa desde PostCSS.

2. Revisa tu postcss.config.js
   Debe contener:

js
export default {
plugins: {
tailwindcss: {},
autoprefixer: {},
},
} 3. Asegúrate de tener instalados los paquetes correctos
Ejecuta:

sh
npm install -D tailwindcss postcss autoprefixer 4. Revisa tu archivo tailwind.config.js
Debe existir y verse así:

js
export default {
content: ["./index.html", "./src/**/*.{js,ts}"],
theme: {
extend: {},
},
plugins: [],
} 5. Elimina la carpeta .vite-temp
A veces Vite cachea configuraciones rotas.

Ejecuta:

sh
rm -rf node_modules/.vite-temp
En Windows:

sh
rmdir /s /q node_modules\.vite-temp 6. Reinstala dependencias
sh
rm -rf node_modules package-lock.json
npm install
🎯 Resumen del problema
Tu error viene de esto:

Código
Cannot find package '@tailwindcss/vite'
Porque ese paquete no existe y no debe importarse.
Elimina ese import de tu vite.config.js y usa Tailwind desde PostCSS.

Si quieres, pégame tu vite.config.js y tu postcss.config.js y te digo exactamente qué corregir.
