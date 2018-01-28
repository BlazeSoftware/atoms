exports.config = {
  namespace: 'blaze-atoms',
  generateDistribution: true,
  bundles: [
    {
      components: ['demo-app']
    },
    {
      components: [
        'blaze-accordion',
        'blaze-accordion-pane',
        'blaze-alert',
        'blaze-address',
        'blaze-address-heading',
        'blaze-avatar',
        'blaze-breadcrumbs',
        'blaze-breadcrumb',
        'blaze-card',
        'blaze-card-header',
        'blaze-card-body',
        'blaze-card-footer',
        'blaze-image',
        'blaze-modal',
        'blaze-panel',
        'blaze-toasts',
        'blaze-toggle'
      ]
    }
  ]
};

exports.devServer = {
  root: 'www',
  watchGlob: '**/**'
}
