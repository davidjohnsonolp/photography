import '../../../public/src/page/dj-images.js';

let imagesPage;

describe('DJImages Images Page', () => {
  beforeEach(() => {
    imagesPage = window.document.createElement('dj-images'); 
    document.body.appendChild(imagesPage);
  });

  afterEach(() => {
    document.body.getElementsByTagName('dj-images')[0].remove();
  });

  it('renders correctly', () => {
    expect({ html: imagesPage.shadowRoot.innerHTML }).toMatchSnapshot();
  });
});
