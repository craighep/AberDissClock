var startDate = new Date(2015, 0, 12, 9, 30);
var endDate = new Date(2015, 0, 20, 16, 0);
var currentDate = new Date();

loadEvents();
moveProgressBar(2500);
setInterval(function () {moveProgressBar(2500)}, 2500);

// on browser resize...
$(window).resize(function() {
    moveProgressBar(2500);
});


function loadEvents() {
    $.getJSON("/js/events.json", function(json) {
        for (i in json)
        {
            var evt = json[i];
            entry = "<li>" + evt.name + "</li>";
            $(".events").append(entry);
        }
    });
}

function moveProgressBar(animationLength) {
    currentDate = new Date();
    var projectLengthInMilliseconds = endDate.getTime() - startDate.getTime();
    var currentLengthInMilliseconds = currentDate.getTime() - startDate.getTime();
    var percentageProgress = currentLengthInMilliseconds / projectLengthInMilliseconds * 100;

    // on page load, animate percentage bar to data percentage length
    // .stop() used to prevent animation queueing
    // percentageProgress = percentageProgress * 100
    percentage = percentageProgress.toFixed(3) + "%"

    //set progress bar width
    $(".progress_bar .progress").animate({
        width: percentage
    }, animationLength);

    // set percentage progress
    $(".progress_bar .percentage").html(percentage);

    //set progress bar width
    $(".progress_bar .percentage").fadeIn(animationLength);
}

function scrollToElement(element) {
  // Scroll smoothly to element via ID
  $('html, body').animate({
    scrollTop: $(element).offset().top
  }, 2000);

  //Highlight text when scrolled down to
  setTimeout(function () {
  $(element).animate({color: 'yellow'},2000)
  $(element).animate({color: 'white'},2000) },1000);
}
