javascript: (function() {

    if (window.clippableFlickr) {
        return;
    }
    window.clippableFlickr = {};

    // Add jQuery to the website
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
    }

}());