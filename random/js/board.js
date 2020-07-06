$(function() {




    $("button").click(function() {
        let target = $(this).attr("value");

        $(".comment-display div").each(function(){
            $(this).animate({"opacity" : 0}, 300, function(){
                $(this).hide();

                if($(this).hasClass(target) || target === "all") {
                    $(this).show();
                    $(this).animate({"opacity" : 1}, 300);
                }
            });
        });
    });
})


$(function () {
    
});