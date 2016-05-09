filepicker.setKey('AnHcmQdOGT1yzcIx00fmfz');

Snipcart.subscribe('cart.ready', function() {
    Snipcart.api.configure('show_cart_automatically', false);
});

var imageUrl;

$(function() {
    $('#add-file').click(function() {
        filepicker.pick({
            mimetype: 'image/*',
            services: ['COMPUTER']
        }, function (blob) {
            var baseUrl = "https://process.filestackapi.com/AnHcmQdOGT1yzcIx00fmfz";
            var asciiUrl = baseUrl + "/ascii/" + blob.url;
            imageUrl = baseUrl + "/urlscreenshot/" + asciiUrl;
            
            $('#preview').attr('src', imageUrl);
            $('#add-file').hide();
            $('#add-to-cart').show();
        });
    });
    
    $('#add-to-cart').click(function() {
        Snipcart.api.items.add({
            id: "FilestackImage",
            name: 'Custom ASCII poster',
            url: "/snipcart-filestack-demo",
            image: imageUrl,
            price: 30,
            customFields: [{
                type: 'hidden',
                name: 'Image URL',
                value:imageUrl
            }]
        }).then(function() {
            Snipcart.api.modal.show();
        }); 
    });
});