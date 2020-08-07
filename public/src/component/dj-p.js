import buildShadowRoot from '../lib/build-shadow-root.js';

class DJP extends HTMLElement {
  constructor() {
    super();
    const html = `
      <style>
        :host {
        }
        p {
          display: block;
          margin: 1em 0;
        }
      </style>
      <p>
        <slot></slot>
      </p>
    `;
    buildShadowRoot(html,this);
  }
}

customElements.define('dj-p', DJP);
export default DJP;
