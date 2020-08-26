import '../../../public/src/component/dj-figure.js';

let customFigure;

describe('DJFigure Custom Figure', () => {
  beforeEach(() => {
    customFigure = window.document.createElement('dj-figure'); 
    document.body.appendChild(customFigure);
  });

  afterEach(() => {
    document.body.getElementsByTagName('dj-figure')[0].remove();
  });

  it('renders correctly', () => {
    expect({ html: customFigure.shadowRoot.innerHTML }).toMatchSnapshot();
  });

  it('renders correctly with src', () => {
    customFigure.setAttribute('src', 'http://www.test.com/test.jpg');

    expect({ html: customFigure.shadowRoot.innerHTML }).toMatchSnapshot();
  });

  it('renders correctly with alt', () => {
    customFigure.setAttribute('alt', 'Test Alt');

    expect({ html: customFigure.shadowRoot.innerHTML }).toMatchSnapshot();
  });
});
