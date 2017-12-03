exports.config = {
  namespace: 'blaze-atoms',
  generateDistribution: true,
  bundles: [
    {
      components: ['demo-app']
    },
    {
      components: [
        'blaze-alert',
        'blaze-address',
        'blaze-address-heading',
        'blaze-avatar',
        'blaze-breadcrumbs',
        'blaze-breadcrumb'
      ]
    }
  ]
};

exports.devServer = {
  root: 'www',
  watchGlob: '**/**'
}
