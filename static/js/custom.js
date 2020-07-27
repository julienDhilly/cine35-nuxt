$.when( $.ready ).then(function() {
   // tooltip
   $('[data-toggle="tooltip"]').tooltip()

   // menu
   $('#c35-btn-search-mobile').click(function() {
      var btn = $('#navbarSearchContext');
      if (btn.hasClass('show')) {
         $('#navbarSearchContext').removeClass('show');
      } else {
         $('#navbarSearchContext').addClass('show');
      }
   });
 });