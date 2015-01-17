var startDate = new Date(2015, 0, 12, 9, 30);
var endDate = new Date(2015, 0, 20, 16, 0);
var currentDate = new Date();

$.getJSON("events.json", function(json) {
    for (i in json)
    {
        console.log(json[i].name);
    }
});

moveProgressBar(2500);
setInterval(function () {moveProgressBar(true)}, 2500);

// on browser resize...
$(window).resize(function() {
    moveProgressBar(0);
});

function moveProgressBar(animationLength) {
    var projectLengthInMilliseconds = endDate.getTime() - startDate.getTime();
    var currentLengthInMilliseconds = currentDate.getTime() - startDate.getTime();
    var percentageProgress = currentLengthInMilliseconds / projectLengthInMilliseconds * 100;

    // on page load, animate percentage bar to data percentage length
    // .stop() used to prevent animation queueing
    // percentageProgress = percentageProgress * 100
    percentage = percentageProgress.toFixed(2) + "%"
    progressBar = $(".progress-bar");

    //set progress bar width
    progressBar.stop().animate({
        width: percentage
    }, animationLength);

    // set percentage progress
    progressBar.html(percentage);
}
