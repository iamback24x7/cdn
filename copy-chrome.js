var clipboard = new ClipboardJS(".prathyoush-face", {
    text: function(trigger) {
        return $(trigger)
            .find('.prathyoush-copy')
            .text();
    }
});
clipboard.on('success', function(e) {
    $("#prathyoush-alert").show().delay(100).fadeOut();  
        });

clipboard.on('error', function(e) {
    console.error('Action:', e.action);
    console.error('Trigger:', e.trigger);
});