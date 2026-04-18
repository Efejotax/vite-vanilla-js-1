// Estilos CSS de tipo normal:
import 'src/css/style.css';
// Mis estilos CSS de tipo módulo:
import styles from 'src/css/style.module.css';
// Estilos CSS de tipo SASS con extension scss:
import 'src/scss/styles.scss';
// Importar imagenes con el metodo import de JS:
import javascriptLogo from 'src/assets/javascript.svg';
// Importar imagenes con el metodo import de JS:
import viteLogo from 'src/assets/vite.svg';
// Importar JS con el metodo import de JS:
import { setupCounter } from 'src/js/counter.js';
// Importación de web-components:
import '@dile/ui/components/info-box/info-box.js';
import '@spectrum-web-components/color-wheel/sp-color-wheel.js';
// Este import de un web-component No funciona TODO:
//import { colorWheel } from '@spectrum-web-components/color-wheel';

// importar mis web-components
import 'src/components/MyCard.js';
import 'src/components/ToggleSwitch.js';

//const app = document.querySelector('#app')

// template strings con interpolación y comillas invertidas:
document.querySelector('#app').innerHTML = `
  <div>
  <div class="logos">
    <a href="https://vite.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    </a>
  </div>
    <p class="read-the-docs">
      Click on the logos to learn more about Vite and JavaScript
    </p>
    <h1>Hello Vite!</h1>
  
    <div class="card">
    <h3>Este botón contador no es un web-component</h3>
      <button id="counter" type="button"></button>
    </div>
    
    <h3>Web-Component MyCard</h3>
    <div class="center-box">
    <my-card 
      title="Hola desde Web Components"
      text="Este es un componente 100% vanilla con Shadow DOM."
      class="center-img">
    </my-card>
    </div>
    <h3>Web-Component ToggleSwitch</h3>
    <div class="center-box">
    <toggle-switch id="switch1" class="center-img"></toggle-switch>
    </div>
    <h3>Icono lupa www desde public</h3>
    <div class="center-box">
      <img
        src="/www.png"
        class="center-img"
        alt="lupa www icono"
      />
    </div>
    <dile-info-box showCloseButton title="Information">Information message from Dile UI / dile-info-box</dile-info-box>
    <div>
    <sp-color-wheel id="color-wheel" style="width: 200px; height: 200px;"></sp-color-wheel>
    </div>
   <h1 class="${styles.red}">Hola Mundo desde Módulo CSS de Color Rojo</h1>
   <h2 class="blue">Hola Mundo desde SASS color Azul</h2>
    <p>api key: ${import.meta.env.VITE_API}</p>
    <h3>Icono globo terraqueo desde public</h3>
    <div class="center-box">
    <img 
      src="/sitio-web.png" 
      class="icono" 
      alt="icono globo terraqueo"
    />
    </div>
  </div>
`;

setupCounter(document.querySelector('#counter'));

// Escuchador de eventos del web-component ToggleSwitch:
document.querySelector('#switch1').addEventListener('change', (e) => {
  console.log('Estado:', e.detail.checked);
});

// OJO!!!!  TODO: Este web-component no carga.
// const colorWheel = new ColorWheel();
// document.getElementById('color-wheel').appendChild(colorWheel);

// const ColorWheel = document.getElementById('color-wheel');
// colorWheel.addEventListener('change', (e) => console.log(e.target.color));

// document
//   .getElementById('color-wheel')
//   .addEventListener('change', (e) => console.log(e.target.color));
