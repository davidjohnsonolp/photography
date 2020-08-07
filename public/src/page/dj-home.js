import buildShadowRoot from '../lib/build-shadow-root.js';

class DJHome extends HTMLElement {
  constructor() {
    super();
    const html = `
      <style>
        :host {
          
        }
      
        dj-footer {
          position: absolute;
          bottom: 0;
          width: 100%;
        }
      </style>
      <dj-header transparent="true" animate="true">
      </dj-header>

      <main></main>

      <dj-footer transparent="true" animate="true">
      </dj-footer>
    `;
    buildShadowRoot(html,this);
  }
}

customElements.define('dj-home', DJHome);
export default DJHome;
