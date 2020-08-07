import buildShadowRoot from '../lib/build-shadow-root.js';

class DJA extends HTMLElement {
  constructor() {
    super();
    const html = `
      <style>
        :host {
        }
        a {
          color: royalblue;
          text-decoration: none;
        }
        a:hover {
          color: salmon;
          -webkit-transition: .2s linear 0s;
          -moz-transition: .2s linear 0s;
          -o-transition: .2s linear 0s;
          transition: .2s linear 0s;
        }
      </style>
      <a>
        <slot></slot>
      </a>
    `;
    buildShadowRoot(html, this);
    this.elems = {
      elem: this.shadowRoot.querySelector('selector')
    };
  }

  static get observedAttributes() {
    return ['href'];
  }

  attributeChangedCallback(attrName, oldVal, newVal) {
    switch(attrName) {
    case 'href':
      this.shadowRoot.querySelector('a').setAttribute('href',newVal);
      break;
    default:
      break;
    }
  }
}

customElements.define('dj-a', DJA);
export default DJA;
