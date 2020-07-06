
// カテゴリー分類
$(function() {
    $(".sidebar a").click(function(){
        event.preventDefault();
        let target = $(this).attr("class");
       

        $(".main-contents div").each(function(){
            $(this).animate({"opacity" : 0}, 300, function(){
                $(this).hide();

                if($(this).hasClass(target) || target == "clothes"){
                    $(this).show();
                    $(this).animate({"opacity" : 1}, 300);

                    
                }
            });
        });
    });
});

$(function() {

    $(".toggle").click(function() {
        $(this).toggleClass("on");
        $('.sidebar').slideToggle();
});
});