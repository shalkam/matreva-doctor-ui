import loadable from 'helpers/loadable';

export default {
  code: loadable(import('./code')),
  logout: loadable(import('./logout')),
  stripe: loadable(import('./stripe')),
  logoutComplete: loadable(import('./logoutComplete'))
};
