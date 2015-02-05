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
        
        var newBody = ''
    		+       '<h1>' + customTitle + '</h1>'
    
    		+		'<div id="bodyContent">'
    		
    		+           '<img src="' + bigImgSrc + '" />'
    		
    		+       '</div>';
    		
        // replace the old body with new one.
        $('body').html(newBody).attr("bgcolor","#000");
        
        // replace the title
        $(document).prop('title', customTitle);
    }
    
    return app;
    
})(window, window.document);