import Router from './router/index.js';
import tooltip from './components/tooltip/index.js';

tooltip.initialize();

const router = Router.instance();

router
  .addRoute(/^$/, 'dashboard')
  .addRoute(/^products$/, 'products/list')
  .addRoute(/^products\/add$/, 'products/edit')
  .addRoute(/^products\/([\w()-]+)$/, 'products/edit')
  .addRoute(/^sales$/, 'sales')
  .addRoute(/^categories$/, 'categories')
  .addRoute(/^404\/?$/, 'error404')
  .setNotFoundPagePath('error404')
  .listen();


//todo возможно перенести в другое место
const toggleButton = document.querySelector('[data-element="sidebarToggler"]');
if (toggleButton) {
  toggleButton.addEventListener('click', () => {
    if (document.body.classList.contains('is-collapsed-sidebar')) {
      document.body.classList.remove('is-collapsed-sidebar');
    } else {
      document.body.classList.add('is-collapsed-sidebar');
    }
  });
}
