import buildShadowRoot from '../lib/build-shadow-root.js';

class DJAbout extends HTMLElement {
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
        @media screen and (min-width: 735px) {
          dj-figure {
            float: right;
            width: 33%;
          }
        }
      </style>
      <dj-header>
      </dj-header>

      <main>
        <dj-h2>About David Johnson</dj-h2>
        <dj-figure src="https://pbs.twimg.com/media/CqAdEzeXYAAlpub.jpg:small" alt="First shoot on the River Clyde">
          First shoot on the River Clyde
        </dj-figure>
        <dj-p>
            This is an online resource for amateur photgrapher David Johnson. The goal of the website is showcase various pictures of landscapes in Scotland and boyond. 
        </dj-p>
        <dj-p>
            Starting in August 2016 and based in the city of Glasgow, David aims to capture all the beauty Scotland has to offer - whether it's in the inner city or on top of a Munro.
        </dj-p>
        <dj-p>
            As the journey continues, David aims to share more photos in the hope to build up a collection documenting the one of the
            most beautiful countries on Earth. 
        </dj-p>
      </main>

      <dj-footer>
      </dj-footer>
    `;
    buildShadowRoot(html,this);
  }
}

customElements.define('dj-about', DJAbout);
export default DJAbout;
