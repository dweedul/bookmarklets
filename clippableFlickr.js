window.clippableFlickr = (function(window, document){
    
        
    var body = document.body,
        head = document.head || document.getElementsByTagNameNS('head')[0],
        
        title = document.title,
        host = document.location.host;
    
    var min_jQuery = "2.1.3";
    
    if (window.jQuery === undefined || window.jQuery.fn.jquery < min_jQuery) {
        var done = false;
        var jQ = document.createElement('script');
        jQ.src = 'https://ajax.googleapis.com/ajax/libs/jquery/' + min_jQuery + '/jquery.min.js'
        jQ.onload = jQ.onreadstatechange = function(){
            if (!done && (!this.readyState || this.readyState == 'loaded' || this.readyState == 'complete')){
                done = true;
            }
        };
        head.appendChild(jQ);
    }
    
    var app = {};

    app.init = function(){
        alert("apples");
    }
    
    return app;
    
})(window, window.document);