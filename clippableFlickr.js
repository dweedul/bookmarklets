window.clippableFlickr = (function(window, document){
    
        
    var body = document.body,
        head = document.head || document.getElementsByTagNameNS('head')[0],
        
        title = document.title,
        host = document.location.host;
        

    var app = {};

    app.init = function(){
        var username = $('a.owner-name.truncate').html();
        var photoTitle = $('span.meta-field.photo-title').text();
        var bigImgSrc = $('img.zoom-large').attr('src');
        
        var customTitle = photoTitle + ' by ' + username + ' on Flickr';
        
        var newHtml = ''
    		//+	'<!DOCTYPE html>'
    		//+	'<html>'
    		//+	'<head>'
    
    		//+		'<title>' + customTitle + '</title>'
    
    		//+	'</head>'
    		//+	'<body id="body">'
    		+       '<h1>' + customTitle + '</h1>'
    
    		+		'<div id="bodyContent">'
    		
    		+           '<img src="' + bigImgSrc + '" />'
    		
    		+       '</div>'

    		//+	'</body>'
    		//+	'</html>'
    		
        // clear it all out
        $('body').html(newHtml).attr("bgcolor","#000");
    }
    
    return app;
    
})(window, window.document);