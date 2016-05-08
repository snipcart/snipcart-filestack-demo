filepicker.setKey('AnHcmQdOGT1yzcIx00fmfz');

Snipcart.subscribe('cart.ready', function() {
    Snipcart.api.configure('show_cart_automatically', false);
});

$(function() {
    $('.add-file').click(function() {
        filepicker.pick({
            mimetype: 'image/*',
            services: ['COMPUTER']
        }, function (blob) {
            var baseUrl = "https://process.filestackapi.com/AnHcmQdOGT1yzcIx00fmfz"
            console.log(blob);
            var screenshotUrl = baseUrl + "/urlscreenshot/";
            var url = screenshotUrl + baseUrl + "/ascii/" + blob.url;
            
            Snipcart.api.items.add({
                id: "FilestackImage",
                name: 'Custom ASCII poster',
                url: "/snipcart-filestack-demo",
                image: url,
                price: 30,
                customFields: [{
                    type: 'hidden',
                    name: 'Image URL',
                    value: url
                }]
            }).then(function() {
                Snipcart.api.modal.show();
            });
        });
    });
});