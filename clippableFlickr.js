window.clippableFlickr = (function(window, document){
    
        
    var body = document.body,
        head = document.head || document.getElementsByTagNameNS('head')[0],
        
        title = document.title,
        host = document.location.host;
        

    var app = {};

    app.init = function(){
        var username = $('a.owner-name.truncate').html();
        var photoTitle = $('span.meta-field.photo-title').text();
        
        var imgSrc = '';
        if (!$bigImg){
            imgSrc = $('img.main-photo').attr('src');
        }
        else {
            imgSrc = $('img.zoom-large').attr('src');
        }

        var customTitle = photoTitle + ' by ' + username + ' on Flickr';
        
        var newBody = ''
    		+		'<div id="bodyContent">'
    		
    		+           '<img src="' + imgSrc + '" />'
    		
    		+       '</div>';
    		
        // replace the old body with new one.
        $('body').html(newBody).attr("bgcolor","#FFF");
        
        // replace the title
        $(document).prop('title', customTitle);
    }
    
    return app;
    
})(window, window.document);
