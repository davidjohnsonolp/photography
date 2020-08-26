import buildShadowRoot from '../../../public/src/lib/build-shadow-root.js';

describe('Build Shadow Root', () => {
  const html = '<p></p>';
  const elem = document.createElement('div');
  it('returns a shadowRoot object with attributes', () => {
    const shadowRoot = buildShadowRoot(html, elem);

    expect(shadowRoot.mode).toBe('open');
    expect(shadowRoot.innerHTML).toBe(html);

    expect(elem.shadowRoot).toEqual(shadowRoot);
  });
});
