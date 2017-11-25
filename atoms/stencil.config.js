exports.config = {
  namespace: 'blaze-atoms',
  generateDistribution: true,
  bundles: [
    { components: ['blaze-alert'] }
  ]
};

exports.devServer = {
  root: 'www',
  watchGlob: '**/**'
}
