const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});
var timeout;
function minicirclescale() {
    var scaleX = 1;
    var scaleY = 1;

    var prevX = 0;
    var prevY = 0;
    window.addEventListener("mousemove", function (e) {
        clearTimeout(timeout);

        scaleX = gsap.utils.clamp(0.8, 1.2, e.clientX - prevX);
        scaleY = gsap.utils.clamp(0.8, 1, e.clientY - prevY);

        prevX = e.clientX;
        prevY = e.clientY;

        mousefollower(scaleX, scaleY);

        timeout = setTimeout(function () {
            document.querySelector('#minicircle').style.transform = `translate(${e.clientX}px, ${e.clientY}px) scale(1,1)`
        }, 100);
    })

}
function mousefollower(scaleX, scaleY) {
    window.addEventListener('mousemove', function (dets) {
        document.querySelector('#minicircle').style.transform = `translate(${dets.clientX}px, ${dets.clientY}px) scale(${scaleX}, ${scaleY})`
    })
}
mousefollower();
firstpageanimation();
minicirclescale()
function firstpageanimation() {
    var tl = gsap.timeline();
    tl.from("#nav", {
        y: '-10',
        opacity: 0,
        duration: 1.5,
        ease: Expo.easeInOut

    })
        .to(".boundingelem", {
            y: 0,
            ease: Expo.easeInOut,
            duration: 2,
            stagger: .2,
            delay: -1.5
        })
        .from("#herofooter", {
            y: '-10',
            ease: Expo.easeInOut,
            duration: 1.5,
            opacity: 0,
            delay: -1
        })

}
imagerotation()
function imagerotation() {
    var img = document.querySelectorAll(".elem").forEach(function(e) {

        var rotate = 0;
        var diffrot = 0;
        e.addEventListener("mouseout", function (elem) {
            gsap.to(e.querySelector("img"), {
                opacity: 0,
                ease: Power1,
            });
        });
        e.addEventListener("mousemove", function (elem) {
            diffrot = elem.clientX - rotate;
            rotate = elem.clientX;
            var diff = elem.clientY-e.getBoundingClientRect().top;
            gsap.to(e.querySelector("img"), {
                opacity: 1,
                ease: Power3,
                top: diff,
                left: elem.clientX,
                rotate : gsap.utils.clamp(-20,20,diffrot*0.5)
            });
        });
    });
}