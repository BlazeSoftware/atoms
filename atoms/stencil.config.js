exports.config = {
  namespace: 'blaze-atoms',
  generateDistribution: true,
  bundles: [
    {
      components: [
        'blaze-accordion',
        'blaze-accordion-pane',
        'blaze-address',
        'blaze-address-heading',
        'blaze-alert',
        'blaze-avatar',
        'blaze-badge',
        'blaze-breadcrumbs',
        'blaze-breadcrumb',
        'blaze-card',
        'blaze-card-body',
        'blaze-card-footer',
        'blaze-card-header',
        'blaze-image',
        'blaze-modal',
        'blaze-panel',
        'blaze-toasts',
        'blaze-toggle'
      ]
    },
    {
      components: ['demo-app']
    }
  ]
};

exports.devServer = {
  root: 'www',
  watchGlob: '**/**'
}
