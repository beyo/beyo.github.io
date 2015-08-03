
require([
  'jquery'
], function ($) {

  $(function() {


    function buildMenu() {
      var menu = $('<ul>', {
        'id': 'sidebar',
        'class': 'nav nav-stacked'
      });
      var menuStack = [menu];

      $('h2[id],h3[id]', '.beyo-docs').each(function () {
        var level = this.tagName.substr(1) - 1;

        if (level > menuStack.length) {
          menuStack.push( $('<ul>', {
            'class': 'nav'
          }).appendTo( menuStack[menuStack.length - 1].find('li:last') ) );
        } else if (level < menuStack.length) {
          menuStack.pop();
        }

        menuStack[menuStack.length - 1].append($('<li>', {
          'append': $('<a>', {
            'attr': {
              'href': '#' + $(this).attr('id')
            },
            'text': $(this).text()
          })
        }));
      });

      return menu.appendTo('#rightCol');
    }

    /* activate sidebar */
    buildMenu().affix({
      offset: {
        top: 1,
        bottom: 300
      }
    });

    /* activate scrollspy menu */
    var $body   = $(document.body);
    var navHeight = $('.navbar').outerHeight(true) + 10;

    $body.scrollspy({
      target: '#rightCol',
      offset: navHeight
    });

    /* smooth scrolling sections */
    $('a[href*=#]:not([href=#])').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
          if (target.length) {
            $('html,body').animate({
              scrollTop: target.offset().top - 50
            }, 1000);
            return false;
          }
        }
    });

  });

});