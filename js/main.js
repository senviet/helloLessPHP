loadWeather('Berkeley',''); //@params location, woeid
setInterval(loadWeather, 60000000);

var findClicked = false;

/* Does your browser support geolocation? */
if ("geolocation" in navigator) {
    $('.js-geolocation').show();
} else {
    $('.js-geolocation').hide();
}

/* Where in the world are you? */
$('.js-geolocation').on('click', function() {

    if(findClicked == false)
    {
        findClicked = true;
        $('#find-wrapper').html('<p> Finding You <i class="fa fa-map-marker"></i> </p>');

        $('#weather').html("");
        $('#weather').css('padding-top', '0em');
        $('#weather').css('padding-bottom', '0em');
        $('#weather').css('height', '0.1em');
        $('#img').css('height', '20em');



        navigator.geolocation.getCurrentPosition(function(position)
        {
            //load weather using your lat/lng 	coordinates
            loadWeather(position.coords.latitude+','+position.coords.longitude);
        });
    }
});



//thank you James Fleeting for this awesome API!
// Docs at http://simpleweatherjs.com
function loadWeather(location, woeid) {
    $.simpleWeather({
        location: location,
        woeid: woeid,
        unit: 'f',
        success: function(weather) {

            html = '<p>'+ weather.city+', '+weather.region+'</p>';
            html += '<h2> <i class="icon-'+ weather.code+'"></i> '
                +  weather.temp+'&deg;'+weather.units.temp+'</h2>';
            html += '<p class="currently">'+weather.currently+'</p>';


            $('#weather').hover(


                function(){

                    $('#weather').css('height', '14em');
                    $('#img').css('height', '1em');
                    html = '<p>'+ weather.city+', '+weather.region+'</p>';

                    for(var i=0;i<weather.forecast.length;i++) {

                        html += '<p>'+ weather.forecast[i].day+ ' : <strong> ' + weather.forecast[i].high + '     </strong> <span class = "grey">' + weather.forecast[i].low + '</span> </p>';

                        $("#weather").html(html);
                    }
                },


                function(){

                    $('#weather').css('height', '8em');
                    $('#img').css('height', '10em');

                    html = '<p>'+ weather.city+', '+weather.region+'</p>';
                    html += '<h2> <i class="icon-'+ weather.code+'"></i> '+ weather.temp+'&deg;'+weather.units.temp+'</h2>';
                    html += '<p class="currently">'+weather.currently+'</p>';
                    $("#weather").html(html);


                });


            if(findClicked == true)
            {
                $('#find-wrapper').html('<p> Found You! <i class="fa fa-map-marker"></i> </p>');
            }

            $('#weather').css('padding', '2em');
            $('#weather').css('height', '8em');
            $('#img').css('height', '10em');

            setTimeout( function(){$("#weather").html(html);}, 200);

        },
        error: function(error) {
            $("#weather").html('<p>'+error+'</p>');
        }
    });
}



//ripple on click effect, big thanks to 440 design here on codepen for this
//check it out here  http://codepen.io/440design/pen/iEztk
$(function(){
    var ink, d, x, y;

    $(".ripplelink").click(function(e){

        if($(this).find(".ink").length === 0){
            $(this).prepend("<span class='ink'></span>");
        }

        ink = $(this).find(".ink");
        ink.removeClass("animate");

        if(!ink.height() && !ink.width()){
            d = Math.max($(this).outerWidth(), $(this).outerHeight());
            ink.css({height: d, width: d});
        }

        x = e.pageX - $(this).offset().left - ink.width()/2;
        y = e.pageY - $(this).offset().top - ink.height()/2;

        ink.css({top: y+'px', left: x+'px'}).addClass("animate");

    });
});