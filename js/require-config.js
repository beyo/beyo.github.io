
+function () {

  require.config({
    enforceDefine: true,
    baseUrl: 'js',
    shim: {
      'jquery@2.1.1': {
        exports: '$'
      },
      'bootstrap@3.1.1': {
        deps: [ 
          'jquery'//,
          //'css!/css/bootstrap.min.css',
          //'css!/css/font-awesome.min.css'
        ],
        exports: '$'        // need to export something.... so... export jQuery!
      }
    },
    paths: {
      'css@0.1.2': 'lib/css.min',
      'jquery@2.1.1': 'lib/jquery.min',
      'bootstrap@3.1.1': 'lib/bootstrap.min'
    },
    map: {
      '*': {
        'css': 'css@0.1.2',
        'jquery': 'jquery@2.1.1',
        'bootstrap': 'bootstrap@3.1.1'
      }
    }
  });

  require(['bootstrap']);

}();