function loading () {
    var tl = gsap.timeline();

tl.to("#yellow1",{
    top: "-100%",
    delay:0.4,
    duration:0.7,
    ease:"expo.out"
})

tl.from("#yellow2",{
    top: "100%",
    delay:0.6,
    duration:0.7,
    ease:"expo.out"
},"anim")

tl.to("#loader h1",{
        delay:0.6,
        duration:0.7,
        color:"black"
},"anim")

tl.to("#loader",{
    display:"none"
})
tl.to("#loader",{
    opacity: 0
})

    

}
loading()


document.querySelector(".back-to-top").addEventListener("click",()=>{
    scroll.scrollTo(0);
})

const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth:true
});

var elems = document.querySelectorAll(".elem")
var page2 = document.querySelector("#page2")

elems.forEach( function(ele){
   ele.addEventListener("mouseenter",function() {
    var bgimg = ele.getAttribute("data-img")
    page2.style.backgroundImage = "url("+bgimg+")"
    page2.style.backgroundSize = "cover"
    page2.style.backgroundPosition = "center"   
})
})

// ✅ Navbar animations
const closeBtn = document.querySelector(".nav-right .close");
const navLinks = document.querySelectorAll(".nav-right a");

let navOpen = true; // state

// Rotate cross on hover
closeBtn.addEventListener("mouseenter", () => {
    gsap.to(closeBtn, { rotation: 90, duration: 0.3, ease: "power2.out" });
});
closeBtn.addEventListener("mouseleave", () => {
    if (navOpen) {
        gsap.to(closeBtn, { rotation: 0, duration: 0.3, ease: "power2.out" });
    }
});

// Collapse / Expand navbar on click
closeBtn.addEventListener("click", () => {
    if (navOpen) {
        // Hide links
        gsap.to(navLinks, {
            x: 50,
            opacity: 0,
            stagger: 0.1,
            duration: 0.5,
            ease: "power2.inOut"
        });
        gsap.to(closeBtn, { rotation: 45, duration: 0.4, ease: "power2.inOut" });
        navOpen = false;
    } else {
        // Show links again
        gsap.to(navLinks, {
            x: 0,
            opacity: 1,
            stagger: 0.1,
            duration: 0.5,
            ease: "power2.inOut"
        });
        gsap.to(closeBtn, { rotation: 0, duration: 0.4, ease: "power2.inOut" });
        navOpen = true;
    }
});
