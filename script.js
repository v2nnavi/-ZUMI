var menu = document.querySelector('.menu');
    var menuBtn = document.querySelector('.menu-btn');
    var closeBtn = document.querySelector('.close-btn');

    menuBtn.addEventListener("click", () => {
        menu.classList.add('active');
    });

    closeBtn.addEventListener("click", () => {
        menu.classList.remove('active');
    });


    window.addEventListener("scroll", function(){
        var header = document.querySelector("header");
        header.classList.toggle('sticky', window.scrollY > 0)
    })

    window.addEventListener("scroll", function(){
        var atas = document.querySelector(".gotopbtn");
        atas.classList.toggle('atas', window.scrollY > 0)
    })

    AOS.init();
