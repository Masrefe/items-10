$(document).ready(function () {

  // Preloader
    $(window).on("load", (function() {
        $("#loading").delay(1000).fadeOut(500);
            $("#loading-center").on("click", (function() {
            $("#loading").fadeOut(500);
        }))
    }));


// magnific popep for portfolio 
  $('.portfolio-img').magnificPopup({
        type: 'image',
        gallery: {
            enabled: true
        }
    });


// wow js active
     var wow = new WOW({
         mobile: false
         });
     wow.init(); 


//one page nav for smoth scroll
   $('.main-menu, .scroll-icon').onePageNav({
      currentClass: 'active',
      changeHash: false,
      scrollSpeed: 750,
      scrollThreshold: 0.5,
      filter: '',
      easing: 'swing'
    });

$('.slimmenu').slimmenu(
{
    resizeWidth: '991',
    collapserTitle: 'Main Menu',
    animSpeed:'medium',
    indentChildren: true,
    childrenIndenter: '&raquo;'
});

 // back to top with nice smoth scroll 
  if ($('#back-to-top').length) {
    var scrollTrigger = window.innerHeight, // px
    backToTop = function () {
      var scrollTop = $(window).scrollTop();
      if (scrollTop > scrollTrigger) {
        $('#back-to-top').addClass('show');
      } else {
        $('#back-to-top').removeClass('show');
      }
    };
    backToTop();
    $(window).on('scroll', function () {
      backToTop();
    });
    $('#back-to-top').on('click', function (e) {
      e.preventDefault();
      $('html,body').animate({
        scrollTop: 0
      }, 700);
    });
  }

// Show more item on icotope
   $('.scroll-icon').on('click', function(){
    $('.more-item').addClass('show-more');
   }); 

   $('.scroll-icon').on('click', function(){
    $('.icotope-more-item').addClass('block');
   });


});

$(document).ready(function(){

// header fixed
   var navOffset= $("nav").offset().top;
  
  $("nav").wrap('<div class="nav-placeholder"></div>');
  $(".nav-placeholder").height($("nav").outerHeight());

    $(window).scroll(function() {
      var scrollPos = $(window).scrollTop();

      if (scrollPos >= navOffset) {
        $("nav").addClass("fixed");
      }else{
        $("nav").removeClass("fixed");
      }
    });

// google map 
            function initialize() {
                var stylez = [
                  {
                    featureType: "all",
                    stylers: [
                      { hue: "#333" },
                      { saturation: -75 }
                    ]
                  },
                  {
                    featureType: "poi",
                    elementType: "label",
                    stylers: [
                      { visibility: "off" }
                    ]
                  }
                ];

                var latlng = new google.maps.LatLng(23.7805733,90.279238), // Stockholm
                
                    mapOptions = {
                        mapTypeControlOptions: {
                            mapTypeIds: [google.maps.MapTypeId.ROADMAP, "Edited"] 
                        },
                        zoom: 8,
                        center: latlng
                    },
                    
                    map = new google.maps.Map(document.getElementById("map_canvas"), mapOptions),
                    
                    styledMapType = new google.maps.StyledMapType(stylez, {name: "Edited"}),
                    
                    marker = new google.maps.Marker({
                        position: latlng, 
                        map: map, 
                        animation: google.maps.Animation.DROP,
                        title:"Hello World!"
                    }),
                    
                    infowindow = new google.maps.InfoWindow({
                        content: "<div>Hello</div>"
                    });
                    
                    map.mapTypes.set("Edited", styledMapType);
                    map.setMapTypeId('Edited');
                
                function toggleBounce () {
                    if (marker.getAnimation() != null) {
                        marker.setAnimation(null);
                    } else {
                        marker.setAnimation(google.maps.Animation.BOUNCE);
                    }
                }
                
                // Add click listener to toggle bounce
                google.maps.event.addListener(marker, 'click', function () {
                    toggleBounce();
                    infowindow.open(map, marker);
                    setTimeout(toggleBounce, 1500);
                });
            }

            // Call initialize -- in prod, add this to window.onload or some other DOM ready alternative
            initialize();


})