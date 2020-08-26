import '../../../public/src/component/dj-footer.js';

let customFooter;

describe('DJFooter Custom Footer', () => {
  beforeEach(() => {
    customFooter = window.document.createElement('dj-footer'); 
    document.body.appendChild(customFooter);
  });

  afterEach(() => {
    document.body.getElementsByTagName('dj-footer')[0].remove();
  });

  it('renders correctly', () => {
    expect({ html: customFooter.shadowRoot.innerHTML }).toMatchSnapshot();
  });

  it('renders correctly for transparent background', () => {
    customFooter.setAttribute('transparent', 'true');

    expect({ html: customFooter.shadowRoot.innerHTML }).toMatchSnapshot();
  });

  it('renders correctly for animation', () => {
    customFooter.setAttribute('animate', 'true');

    expect({ html: customFooter.shadowRoot.innerHTML }).toMatchSnapshot();
  });
});