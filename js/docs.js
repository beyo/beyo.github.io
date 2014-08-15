
require([
  'jquery',
  'prettify'
], function ($, prettify) {


  $(function() {

    $('pre').addClass('prettyprint');
    prettify();

  });

});