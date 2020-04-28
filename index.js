var navbar = document.querySelector('header');
var navwords = document.querySelectorAll('header a');

console.log(navwords);

window.onscroll = function() {
    if (window.pageYOffset > 70) {
        navbar.classList.add('color-nav');
        navwords.forEach(element => element.classList.add('color-navwords'));
    }
    else {
        navbar.classList.remove('color-nav');
        navwords.forEach(element => element.classList.remove('color-navwords'));
    }
};

$(window).scroll(function(){ 

    var $window = $(window),
        $body = $('body'),
        $panel = $('.panel');

    var scroll = $window.scrollTop() + ($window.height() / 3);

    $panel.each(function () {
        var $this = $(this);

        if ($this.position().top <= scroll && $this.position().top + $this.height() > scroll){
            $body.removeClass(function (index, css){
                return (css.match (/(^|\s)color-\S+/g) || []).join("");
            });
            $body.addClass("color-"+$(this).data('color'));
        }

    });
}).scroll();
