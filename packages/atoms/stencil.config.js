exports.config = {
  namespace: 'blaze-atoms',
  outputTargets:[
    {
      type: 'dist'
    }
  ]
};

exports.devServer = {
  root: 'www',
  watchGlob: '**/**'
}
