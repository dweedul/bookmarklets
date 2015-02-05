window.clippableFlickr = (function(window, document){
    
        
    var body = document.body,
        head = document.head || document.getElementsByTagNameNS('head')[0],
        
        title = document.title,
        host = document.location.host;
        
    var min_jQuery = "2.1.3";
    
    var _loadJQuery = function(){
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
    }
    
    var app = {};

    app.init = function(){
        _loadJQuery();
        
        $( ".zoom-large" ).css( "border", "3px solid red" );
        
        var iframeHTML = ''
    		+	'<!DOCTYPE html>'
    		+	'<html>'
    		+	'<head>'
    
    		+		'<title>' + title + '</title>'
    
    		+	'</head>'
    		+	'<body id="body">'
    
    		+		'<div id="bodyContent">'
    		
    		+           
    		
    		+       '</div>'

    		+	'</body>'
    		+	'</html>'
    }
    
    return app;
    
})(window, window.document);