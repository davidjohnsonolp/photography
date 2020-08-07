import {Router} from './lib/vaadin-router.js';
import './component/dj-a.js';
import './component/dj-nav.js';
import './component/dj-h2.js';
import './component/dj-p.js';
import './component/dj-figure.js';
import './component/dj-header.js';
import './component/dj-footer.js';
import './page/dj-home.js';
import './page/dj-about.js';
import './page/dj-contact.js';
import './page/dj-images.js';

const outlet = document.querySelector('body');
const router = new Router(outlet);
router.setRoutes([
  {path: '/',     component: 'dj-home'},
  {path: '/about', component: 'dj-about'},
  {path: '/contact', component: 'dj-contact'},
  {path: '/images', component: 'dj-images'},
  {path: '(.*)', redirect: '/'},
]);