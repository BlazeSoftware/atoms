exports.config = {
  namespace: 'blaze-atoms',
  generateDistribution: true,
  bundles: [
    {
      components: [
        'blaze-alert',
        'blaze-address',
        'blaze-address-heading'
      ]
    }
  ]
};

exports.devServer = {
  root: 'www',
  watchGlob: '**/**'
}
