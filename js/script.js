var startDate = new Date(2015, 0, 12, 9, 30);
var endDate = new Date(2015, 1, 20, 16, 0);
var currentDate = new Date();

loadEvents();
moveProgressBar(2500);
setInterval(function () {moveProgressBar(2500)}, 2500);

// on browser resize...
$(window).resize(function() {
    moveProgressBar(2500);
});


function loadEvents() {
    $.getJSON("/AberDissClock/js/events.json", function(json) {
        for (i in json)
        {
            var evt = json[i];
            eventDate = new Date(evt.date);
            position = computePercentage(eventDate);

            var name = evt.name.replace(/ /g,"_");
            entry = "<div class='event "+name+"'></div>";
            $(".events").append(entry);

            $("."+name).css({"margin-left":position+"%"});

        }
    });
}

function moveProgressBar(animationLength) {
    currentDate = new Date();
    percentageProgress = computePercentage(currentDate);

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

function computePercentage(date) {
    var projectLengthInMilliseconds = endDate.getTime() - startDate.getTime();
    var currentLengthInMilliseconds = date.getTime() - startDate.getTime();
    return currentLengthInMilliseconds / projectLengthInMilliseconds * 100;
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
