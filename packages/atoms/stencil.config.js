exports.config = {
  namespace: 'blaze-atoms',
  outputTargets:[
    {
      type: 'dist'
    },
    {
      type: 'www',
      serviceWorker: false
    }
  ],
  copy: [
    { src: 'blaze.min.css' }
  ]
};

exports.devServer = {
  root: 'www',
  watchGlob: '**/**'
}
