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

   // onrelease filters display on mobile
   $('#c35-btn-movie-filters-mobile').click(function() {
      if ($('#c35-movie-filter-mobile-container').hasClass('active')) {
         $('#c35-movie-filter-mobile-container').removeClass('active');
      } else {
         $('#c35-movie-filter-mobile-container').addClass('active');
      }
   });

   $('#c35-btn-filter-movies-ok').click(function() {
      $('#c35-movie-filter-mobile-container').removeClass('active');
   });

   // onrelease filters business
   var filters = [];
   $('.c35-movie-list-filters').find('.c35-filter-input').change(function(event) {
      var elt = event.currentTarget;
      var value = elt.attributes['data-filter-value'].value;
      var isChecked = $(elt).is(':checked');

      if (isChecked) {
         filters.push(value);
      } else {
         var index = filters.findIndex(function(v) {
            return v === value
         });
         if (index > -1) {
            filters.splice(index, 1);
         }
      }

      var movies = $('.c35-movie-preview');
      movies.each(function(index, movie) {
         if (filters.length > 0) {
            var value = $(movie).attr('data-filter-pegi');
            const rangeValues = getRangeValues(value);
            const isValid = rangeValues.some(function(value) {
               return filters.includes(value) === true;
            });

            if (isValid === true) {
               $(movie).parent().show();
            } else {
               $(movie).parent().hide();
            }
         } else {
            $(movie).parent().show();
         }
      });
   });

   function getRangeValues(value) {
      switch(value) {
         case '0': return ['0'];
         case '3': return ['3'];
         case '6': return ['6', '3'];
         case '10': return ['10', '6', '3'];
         case '12': return ['12'];
         case '16': return ['12', '16'];
         case '18': return ['12', '16', '18'];
      }
   }
 });