import '../../../public/src/component/dj-header.js';

let customHeader;

describe('DJHeader Custom Header', () => {
  beforeEach(() => {
    customHeader = window.document.createElement('dj-header'); 
    document.body.appendChild(customHeader);
  });

  afterEach(() => {
    document.body.getElementsByTagName('dj-header')[0].remove();
  });

  it('renders correctly', () => {
    expect({ html: customHeader.shadowRoot.innerHTML }).toMatchSnapshot();
  });

  it('renders correctly for transparent background', () => {
    customHeader.setAttribute('transparent', 'true');

    expect({ html: customHeader.shadowRoot.innerHTML }).toMatchSnapshot();
  });

  it('renders correctly for animation', () => {
    customHeader.setAttribute('animate', 'true');

    expect({ html: customHeader.shadowRoot.innerHTML }).toMatchSnapshot();
  });
});
