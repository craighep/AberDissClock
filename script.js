// on page load...
    moveProgressBar(false);
    setInterval(function () {moveProgressBar(true)}, 2500);
    // on browser resize...
    $(window).resize(function() {
        moveProgressBar(false);
    });

    // SIGNATURE PROGRESS
    function moveProgressBar(loop) {
        var diff = 714600;
        var ts = 1421769600 -Math.round((new Date()).getTime() / 1000);
        ts = 714600 - ts;
        var getPercent = 100/714600 * ts / 100;
        var getProgressWrapWidth = $('.progress-wrap').width();
        var progressTotal = getPercent * getProgressWrapWidth;
        var animationLength = 2500;
		if (loop)
			animationLength = 0;
        // on page load, animate percentage bar to data percentage length
        // .stop() used to prevent animation queueing
        getPercent = Math.round(getPercent * 100000)

        $('.progress-bar').stop().animate({
            width: getPercent/1000+"%"
        }, animationLength);
        $(".progress-bar").html(getPercent/1000 + "%");
    }
