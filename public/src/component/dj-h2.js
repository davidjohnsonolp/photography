import buildShadowRoot from '../lib/build-shadow-root.js';

class DJH2 extends HTMLElement {
  constructor() {
    super();
    const html = `
      <style>
        :host {
        }
        h2 {
          display: block;
          font-size: 1.5em;
          margin: 0.83em 0;
          font-weight: bold;
        }
      </style>
      <h2>
        <slot></slot>
      </h2>
    `;
    buildShadowRoot(html,this);
  }
}

customElements.define('dj-h2', DJH2);
export default DJH2;
