import '../../../public/src/component/dj-h2.js';

let customH2;

describe('DJH2 Custom H2', () => {
  beforeEach(() => {
    customH2 = window.document.createElement('dj-h2'); 
    document.body.appendChild(customH2);
  });

  afterEach(() => {
    document.body.getElementsByTagName('dj-h2')[0].remove();
  });

  it('renders correctly', () => {
    expect({ html: customH2.shadowRoot.innerHTML }).toMatchSnapshot();
  });
});