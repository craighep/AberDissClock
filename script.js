var startDate = new Date(2015, 1, 21);
var endDate = new Date(2015, 4, 26);
var currentDate = new Date(2015, 2, 22);

moveProgressBar(2500);
setInterval(function () {moveProgressBar(true)}, 2500);

// on browser resize...
$(window).resize(function() {
    moveProgressBar(0);
});

function moveProgressBar(animationLength) {
    var projectLengthInMilliseconds = endDate.getTime() - startDate.getTime();
    var currentLengthInMilliseconds = endDate.getTime() - currentDate.getTime();
    var currentTime = projectLengthInMilliseconds - currentLengthInMilliseconds;

    var percentageProgress = currentTime / projectLengthInMilliseconds;

    // on page load, animate percentage bar to data percentage length
    // .stop() used to prevent animation queueing
    percentageProgress = percentageProgress * 100
    percentage = percentageProgress.toFixed(2) + "%"

    //set progress bar width
    $('.progress-bar').stop().animate({
        width: percentage
    }, animationLength);

    // set percentage progress
    $(".progress-bar").html(percentage);
}
