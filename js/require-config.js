
+function () {

  require.config({
    enforceDefine: true,
    baseUrl: '/js',
    shim: {
      'jquery@2.1.1': {
        exports: '$'
      },
      'bootstrap@3.2.0': {
        deps: [
          'jquery'
        ],
        exports: '$'        // need to export something.... so... export jQuery!
      },
      'prettify@1.0.1': {
        deps: [
        'css!/css/prettify/desert.css'
        ],
        exports: 'prettyPrint'
      }
    },
    paths: {
      'css@0.1.5': 'lib/css.min',
      'jquery@2.1.1': 'lib/jquery.min',
      'bootstrap@3.2.0': 'lib/bootstrap.min',
      'prettify@1.0.1': 'lib/prettify.min'
    },
    map: {
      '*': {
        'css': 'css@0.1.5',
        'jquery': 'jquery@2.1.1',
        'bootstrap': 'bootstrap@3.2.0',
        'prettify': 'prettify@1.0.1'
      }
    }
  });

  require(['bootstrap']);

}();