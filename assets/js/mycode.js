
// smooth scroll 
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

    //Scrolling to My work section on the page
    function scrollToSection(sectionId) {
        var section = document.getElementById(sectionId);
        section.scrollIntoView({ behavior: 'smooth' });
    }


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

// Function to toggle the visibility of the scroll-to-top button
function toggleScrollToTopButton() {
    var button = document.getElementById('scrollToTopBtn');
    // Show/hide the button with smooth transition
    button.style.opacity = (window.scrollY > window.innerHeight / 2) ? '1' : '0';
}

// Adding scroll event listener to show/hide the button
document.addEventListener('scroll', toggleScrollToTopButton);

// Initial check for button visibility on page load
document.addEventListener('DOMContentLoaded', function() {
    toggleScrollToTopButton();
});

document.getElementById('scrollToTopBtn').addEventListener('click', function() {
    // Scrolling to the top of the page
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

