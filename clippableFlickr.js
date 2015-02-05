window.clippableFlickr = (function(window, document){
    
        
    var body = document.body,
        head = document.head || document.getElementsByTagNameNS('head')[0],
        
        title = document.title,
        host = document.location.host;
        

    var app = {};

    app.init = function(){
        var username = $('a.owner-name.truncate').text();
        var photoTitle = $('span.meta-field.photo-title').text();
        var bigImg = $('img.zoom-large');
        
        var customTitle = photoTitle+' by '+username+' on Flickr';
        
        var newHtml = ''
    		+	'<!DOCTYPE html>'
    		+	'<html>'
    		+	'<head>'
    
    		+		'<title>' + customTitle + '</title>'
    
    		+	'</head>'
    		+	'<body id="body">'
    		+       '<h1>' + customTitle + '</h1>'
    
    		+		'<div id="bodyContent">'
    		
    		+           bigImg
    		
    		+       '</div>'

    		+	'</body>'
    		+	'</html>'
    		
        alert(newHtml);
    }
    
    return app;
    
})(window, window.document);