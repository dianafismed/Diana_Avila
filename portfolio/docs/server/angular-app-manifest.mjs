
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/Diana_Avila/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/Diana_Avila"
  },
  {
    "renderMode": 2,
    "route": "/Diana_Avila/grades"
  },
  {
    "renderMode": 2,
    "route": "/Diana_Avila/projects"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 9140, hash: '56b4cbde59246d187be0e7ef4eb6a844312ab0758cf73259628192d050906a61', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1747, hash: '357f450b140e61f5171bdaed92c097ef72ffb869dc0e922063500c85d7e1920e', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'grades/index.html': {size: 19387, hash: 'ce2a861b45f11abae1c2aaf1aaf82346dc49ef5e68dd995e13976f6a3acb2e19', text: () => import('./assets-chunks/grades_index_html.mjs').then(m => m.default)},
    'projects/index.html': {size: 24795, hash: '6bf23c44c385ac1eb11cc318168d5137efd044484276c46106cb53424d851ee2', text: () => import('./assets-chunks/projects_index_html.mjs').then(m => m.default)},
    'index.html': {size: 20524, hash: '093c7c397b9f69591dc0823447c88d93bc9a1b1bad45ba592764075d24d67d09', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles.css': {size: 239381, hash: 'lP4eRcc8NAc', text: () => import('./assets-chunks/styles_css.mjs').then(m => m.default)}
  },
};
