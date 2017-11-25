exports.config = {
  namespace: 'mycomponent',
  generateDistribution: true,
  bundles: [
    { components: ['my-component'] }
  ]
};

exports.devServer = {
  root: 'www',
  watchGlob: '**/**'
}
