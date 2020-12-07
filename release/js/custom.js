$.when( $.ready ).then(function() {

   // fav city business
   const cookieValue = getCookie('current-city');
   if (!cookieValue) {
      $('#exampleModal').modal('toggle');
   } else if(cookieValue !== 'null') {
      var option = $('#select-city-elt option[value="'+cookieValue+'"]');
      if (option) {
         option.prop('selected', true);
      }
   }

   $('#never-ask-city').on('click', function() {
      saveCityNull();
   });
   $('#save-city-btn').on('click', function() {
      saveCity();
   });
   $('#btn-change-city').on('click', function() {
      $('#exampleModal').modal('toggle');
   });

   // geooc
   $('.c35-geoloc-btn').click(function() {
      navigator.geolocation.getCurrentPosition(function(position) {
         window.location = '/cinemas?latitude=' + position.coords.latitude + '&longitude=' + position.coords.longitude;
      });
   });


   // tooltip
   $('[data-toggle="tooltip"]').tooltip();

   // menu
   $('#c35-btn-search-mobile').click(function() {
      var btn = $('#navbarSearchContext');
      if (btn.hasClass('show')) {
         $('#navbarSearchContext').removeClass('show');
      } else {
         $('#navbarSearchContext').addClass('show');
      }
   });

   // ready tab index from query
   var urlParams = new URLSearchParams(window.location.search);
   if (urlParams.has('tabIndex')) {
      var tabIndex = urlParams.get('tabIndex');
      $('.c35-nav-tabs').each(function(index, elt) {
         $(elt).find('.nav-link.active').removeClass('active');
         $(elt).children().eq(tabIndex).find('.nav-link').addClass('active');
      });

      $('.c35-tab-content').each(function(index, elt) {
         $(elt).find('.tab-pane.active').removeClass('active');
         $(elt).children().eq(tabIndex).addClass('active').addClass('show');
      });
   }

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

   // prog list filters
   var progListActiveFilters = [];
   var progListElts = $('#c35-prog-list-filters-values').find('.c35-prog-schedule');

   $('.c35-prog-list-filters').find('.c35-prog-list-filter > input').change(function(event) {
      var elt = event.currentTarget;
      var isChecked = $(elt).is(':checked');
      var filterValue = elt.attributes.value.value;
      var filterGroup = elt.attributes['data-group'].value;

      if (!isChecked) {
         var index = progListActiveFilters.findIndex(function(filter) {
            return filter.value === filterValue && filter.group === filterGroup;
         });
         if (index > -1) {
            progListActiveFilters.splice(index, 1);
         }
      } else {
         progListActiveFilters.push({
            value: filterValue,
            group: filterGroup
         });
      }

      if (progListActiveFilters.length === 0) {
         $('#c35-prog-list-filters-values').find('.c35-prog-schedule').show();
      } else {
         progListElts.each(function(index, elt) {
            var valid = progListActiveFilters.some(function(filter) {
               var eltValue = $(elt).attr('data-' + filter.group);
               return eltValue === filter.value;
            });

            if (valid) {
               $(elt).show();
            } else {
               $(elt).hide();
            }
         });
      }
   });

   // prog list filtersdisplay on mobile
   $('#c35-btn-movie-filters-mobile').click(function() {
      console.log('jere');
      if ($('#c35-prog-list-filters-mobile-container').hasClass('active')) {
         $('#c35-prog-list-filters-mobile-container').removeClass('active');
      } else {
         $('#c35-prog-list-filters-mobile-container').addClass('active');
      }
   });

   $('#c35-btn-filter-prog-list-ok').click(function() {
      $('#c35-prog-list-filters-mobile-container').removeClass('active');
   });
 });

 function getCookie(cname) {
   var name = cname + "=";
   var decodedCookie = decodeURIComponent(document.cookie);
   var ca = decodedCookie.split(';');
   for(var i = 0; i <ca.length; i++) {
     var c = ca[i];
     while (c.charAt(0) == ' ') {
       c = c.substring(1);
     }
     if (c.indexOf(name) == 0) {
       return c.substring(name.length, c.length);
     }
   }
   return "";
 }

 function setCookie(cname, cvalue, exdays) {
   var d = new Date();
   d.setTime(d.getTime() + (exdays*24*60*60*1000));
   var expires = "expires="+ d.toUTCString();
   document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
 }

function  saveCityNull() {
    setCookie('current-city', 'null', 300);
 }

 function  saveCity() {
    const value = $('#select-city-elt').val();
    setCookie('current-city', value, 300);
    window.location.reload();
 }
