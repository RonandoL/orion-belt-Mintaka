$(document).ready(function() {
  $(".click-rendez").click(function() {
    $(".rendezvous-hidden").toggle();
    $(".rendezvous-shown").toggle();
  });
});

$(document).ready(function() {
  $(".click-mission").click(function() {
    $(".mission-hidden").toggle();
    $(".mission-shown").toggle();
  });
});

$(document).ready(function() {
  $(".click-liftoff").click(function() {
    $(".liftoff-hidden").toggle();
    $(".liftoff-shown").toggle();
  });
});

$(document).ready(function() {
  $(".click-transit").click(function() {
    $(".transit-hidden").toggle();
    $(".transit-shown").toggle();
  });
});

$(document).ready(function() {
  $(".click-link").click(function() {
    $(".link-hidden").toggle();
    $(".link-shown").toggle();
  });
});

$(document).ready(function() {
  $(".click-threat").click(function() {
    $(".threat-hidden").toggle();
    $(".threat-shown").toggle();
  });
});

// Change Background Color
$(document).ready(function() {
  $("button#light_text").click(function() {
    $("body").removeClass();
    $("body").addClass("dark-background");
  });

  $("button#dark_text").click(function() {
    $("body").removeClass();
    $("body").addClass("light-background");
  })
});










//
