import '../../../public/src/page/dj-home.js';

let homePage;

describe('DJHome Home Page', () => {
  beforeEach(() => {
    homePage = window.document.createElement('dj-home'); 
    document.body.appendChild(homePage);
  });

  afterEach(() => {
    document.body.getElementsByTagName('dj-home')[0].remove();
  });

  it('renders correctly', () => {
    expect({ html: homePage.shadowRoot.innerHTML }).toMatchSnapshot();
  });
});