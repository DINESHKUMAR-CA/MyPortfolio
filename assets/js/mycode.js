/*!
=========================================================
* Meyawo Landing page
=========================================================

* Copyright: 2019 DevCRUD (https://devcrud.com)
* Licensed: (https://devcrud.com/licenses)
* Coded by www.devcrud.com

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// smooth scroll
// $(document).ready(function(){
//     $(".navbar .nav-link").on('click', function(event) {

//         if (this.hash !== "") {

//             event.preventDefault();

//             var hash = this.hash;

//             $('html, body').animate({
//                 scrollTop: $(hash).offset().top
//             }, 700, function(){
//                 window.location.hash = hash;
//             });
//         } 
//     });
// });

// // navbar toggle
// $('#nav-toggle').click(function(){
//     $(this).toggleClass('is-active')
//     $('ul.nav').toggleClass('show');
// });

// smooth scroll - ChatGPT
$(document).ready(function () {
    $(".navbar .nav-link").on('click', function (event) {
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 700, function () {
                window.location.hash = hash;
            });
        }
    });

    // Navbar toggle
    $('#nav-toggle').click(function () {
        $(this).toggleClass('is-active');
        $('ul.nav').toggleClass('show');
    });

    // Hide and show navbar on scroll
    var lastScrollTop = 0;
    $(window).scroll(function () {
        var scrollTop = $(this).scrollTop();

        // If scrolling down, hide the navbar
        if (scrollTop > lastScrollTop) {
            $('.custom-navbar').addClass('hide');
        } else {
            // If scrolling up, show the navbar
            $('.custom-navbar').removeClass('hide');
        }

        lastScrollTop = scrollTop;
    });
});

//Austin's pop-up code

function openPopup(event) {
    let str = event.target.id;
    let indexes = (str.charAt(str.length - 1));
    let popup = document.getElementById(`popup-${indexes}`)
    popup.classList.add('open-popup');
}

function closePopup(event) {
    let str = event.target.id;
    let indexes = (str.charAt(str.length - 1));
    let popup = document.getElementById(`popup-${indexes}`)
    popup.classList.remove('open-popup')
}

//scroll-To-Top-button

// Add scroll event listener to show/hide the button
document.addEventListener('scroll', function() {
    var button = document.getElementById('btnScrollToTop');
    // Show/hide the button with smooth transition
    button.style.opacity = (window.scrollY > window.innerHeight / 2) ? '1' : '0';
});

// Add click event listener to the button
document.getElementById('btnScrollToTop').addEventListener('click', function() {
    // Scroll to the top of the page
    window.scrollTo({ top: 0, behavior: 'smooth' });
});