import buildShadowRoot from '../lib/build-shadow-root.js';

class DJContact extends HTMLElement {
  constructor() {
    super();
    const html = `
      <style>
        :host {
          display: flex;
          flex-direction: column;
          flex: 1 0 auto;
        }
        main {
          background: white;
          overflow: hidden;
          flex: 1 0 auto;
          padding: 0 5px;
        }
      </style>
      <dj-header>
      </dj-header>

      <main>
        <dj-h2>Contact</dj-h2>
      </main>

      <dj-footer>
      </dj-footer>
    `;
    buildShadowRoot(html,this);
  }
}

customElements.define('dj-contact', DJContact);
export default DJContact;
