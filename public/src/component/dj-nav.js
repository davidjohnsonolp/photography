import buildShadowRoot from '../lib/build-shadow-root.js';

class DJNav extends HTMLElement {
  constructor() {
    super();
    const html = `
      <style>
        :host {
        }
        
        nav {
          float: right;
          margin: 0 10px;
          list-style: none;
          padding: 0
        }
        
        ::slotted(a) {
          padding: 0 20px;
          text-align: center;
          float: left;
          display: block;
          color: #fff;
          text-decoration: none;
          font-weight: 700;
          text-shadow: 0 1px 1px #000;
          line-height: 80px;
        }
        
        ::slotted(a:hover) {
          color: royalblue;
          -webkit-transition: .2s linear 0s;
          -moz-transition: .2s linear 0s;
          -o-transition: .2s linear 0s;
          transition: .2s linear 0s;
          outline: 0;
          text-shadow: 0 1px 1px #222
        }

        @media screen and (max-width: 735px) {
          nav {
              float:none
          }

          ::slotted(a) {
              line-height: 50px;
              width: 29%;
              padding: 0 2%
          }
        }
      </style>
      <nav>
          <slot></slot>
      </nav>
    `;
    buildShadowRoot(html, this);
  }
}

customElements.define('dj-nav', DJNav);
export default DJNav;
