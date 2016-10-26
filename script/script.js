$(document).ready(function() {
    $("ul.menu li:has(ul)").mouseenter(function() {
        $(this).find("ul").slideDown("fast");
      }).mouseleave(function() {
          $(this).find("ul").slideUp("fast");
        });

    $("ul.menu > li").hover(function() {
        $(this).addClass('current');
    }, function() {

        $(this).removeClass('current');
    });
    $("ul.menu li:has(ul) a:first").addClass('with-child');
});
