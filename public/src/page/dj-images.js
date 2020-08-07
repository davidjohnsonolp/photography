import buildShadowRoot from '../lib/build-shadow-root.js';

class DJImages extends HTMLElement {
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
      <dj-h2>Images of beautiful Caledonia</dj-h2>
      <section class="images">
          <h3>Choose your image</h3>
          <ul>
              <li>
                  <a href="">
                      <img src="" alt="Sunset on River Clyde" />
                  </a>

              </li>
              <li>
                  <a href="">
                      <img src="" alt="Portree, Isle of Skye" />
                  </a>
              </li>
              <li>
                  <a href="">
                      <img src="" alt="Balmaha, Loch Lomond" />
                  </a>
              </li>
              <li>
                  <a href="">
                      <img src="" alt="Goatfell, Isle of Arran" />
                  </a>
              </li>
              <li>
                  <a href="">
                      <img src="" alt="Ben A'an overlooking Loch Katrine, Trossachs" />
                  </a>
              </li>
          </ul>
      </section>
      </main>

      <dj-footer>
      </dj-footer>
    `;
    buildShadowRoot(html,this);
  }
}

customElements.define('dj-images', DJImages);
export default DJImages;
