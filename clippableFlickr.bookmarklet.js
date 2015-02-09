javascript: (function() {
    var jQueryUrl = 'https://ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js';
    var scriptUrl = 'https://dweedul.github.io/bookmarklets/clippableFlickr.js?r=' + Math.random();
    var scriptNamespace = window.clippableFlickr;
    
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
    
    if (!window.jQuery) {
        loadScript(jQueryUrl, function() {
            if (scriptNamespace) {
                return;
            }
            scriptNamespace = {};
            
            loadScript(scriptUrl, scriptNamespace.init());
        });
    };

}());
