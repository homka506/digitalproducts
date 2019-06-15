import $ from 'jquery';
import 'what-input';

// Foundation JS relies on a global varaible. In ES6, all imports are hoisted
// to the top of the file so if we used`import` to import Foundation,
// it would execute earlier than we have assigned the global variable.
// This is why we have to use CommonJS require() here since it doesn't
// have the hoisting behavior.
window.jQuery = $;
// require('foundation-sites');

// If you want to pick and choose which modules to include, comment out the above and uncomment
// the line below
import './lib/foundation-explicit-pieces';

import './lib/slick.min.js';

let worksSlider = $(".ba-slider__works");
worksSlider.slick({
    ainfinite: false,
    dots: true,
    arrows:true,
    prevArrow: worksSlider.find('[data-prev]'),
    nextArrow: worksSlider.find('[data-next]')
    
});

$(document).foundation();
function baMap() {
    //create map and asign it to the baMap var
    let mapCenter = {
        lat: 40.678177,
        lng: -73.944160
    };

    let baMap = new google.maps.Map(document.getElementById('ba-map'), {
        center: mapCenter,
        zoom: 12,
        icon: 'img/marker.svg'
       
    });

    // The marker, positioned in mapcenter
    let cities = {
        rome: {
            lat: 41.902782,
            lng: 12.496365
        },
        paris: {
            lat: 48.856613,
            lng: 2.352222
        },
        madrid: {
            lat: 40.416775,
            lng: -3.703790
        },
    
    }

    let mapMarkers = [];
    for (let key in cities) {
        var marker = new google.maps.Marker({
            position: mapCenter,
            map: baMap,
            icon: 'img/marker.svg'
        });

        

        mapMarkers[key] = marker; //save markers in object
    }

    //on select city
    $('#city-select').on('change', function (e) {
        baMap.panTo(cities[this.value]);
    });

} // function ba-map


$(document).ready(function (e) {
    baMap();
})();		

let teamSlider = $('.ba-team-slider');
teamSlider.slick({
  centerPadding: '60px',
  slidesToShow: 1,
  ainfinite: false,
    dots: true,
  prevArrow: teamSlider.find('[data-prev]'),
  nextArrow: teamSlider.find('[data-next]'),
  responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: true,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 3
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: true,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 1
      }
    }
  ]
});