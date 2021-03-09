function navbar_color_toggle() {
    // $('#navbar-color-toggle').toggleClass("bg-white");
    toggler_change_icon();
}

function toggler_change_icon() {
    var button = document.getElementById("menu-toggler-id");
    $('#menu-toggler-id').toggleClass("active-toggler");
}

function move_to_images() {
    $("body,html").animate(
        {
            scrollTop: $("#pgcntnr").offset().top
        },
        800 //speed
    );
}

function move_to_top() {
    $('html, body').animate({
        scrollTop: 0
    }, 800);
}

function navbar_small_screen_fix(x) {
    if (x.matches) { // If media query matches
        document.body.style.backgroundColor = "yellow";
    } else {
        document.body.style.backgroundColor = "pink";
    }
}
