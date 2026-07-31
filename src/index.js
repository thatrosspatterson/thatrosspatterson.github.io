/**
 * Populates the header element
 */
function createPageHeader(isProject=false) {
    $('header').append('' +
        '<h1>Ross Patterson</h1>' + 
        '<div id="desktop-nav">' + returnNavList(isProject) + '</div>'
    )
}

/**
 * Adds content to the footer element when called
 */
function createPageFooter(isProject=false) {
    $('footer').append(
        '<div class="footer-sitemap">' +
            '<span>Ross Patterson</span>' + 
            returnNavList(isProject) +
        '</div>' +
        '<div class="footer-notice">&copy; 2026 Ross Patterson</div>'
    )
}

/**
 * Event handler for clicking mobile nav button
 */
function toggleMobileNavVisibility() {
    const mobileNav = $('#mobile-nav')
    mobileNav.toggleClass("is-visible");
    if (mobileNav.hasClass("is-visible")) {
        mobileNav.find("#mobile-nav-button").text("Hide Menu");
    }else {
        mobileNav.find("#mobile-nav-button").text("Menu");
    }
    
}

/*Creates mobile navigation elements*/
function createMobileNav(isProject=false) {
    $('#canvas').prepend('' +
        '<div id="mobile-nav">' +
            '<div id="mobile-nav-menu">' + returnNavList(isProject) + '</div>' +
            '<button id="mobile-nav-button">Menu</button>' +
        '</div>'
    )
    const mobileNavButton = document.querySelector("#mobile-nav-button");
    mobileNavButton.addEventListener("click", toggleMobileNavVisibility);
}

/*The navigation list*/
function returnNavList(isProject=false) {
    let link = "";
    if (isProject) {
        link = "../"
    }
    return '<nav>' +
        '<ul>' +
            '<li><a href="' + link + 'index.html">About</a></li>' +
            '<li><a href="' + link + 'projects.html">Projects</a></li>' +
            '<li><a href="' + link + 'ross-patterson-resume.pdf">Resume</a></li>' +
            '<li><a href="' + link + 'contact.html">Contact</a></li>' +
        '</ul>' +
    '</nav>'
}

function createFloatingNav(isProject=false) {
    $('body').prepend('' +
        '<div id="floating-nav"><div>' + 
        '<div><span>Ross Patterson</span></div>' +
        '<div>' + returnNavList(isProject)+ '</div>' + 
        '</div></div>'
    )

    /**
     * Scroll handler to track how far down the user has scrolled
     * to determine if floating nav should be pulled up or down
     */
    $(document).on("scroll", function(){
        let nav = document.querySelector('#floating-nav');
        let docScroll = $(document).scrollTop();

        if(docScroll >= nav.offsetHeight * 4) { 
            nav.classList.add('is-visible');
        }else {
            nav.classList.remove('is-visible');
        }
    });
}

function returnFaviconVector() {
    return '' +
    '<svg width="100%" height="100%" viewBox="0 0 349 401" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" xmlns:serif="http://www.serif.com/" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2;">' +
        '<g transform="matrix(1,0,0,1,-85.856,-55.5053)" >' +
            '<g id="Curves-R" serif:id="Curves R" transform="matrix(1.86351,0,0,1.86351,3.08418,-0.277554)">' +
            '<path d="M184.5,164.487L231.316,245.114L157.233,245.114L116.888,173.49L153.087,170.804L184.5,164.487Z" style="fill:rgb(29,29,87);"/>' +
            '</g>' +
            '<g id="Curves-P" serif:id="Curves P" transform="matrix(1.86351,0,0,1.86351,3.08418,-0.277554)">' +
                '<path d="M145.244,173.49L106.512,173.49L106.512,245.114L44.417,245.114L44.417,29.934L145.244,29.934C160.204,29.934 173.525,32.906 185.206,38.849C196.887,44.792 206.007,52.887 212.565,63.133C219.123,73.38 222.401,85.164 222.401,98.484C222.401,113.444 219.123,126.56 212.565,137.832C206.007,149.103 196.887,157.864 185.206,164.114C184.972,164.24 184.736,164.364 184.5,164.487C172.989,170.489 159.904,173.49 145.244,173.49ZM106.512,127.38L134.793,127.38C139.916,127.38 144.168,126.406 147.55,124.46C150.931,122.513 153.493,119.797 155.235,116.314C156.977,112.83 157.848,108.629 157.848,103.71C157.848,99.202 156.977,95.359 155.235,92.183C153.493,89.006 150.829,86.547 147.242,84.805C143.656,83.063 139.096,82.192 133.563,82.192L106.512,82.192L106.512,127.38Z" style="fill:rgb(174,174,174);"/>' +
            '</g>' +
        '</g>' +
    '</svg>'
}