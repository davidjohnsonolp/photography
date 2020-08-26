import '../../../public/src/component/dj-nav.js';

let customNav;

describe('DJNav Custom Nav', () => {
  beforeEach(() => {
    customNav = window.document.createElement('dj-nav'); 
    document.body.appendChild(customNav);
  });

  afterEach(() => {
    document.body.getElementsByTagName('dj-nav')[0].remove();
  });

  it('renders correctly', () => {
    expect({ html: customNav.shadowRoot.innerHTML }).toMatchSnapshot();
  });
});