// Estilos CSS de tipo normal:
import 'src/css/style.css';
// Mis estilos CSS de tipo módulo:
import styles from 'src/css/style.module.css';
// Estilos CSS de tipo SASS con extension scss:
import 'src/scss/styles.scss';
import javascriptLogo from 'src/assets/javascript.svg';
import viteLogo from 'src/assets/vite.svg';

import { setupCounter } from 'src/js/counter.js';
// componentes:
import '@dile/ui/components/info-box/info-box.js';
import '@spectrum-web-components/color-wheel/sp-color-wheel.js';
// No funciona TODO:
//import { colorWheel } from '@spectrum-web-components/color-wheel';
document.querySelector('#app').innerHTML = `
  <div>
    <a href="https://vite.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <h1>Hello Vite!</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite logo to learn more
    </p>
    <dile-info-box showCloseButton title="Information">Information message from Dile UI / dile-info-box</dile-info-box>
    <div>
    <sp-color-wheel id="color-wheel" style="width: 200px; height: 200px;"></sp-color-wheel>
    </div>
   <h1 class="${styles.red}">Hola Mundo desde Módulo CSS de Color Rojo</h1>
   <h2 class="blue">Hola Mundo desde SASS color Azul</h2>
    <p>api key: ${import.meta.env.VITE_API}</p>
  </div>
`;

setupCounter(document.querySelector('#counter'));

// OJO!!!!  TODO: Este componente no carga en el build
// const colorWheel = new ColorWheel();
// document.getElementById('color-wheel').appendChild(colorWheel);

// const ColorWheel = document.getElementById('color-wheel');
// colorWheel.addEventListener('change', (e) => console.log(e.target.color));

// document
//   .getElementById('color-wheel')
//   .addEventListener('change', (e) => console.log(e.target.color));
