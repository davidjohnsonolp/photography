import '../../../public/src/page/dj-about.js';

let aboutPage;

describe('DJAbout About Page', () => {
  beforeEach(() => {
    aboutPage = window.document.createElement('dj-about'); 
    document.body.appendChild(aboutPage);
  });

  afterEach(() => {
    document.body.getElementsByTagName('dj-about')[0].remove();
  });

  it('renders correctly', () => {
    expect({ html: aboutPage.shadowRoot.innerHTML }).toMatchSnapshot();
  });
});