exports.config = {
  namespace: 'blaze-atoms',
  generateDistribution: true,
  bundles: [
    {
      components: [
        'blaze-alert',
        'blaze-address',
        'blaze-address-heading',
        'blaze-avatar'
      ]
    }
  ]
};

exports.devServer = {
  root: 'www',
  watchGlob: '**/**'
}
