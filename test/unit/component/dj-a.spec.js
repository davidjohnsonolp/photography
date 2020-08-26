import '../../../public/src/component/dj-a.js';

let customAnchor;

describe('DJA Custom Anchor', () => {
  beforeEach(() => {
    customAnchor = window.document.createElement('dj-a'); 
    document.body.appendChild(customAnchor);
  });

  afterEach(() => {
    document.body.getElementsByTagName('dj-a')[0].remove();
  });

  it('renders correctly', () => {
    expect({ html: customAnchor.shadowRoot.innerHTML }).toMatchSnapshot();
  });

  it('renders correctly with href', () => {
    customAnchor.setAttribute('href', 'http://www.test.com/');

    expect({ html: customAnchor.shadowRoot.innerHTML }).toMatchSnapshot();
  });
});