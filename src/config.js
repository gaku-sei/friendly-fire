System.config({
  map: {
    app: 'js/app.js',
    controllers: 'js/controllers.js',
    services: 'js/services.js',
    ionic: 'lib/ionic/js/ionic.bundle.min.js',
    'fast-json-patch': 'lib/fast-json-patch/dist/json-patch.min.js',
    'fast-json-patch-duplex': 'lib/fast-json-patch/dist/json-patch-duplex.min.js',
    corejs: 'lib/core.js/client/core.min.js'
  },
  meta: {
    'lib/ionic/js/ionic.bundle.min.js': {
      format: 'global',
      exports: 'angular'
    }
  }
});
