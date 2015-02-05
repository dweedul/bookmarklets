javascript: (function() {
    var min_jQuery = "2.1.3";

    // Add jQuery
    if (!window.jQuery) {
        var jQ = document.createElement('script');
        jQ.setAttribute('type', 'text/javascript');
        jQ.setAttribute('charset', 'UTF-8');
        jQ.src = 'https://ajax.googleapis.com/ajax/libs/jquery/' + min_jQuery + '/jquery.min.js';
        document.documentElement.appendChild(jQ);
    }


    if (window.clippableFlickr) {
        return;
    }
    window.clippableFlickr = {};

    var script = document.createElement('script');
    script.setAttribute('type', 'text/javascript');
    script.setAttribute('charset', 'UTF-8');
    script.setAttribute('src', 'https://dweedul.github.io/bookmarklets/clippableFlickr.js?r=' + Math.random());
    document.documentElement.appendChild(script);

    script.onload = script.onreadstatechange = function() {
        var rs = script.readyState;
        if (!rs || rs === 'loaded' || rs === 'complete') {
            script.onload = script.onreadstatechange = null;

            window.clippableFlickr.init();
        }
    };

}());