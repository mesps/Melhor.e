
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue')
  },
  {
    path: '/cadastrar',
    name: 'cadastro',
    component: () => import('pages/Cadastro.vue')
  },
  {
    path: '/seliga',
    name: 'seliga',
    component: () => import('pages/SeLiga.vue')
  },
  {
    path: '/seliga/:lgbt',
    name: 'seligainfo',
    component: () => import('pages/SeLigaInfo.vue')
  },
  {
    path: '/usuario',
    name: 'usuario',
    component: () => import('pages/Usuario.vue')
  },
  {
    path: '/empresa/:id',
    name: 'perfilempresa',
    component: () => import('pages/perfilEmpresa.vue')
  },
  {
    path: '/home/:id',
    name: 'homeempresa',
    component: () => import('pages/perfilEmpresa.vue')
  },
  {
    path: '/melhorar/:id',
    name: 'melhorar',
    component: () => import('pages/Melhorar.vue')
  },
  {
    path: '/empresa/:id/feedback',
    name: 'feedback',
    component: () => import('pages/Feedback.vue')
  },
  {
    path: '/feedback/novo',
    name: 'feedbacknovo',
    component: () => import('pages/Feedback.vue')
  },
  {
    path: '/empresa/:id/politica',
    name: 'politicadiversidade',
    component: () => import('pages/PoliticaDeDiversidade.vue')
  },
  {
    path: '/:id/politica',
    name: 'empresapolitica',
    component: () => import('pages/PoliticaDeDiversidade.vue')
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
