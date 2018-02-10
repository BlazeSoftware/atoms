exports.config = {
  namespace: 'blaze-atoms',
  generateDistribution: true,
  bundles: [
    { components: ['blaze-accordion', 'blaze-accordion-pane'] },
    { components: ['blaze-address', 'blaze-address-heading'] },
    { components: ['blaze-alert'] },
    { components: ['blaze-avatar'] },
    { components: ['blaze-badge'] },
    { components: ['blaze-breadcrumb', 'blaze-breadcrumbs'] },
    { components: ['blaze-card', 'blaze-card-body', 'blaze-card-footer', 'blaze-card-header'] },
    { components: ['blaze-drawer'] },
    { components: ['blaze-image'] },
    { components: ['blaze-modal'] },
    { components: ['blaze-panel'] },
    { components: ['blaze-tabs', 'blaze-tab'] },
    { components: ['blaze-toasts'] },
    { components: ['blaze-toggle'] },
    { components: ['demo-app'] }
  ]
};

exports.devServer = {
  root: 'www',
  watchGlob: '**/**'
}
