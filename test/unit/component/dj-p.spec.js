import '../../../public/src/component/dj-p.js';

let customP;

describe('DJP Custom Paragraph', () => {
  beforeEach(() => {
    customP = window.document.createElement('dj-p'); 
    document.body.appendChild(customP);
  });

  afterEach(() => {
    document.body.getElementsByTagName('dj-p')[0].remove();
  });

  it('renders correctly', () => {
    expect({ html: customP.shadowRoot.innerHTML }).toMatchSnapshot();
  });
});