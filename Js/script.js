// Laoding--------->
$(window).on("load", loadFunc)
function loadFunc() {
    setTimeout(() => {
        $('#loading-anime').css('opacity', '0');
        setTimeout(() => {
            $('#loading-anime').css('display', 'none');
        }, 700)
    }, 3500);
}
window.onload = () => {
    AOS.init();


    // Typing---------->
    var typed = new Typed('.animate', {
        strings: [
            "Developer",
            "Freelancer",
            "Designer"
        ],
        typeSpeed: 150,
        typeSpeed: 120,
        loop: true

    });

    // Music----------->
    let myMusic = document.querySelector("#myMusic"),
        musicControl = document.querySelector(".music-control"),
        icon = document.querySelector("#icon");

    musicControl.addEventListener('click', () => {
        if (myMusic.paused) {
            myMusic.play();
            icon.className = "bx bx-pause";
        } else {
            myMusic.pause();
            icon.className = "bx bx-play";
        }

    })

    // SideBar-------------->
    let sidebar = document.querySelector('.sidebar'),
        closeSidebar = document.querySelector('.close-sidebar'),
        navToggle = document.querySelector('.nav-toggle');

    function controlSidebar() {
        sidebar.classList.toggle('active');
        closeSidebar.classList.toggle('active');
    }
    function closeSidebarFunc() {
        sidebar.classList.remove('active');
        closeSidebar.classList.remove('active');
    }

    navToggle.addEventListener('click', controlSidebar)
    closeSidebar.addEventListener('click', closeSidebarFunc);



    // Section Text scroll------------->
    let one = document.querySelector('.one'),
        two = document.querySelector('.two'),
        three = document.querySelector('.three');


    window.addEventListener('scroll', () => {
        let value = window.scrollY;
        one.style.right = value * 0.35 + 'px';
        two.style.right = value * 0.1 + 'px';
        three.style.right = value * 0.05 + 'px';
    })


    // Nav--------------->
    const nav = document.querySelector('nav');

    window.addEventListener('scroll', () => {
        if (window.scrollY >= 10) {
            nav.classList.add('active');
        }
        else {
            nav.classList.remove('active')
        }

    });

    // Mouse Animation-------------->
    const mouse = document.querySelector('.mouse-anime');

    window.addEventListener('scroll', () => {
        if (window.scrollY >= 80) {
            mouse.classList.add('passive');
        }
        else {
            mouse.classList.remove('passive')
        }

    });
    
    // Social Icons--------->
    const facebook = document.querySelector('.facebook'),
        telegram = document.querySelector('.telegram'),
        intagram = document.querySelector('.intagram'),
        linkedIn = document.querySelector('.linkedIn');


    window.addEventListener('scroll', () => {
        let value = window.scrollY;
        facebook.style.bottom = value * 2 + 'px';
        telegram.style.bottom = value * 1.7 + 'px';
        linkedIn.style.bottom = value * 1.4 + 'px';
        intagram.style.bottom = value * 1.1 + 'px';
    })

    // Portfolio------------->
    const filterItem = document.querySelector(".items");
    const filterImg = document.querySelectorAll(".gallery .image");

    filterItem.onclick = (selectedItem) => {
        if (selectedItem.target.classList.contains("item")) {
            filterItem.querySelector(".active").classList.remove("active");
            selectedItem.target.classList.add("active");
            let filterName = selectedItem.target.getAttribute("data-name");
            filterImg.forEach((image) => {
                let filterImges = image.getAttribute("data-name");

                if ((filterImges == filterName) || (filterName == "all")) {
                    image.classList.remove("hide");
                    image.classList.add("show");
                } else {
                    image.classList.add("hide");
                    image.classList.remove("show");
                }
            });
        }
    }
    for (let i = 0; i < filterImg.length; i++) {
        filterImg[i].setAttribute("onclick", "preview(this)");
    }

    const previewBox = document.querySelector(".preview-box"),
        categoryName = previewBox.querySelector(".title p"),
        previewImg = previewBox.querySelector("img"),
        closeIcon = previewBox.querySelector(".icon"),
        shadow = document.querySelector(".shadow");

    function preview(element) {
        document.querySelector("body").style.overflow = "hidden";
        let selectedPrevImg = element.querySelector("img").src;
        let selectedImgCategory = element.getAttribute("data-name");
        previewImg.src = selectedPrevImg;
        categoryName.textContent = selectedImgCategory;
        previewBox.classList.add("show");
        shadow.classList.add("show");
        closeIcon.onclick = () => {
            previewBox.classList.remove("show");
            shadow.classList.remove("show");
            document.querySelector("body").style.overflow = "auto";
        }
    }
}
// Skill Bar----------->
$('.skill-per').each(function () {
    let $this = $(this);
    let per = $this.attr('per');
    $this.css('width', per + '%');

    $({ animatedValue: 0 }).animate({ animatedValue: per }, {
        duration: 1000,
        step: function () {
            $this.attr('per', Math.floor(this.animatedValue) + '%');
        },
        complete: function () {
            $this.attr('per', Math.floor(this.animatedValue) + '%');
        },
    })
})