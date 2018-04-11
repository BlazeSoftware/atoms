exports.config = {
  namespace: 'blaze-atoms',
  outputTargets: [
    { type: 'dist' },
    { type: 'www' }
  ]
};

exports.devServer = {
  root: 'www',
  watchGlob: '**/**'
}
