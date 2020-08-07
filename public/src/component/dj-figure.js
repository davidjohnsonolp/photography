import buildShadowRoot from '../lib/build-shadow-root.js';

class DJFigure extends HTMLElement {
  constructor() {
    super();
    const html = `
      <style>
        :host {
        }
        figure {
          margin: 0 10px;
        }
        figure img {
          width: 100%;
        }
        figure figcaption {
          color: dimgray;
          font-style: italic;
          text-align: center;
        }
      </style>
      <figure>
        <img />
        <figcaption>
          <slot></slot>
        </figcaption>
      </figure>
    `;
    buildShadowRoot(html, this);

    this._img = this.shadowRoot.querySelector('img');
  }

  static get observedAttributes() {
    return ['src', 'alt'];
  }

  attributeChangedCallback(attrName, oldVal, newVal) {
    switch(attrName){
      case 'src':
        this._img.setAttribute('src', newVal);
        break;
      case 'alt':
        this._img.setAttribute('alt', newVal);
        break;
      default:
        break;
    }
  }
}

customElements.define('dj-figure', DJFigure);
export default DJFigure;
