var AppModule = (function($, window, undefined) {
  var init = function() {
    console.log('App:init');
  };

  return {
    init:init
  };

})(jQuery, window);

jQuery(function($) {
  AppModule.init();
});
