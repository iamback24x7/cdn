$(document).ready(function() {
    $(".prathyoush-symbol").click(function(event){
        var $tempElement = $("<input>");
            $("body").append($tempElement);
            $tempElement.val($(this).closest(".prathyoush-symbol").find(".prathyoush-copy").text()).select();
            document.execCommand("Copy");
            $tempElement.remove();
           
        });
        $(".prathyoush-symbol").click(function () {
            $("#prathyoush-alert").show().delay(100).fadeOut();        
          
                });

    });