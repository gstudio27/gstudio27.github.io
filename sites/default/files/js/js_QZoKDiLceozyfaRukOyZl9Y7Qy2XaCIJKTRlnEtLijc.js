/* global a2a*/
(function (Drupal) {
  'use strict';

  Drupal.behaviors.addToAny = {
    attach: function (context, settings) {
      // If not the full document (it's probably AJAX), and window.a2a exists
      if (context !== document && window.a2a) {
        a2a.init_all('page'); // Init all uninitiated AddToAny instances
      }
    }
  };

})(Drupal);
;
(function ($, Drupal, drupalSettings) {

    'use strict';
	
	Drupal.behaviors.active_class = {
	  attach: function (context) {
	    
	  }
	}
	// get запрос
    var pathname_get = window.location.search; 
    // Относительный путь + get запрос
    var pathname = window.location.pathname + pathname_get; 

    // Берем относительный путь и разбиваем его. Получаем массив.
    var PathArray = window.location.pathname.split( '/' ); 
    // Первый уровень. Т.к. www.site.ru[0]/[1]/[2]/[3]
    var firstStep = PathArray[1]; 
    // Первый уровень. Т.к. www.site.ru[0]/[1]/[2]/[3]
    var secondStep = PathArray[2]; 

    // Для всех ссылок, в href которых лежит относительный путь страницы - задаем класс "active"
    $('a[href="' + pathname + '"]').addClass('active');
    $('a[href*="' + firstStep + '"]').closest('li').addClass('-active-trail');



})(jQuery, Drupal, drupalSettings);
;
(function ($, Drupal, drupalSettings) {

    'use strict';

    Drupal.behaviors.global_styling = {
        attach: function (context) {

            var h = 150;
            var el = document.getElementsByClassName('am')[0];

            window.onscroll = function () {
                var scroll = window.pageYOffset || document.documentElement.scrollTop;

                if ((scroll >= h && !(el.classList.contains('active'))) || (scroll < h && el.classList.contains('active'))) {
                    el.classList.toggle('active');
                }
            }
            $('#block-classier-content a[href^="#"]').click(function () { 
                var elementClick = $(this).attr("href");
                var destination = $(elementClick).offset().top - 75;
                $("html, body").animate( { scrollTop: destination }, 500);
                return false;
            });
        }
    }


})(jQuery, Drupal, drupalSettings);;
