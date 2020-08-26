import '../../../public/src/page/dj-contact.js';

let contactPage;

describe('DJContact Contact Page', () => {
  beforeEach(() => {
    contactPage = window.document.createElement('dj-contact'); 
    document.body.appendChild(contactPage);
  });

  afterEach(() => {
    document.body.getElementsByTagName('dj-contact')[0].remove();
  });

  it('renders correctly', () => {
    expect({ html: contactPage.shadowRoot.innerHTML }).toMatchSnapshot();
  });
});
