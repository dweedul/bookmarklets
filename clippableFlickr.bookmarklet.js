javascript: (function() {
    var jQueryUrl = 'https://ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js'
    var scriptUrl = 'https://dweedul.github.io/bookmarklets/clippableFlickr.js?r=' + Math.random();
    
    function loadScript(url, success) {
        var script=document.createElement('script');
        script.setAttribute('type', 'text/javascript');
        script.setAttribute('charset', 'UTF-8');
        script.setAttribute('src', url);
        document.documentElement.appendChild(script);
        
        script.onload = script.onreadystatechange = function() {
            if (!script.readyState || script.readyState === 'loaded' || script.readyState === 'complete') {
                script.onload = script.onreadystatechange = null;
                success();
            }
        }
    }
    
    // Add jQuery
    if (!window.jQuery) {
        loadScript(jQueryUrl, )
        var jQ = document.createElement('script');
        jQ.setAttribute('type', 'text/javascript');
        jQ.setAttribute('charset', 'UTF-8');
        jQ.src = 'https://ajax.googleapis.com/ajax/libs/jquery/' + min_jQuery + '/jquery.min.js';
        document.documentElement.appendChild(jQ);

    };


    if (window.clippableFlickr) {
        return;
    }
    window.clippableFlickr = {};

    var script = document.createElement('script');
    script.setAttribute('type', 'text/javascript');
    script.setAttribute('charset', 'UTF-8');
    script.setAttribute('src', 'https://dweedul.github.io/bookmarklets/clippableFlickr.js?r=' + Math.random());
    document.documentElement.appendChild(script);

    script.onload = script.onreadystatechange = function() {
        var rs = script.readyState;
        if (!rs || rs === 'loaded' || rs === 'complete') {
            script.onload = script.onreadystatechange = null;

            window.clippableFlickr.init();
        }
    };

}());
