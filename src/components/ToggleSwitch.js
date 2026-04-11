export class ToggleSwitch extends HTMLElement {
  constructor() {
    super();

    // Shadow DOM
    this.attachShadow({ mode: 'open' });

    // Estado interno
    this._checked = this.hasAttribute('checked');

    // Contenedor principal
    const wrapper = document.createElement('div');
    wrapper.classList.add('switch');

    // HTML interno
    wrapper.innerHTML = `
      <div class="track"></div>
      <div class="thumb"></div>
    `;

    // Estilos encapsulados
    const style = document.createElement('style');
    style.textContent = `
      .switch {
        width: 50px;
        height: 26px;
        position: relative;
        cursor: pointer;
      }

      .track {
        width: 100%;
        height: 100%;
        background: #777;
        border-radius: 20px;
        transition: background .2s;
      }

      .thumb {
        width: 22px;
        height: 22px;
        background: white;
        border-radius: 50%;
        position: absolute;
        top: 2px;
        left: 2px;
        transition: transform .2s;
      }

      .switch.on .track {
        background: #4caf50;
      }

      .switch.on .thumb {
        transform: translateX(24px);
      }
    `;

    // Guardamos referencias
    this.wrapper = wrapper;

    // Eventos
    wrapper.addEventListener('click', () => this.toggle());

    // Adjuntar al Shadow DOM
    this.shadowRoot.append(style, wrapper);
  }

  // Atributos observados
  static get observedAttributes() {
    return ['checked'];
  }

  // Cambios de atributos
  attributeChangedCallback(name, oldValue, newValue) {
    if (name === 'checked') {
      this._checked = this.hasAttribute('checked');
      this.updateUI();
    }
  }

  // Cuando entra al DOM
  connectedCallback() {
    this.updateUI();
  }

  // Métodos públicos
  toggle() {
    this._checked = !this._checked;

    // Actualizar atributo
    if (this._checked) {
      this.setAttribute('checked', '');
    } else {
      this.removeAttribute('checked');
    }

    // Emitir evento personalizado
    this.dispatchEvent(
      new CustomEvent('change', {
        detail: { checked: this._checked },
      }),
    );

    this.updateUI();
  }

  updateUI() {
    this.wrapper.classList.toggle('on', this._checked);
  }

  // Propiedad JS
  get checked() {
    return this._checked;
  }

  set checked(value) {
    if (value) {
      this.setAttribute('checked', '');
    } else {
      this.removeAttribute('checked');
    }
  }
}

// Registrar el componente
customElements.define('toggle-switch', ToggleSwitch);

// Exportar el componente. Aunque no es necesario,
// arriba del todo ya indicamos el export
//export default ToggleSwitch
