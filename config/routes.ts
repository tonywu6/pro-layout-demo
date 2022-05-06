export default [
  {
    path: '/',
    redirect: '/index',
  },
  {
    path: '/:numeric([0-9]+)',
    name: 'Numbers only',
    hideInMenu: true,
    component: './RouterInfo',
  },
  {
    path: '/:generic',
    name: 'Everything else',
    hideInMenu: true,
    component: './RouterInfo',
  },
  {
    component: './404',
  },
];
