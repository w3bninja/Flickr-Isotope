$(function() {
    var apiKey = 'b4463ab65129ae22970d890679c8f599';
    var userId = '36293845@N02';
    var tag = 'website, advertising';
    var perPage = '200';
    var showOnPage = '5000';
    
    $.getJSON('http://api.flickr.com/services/rest/?format=json&method='+
        'flickr.photos.search&api_key=' + apiKey + '&user_id=' + userId + 
        '&tags=' + tag + '&per_page=' + perPage + '&jsoncallback=?', 
    function(data){
        var classShown = 'class="lightbox"';
        var classHidden = 'class="lightbox hidden"';
        
        $.each(data.photos.photo, function(i, rPhoto){

          var basePhotoURL = 'http://farm' + rPhoto.farm + '.static.flickr.com/'
            + rPhoto.server + '/' + rPhoto.id + '_' + rPhoto.secret;            
            
            var thumbPhotoURL = basePhotoURL + '_z.jpg';
            var mediumPhotoURL = basePhotoURL + '_b.jpg';
            
            var photoStringStart = '<div class="item"><a ';
            var photoStringEnd = 'title="' + rPhoto.title + '" href="'+ 
                mediumPhotoURL +'"><div class="img"><img src="' + thumbPhotoURL + '" alt="' + 
                rPhoto.title + '"/></div><div class="txt">' + rPhoto.tags + '</div></a></div>;'                
            var photoString = (i < showOnPage) ? 
                photoStringStart + classShown + photoStringEnd : 
                photoStringStart + classHidden + photoStringEnd;
                                      
            $(photoString).appendTo("#flickr");
        });

        $("a.lightbox").lightBox();
    });
});