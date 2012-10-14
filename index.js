(function(window) {

var timer = null;

$(function() {
    var dots = $(".dots");
    var slides = $("#slides");

    var deactivate = function() {
        $(".active", dots).removeClass("active");
        $(".active", slides).removeClass("active");
    }

    var activate = function(name) {
        deactivate();
        $("[data-slide=\"" + name + "\"]", dots).addClass("active");
        $("." + name, slides).addClass("active");
    }

    var next = function() {
        var n = $(".active", dots).next();
        if(n.size()) {
            n.click();
        } else {
            $("li", dots)[0].click();
        }
    }

    var resetTimer = function() {
        clearTimeout(timer);
        timer = setTimeout(next, 5000);
    }

    $("li", dots).click(function() {
        var name = $(this).data("slide");
        activate(name);
        resetTimer();
    })

    resetTimer();

});

})(window);
