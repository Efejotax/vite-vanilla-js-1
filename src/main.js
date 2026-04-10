// Estilos CSS de tipo normal:
import './style.css';
// Mis estilos CSS de tipo módulo:
import styles from './style.module.css';
// Estilos CSS de tipo SASS con extension scss:
import './styles.scss';
import javascriptLogo from './javascript.svg';
import viteLogo from '/vite.svg';
import { setupCounter } from './counter.js';

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
   <h1 class="${styles.red}">Hola Mundo desde Módulo CSS de Color Rojo</h1>
   <h2 class="blue">Hola Mundo desde SASS color Azul</h2>
    <p>api key: ${import.meta.env.VITE_API}</p>
  </div>
`;

setupCounter(document.querySelector('#counter'));
