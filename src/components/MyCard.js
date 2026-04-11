export class MyCard extends HTMLElement {
  constructor() {
    super();

    // Crear Shadow DOM
    this.attachShadow({ mode: 'open' });

    // Crear contenedor
    this.wrapper = document.createElement('div');
    this.wrapper.classList.add('card');

    // Insertar HTML inicial
    this.wrapper.innerHTML = `
      <h2></h2>
      <p></p>
    `;

    // Estilos encapsulados
    const style = document.createElement('style');
    style.textContent = `
      .card {
        padding: 1.5rem;
        border-radius: 10px;
        background: #1e1e1e;
        color: white;
        border: 1px solid #333;
        max-width: 300px;
        transition: transform .2s;
      }

      .card:hover {
        transform: scale(1.03);
      }

      h2 {
        margin: 0 0 .5rem 0;
        font-size: 1.4rem;
      }

      p {
        margin: 0;
        opacity: .8;
      }
    `;

    // Adjuntar al Shadow DOM
    this.shadowRoot.append(style, this.wrapper);
  }

  // Atributos observados
  static get observedAttributes() {
    return ['title', 'text'];
  }

  // Se ejecuta cuando cambian atributos
  attributeChangedCallback(name, oldValue, newValue) {
    if (name === 'title') {
      this.wrapper.querySelector('h2').textContent = newValue;
    }
    if (name === 'text') {
      this.wrapper.querySelector('p').textContent = newValue;
    }
  }

  // Se ejecuta cuando el componente entra al DOM
  connectedCallback() {
    if (this.hasAttribute('title')) {
      this.wrapper.querySelector('h2').textContent = this.getAttribute('title');
    }
    if (this.hasAttribute('text')) {
      this.wrapper.querySelector('p').textContent = this.getAttribute('text');
    }
  }
}

// Registrar el componente
customElements.define('my-card', MyCard);

// Exportar el componente. Aunque no es necesario,
// arriba del todo ya indicamos el export
//export default MyCard;
