(function() {

    // for menu scroll 
    var pageLink = document.querySelectorAll('.page-scroll');

    pageLink.forEach(elem => {
        elem.addEventListener('click', e => {
            e.preventDefault();
            document.querySelector(elem.getAttribute('href')).scrollIntoView({
                behavior: 'smooth',
                offsetTop: 1 - 60,
            });
        });
    });

    // section menu active
    function onScroll(event) {
        var sections = document.querySelectorAll('.page-scroll');
        var scrollPos = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;

        for (var i = 0; i < sections.length; i++) {
            var currLink = sections[i];
            var val = currLink.getAttribute('href');
            var refElement = document.querySelector(val);
            var scrollTopMinus = scrollPos + 73;
            if (refElement.offsetTop <= scrollTopMinus && (refElement.offsetTop + refElement.offsetHeight > scrollTopMinus)) {
                document.querySelector('.page-scroll').classList.remove('active');
                currLink.classList.add('active');
            } else {
                currLink.classList.remove('active');
            }
        }
    };

    window.document.addEventListener('scroll', onScroll);

    //===== close navbar-collapse when a  clicked
    let navbarToggler = document.querySelector(".navbar-toggler");
    var navbarCollapse = document.querySelector(".navbar-collapse");

    document.querySelectorAll(".page-scroll").forEach(e =>
        e.addEventListener("click", () => {
            navbarToggler.classList.remove("active");
            navbarCollapse.classList.remove('show')
        })
    );
    navbarToggler.addEventListener('click', function() {
        navbarToggler.classList.toggle("active");
        navbarCollapse.classList.toggle('hidden')
    })


    // WOW active
    new WOW().init();


    //======== tiny slider for work
    tns({
        container: '.tiny-slider',
        autoplay: true,
        autoplayTimeout: 5000,
        autoplayText: [' ', ' '],
        mouseDrag: true,
        gutter: 10,
        nav: true,
        controls: true,
        controlsText: [
            '<i class="lni lni-chevron-left prev"></i>',
            '<i class="lni lni-chevron-right next"></i>'
        ],
        items: 3,

        responsive: {
            0: {
                items: 1,
            },
            570: {
                items: 1,
            },
            850: {
                items: 1,
            },
            1200: {
                items: 3,
            },
            1400: {
                items: 4,
            },
        }
    });
    //======== tiny slider for team
    tns({
        container: '.team_active',
        autoplay: true,
        autoplayTimeout: 5000,
        autoplayText: [' ', ' '],
        mouseDrag: true,
        gutter: 0,
        nav: true,
        controls: false,
        controlsText: [
            '<i class="lni lni-chevron-left prev"></i>',
            '<i class="lni lni-chevron-right next"></i>'
        ],
        items: 5,

        responsive: {
            0: {
                items: 1,
            },
            768: {
                items: 2,
            },
            1050: {
                items: 3,
            },
        }
    });

    // ================ pricing tab
    const tabs = document.querySelectorAll('[data-tab-target]')
    const tabContents = document.querySelectorAll('[data-tab-content]')

    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const target = document.querySelector(tab.dataset.tabTarget)
            tabContents.forEach(tabContent => {
                tabContent.classList.remove('active')
            })
            tabs.forEach(tab => {
                tab.classList.remove('active')
            })
            tab.classList.add('active')
            target.classList.add('active')
        })
    })


})();