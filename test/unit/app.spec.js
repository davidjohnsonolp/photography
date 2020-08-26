import { router } from '../../public/src/app.js';

describe('Router', () => {
  it('returns correct routes', () => {
    expect(router.getRoutes()).toMatchObject([
      {path: '/',     component: 'dj-home'},
      {path: '/about', component: 'dj-about'},
      {path: '/contact', component: 'dj-contact'},
      {path: '/images', component: 'dj-images'},
      {path: '(.*)', redirect: '/'},
    ]);
  });
});
