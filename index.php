<!DOCTYPE html><html class=''>
<head><meta charset='UTF-8'>
    <meta name="robots" content="noindex">
    <meta name="viewport" content="width=device-width">
    <!-- latest jquery -->
    <script src = "//cdnjs.cloudflare.com/ajax/libs/jquery/2.1.1/jquery.js"></script>
    <!-- James Fleeting's simpleWeather API -->
    <script src="//cdnjs.cloudflare.com/ajax/libs/jquery.simpleWeather/3.0.2/jquery.simpleWeather.min.js"></script>
    <!-- ROBOTO -->
    <link href='http://fonts.googleapis.com/css?family=Roboto:400,300,500,700' rel='stylesheet' type='text/css'>
    <!-- Font Awesome (map icon) -->
    <link rel="stylesheet" href="//maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css">
    <!-- Pure.css framework -->
    <link rel="stylesheet" href="http://yui.yahooapis.com/pure/0.6.0/pure-min.css">
    <link rel="stylesheet" href="./css/output.css">
</head>
    <body>
        <div class="pure-g content shadow">

            <div class="pure-u-1">
                <div id = "img" class = "transition"> </div>
            </div>
            <div class="pure-u-1">
                <div id="weather" class = "transition"> </div>
            </div>
            <div class = "is-center ripplelink js-geolocation is-center" id = "find-wrapper">
                <p class = "find-text"> Find Me <i class="fa fa-map-marker"></i> </p>
            </div>
        </div>
        <script src="./js/main.js"></script>
    </body>
</html>