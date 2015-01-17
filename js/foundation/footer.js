$(window).bind("load", function () {
    set_footer();
});

$( window ).resize(function(){
    set_footer();
});

function set_footer() {
  var footer = $("#footer");
  var pos = footer.position();
  var height = $(window).height();
  height = height - pos.top;
  height = height - footer.height();
  if (height > 0) {
      footer.css({
          'margin-top': height + 'px'
      });
  }
}
