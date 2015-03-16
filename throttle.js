function scrollHandler() {
    var docHeight = $(document).height(),
        winHeight = $(window).height(),
        winScroll = $(window).scrollTop();
    if (docHeight - winHeight - winScroll < winHeight) {
        postParam.page += 1;
        console.log(postParam.page)
        util.ajx(url, postParam, addload);
    };
};

function throttle(fn, delay) {
    var timer = null;
    return function() {
        var me = this;
        clearTimeout(timer);
        timer = setTimeout(function() {
            fn.apply(me, arguments);
        }, delay);
    };
};

$(window).scroll(throttle(scrollHandler, 300));
