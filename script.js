/* Description placeholder

 */
const crsr = document.querySelector("#cursor");
/* Description placeholder
 
 */
const blur = document.querySelector("#cursor-blur");

// Cursor movement
document.addEventListener("mousemove", (dets) => {
    crsr.style.left = dets.x + "px";
    crsr.style.top = dets.y + "px";
    blur.style.left = (dets.x - 150) + "px";
    blur.style.top = (dets.y - 150) + "px";
});

// Cursor hover effects
document.querySelectorAll("#nav1 h4, .card, #about-us img, #green-div h4, .elem, .footer-links a, .footer-social a, .footer-newsletter button").forEach(elem => {
    elem.addEventListener("mouseenter", () => {
        crsr.classList.add("active");
        crsr.style.backgroundColor = "transparent";
        crsr.style.border = "2px solid #d4a762";
    });
    elem.addEventListener("mouseleave", () => {
        crsr.classList.remove("active");
        crsr.style.backgroundColor = "rgba(243, 242, 242, 0.623)";
        crsr.style.border = "2px solid white";
    });
});

// GSAP animations
gsap.to("#nav1", {
    backgroundColor: "#1a0701",
    duration: 0.5,
    height: "80px",
    scrollTrigger: {
        trigger: "#nav1",
        scroller: "body",
        start: "top -10%",
        end: "top -11%",
        scrub: 2,
    },
});

gsap.to("#main", {
    backgroundColor: "rgba(101, 67, 33, 0.7)",
    scrollTrigger: {
        trigger: "#main",
        scroller: "body",
        start: "top -30vh",
        end: "top -80vh",
        scrub: 3,
    },
});

gsap.to("video", {
    scale: 1.05,
    filter: "brightness(0.85)",
    scrollTrigger: {
        trigger: "#main",
        scroller: "body",
        start: "top -20%",
        end: "top -80%",
        scrub: 2,
    },
});

gsap.from("#page h1, #page h2, #page p", {
    y: 50,
    opacity: 0,
    duration: 1.2,
    stagger: 0.3,
    scrollTrigger: {
        trigger: "#page",
        scroller: "body",
        start: "top 80%",
        end: "top 60%",
        scrub: 2,
    },
});








gsap.from("#page3 p, #page3 svg", {
    y: 50,
    opacity: 1,
    duration: 1,
    stagger: 0.3,
    scrollTrigger: {
        trigger: "#page3",
        scroller: "body",
        start: "top 60%",
        end: "top 50%",
        scrub: 2,
    },
});

gsap.from("#page4 h1, .elem", {
    y: 50,
    opacity: 1,
    duration: 1,
    stagger: 0.3,
    scrollTrigger: {
        trigger: "#page4",
        scroller: "body",
        start: "top 60%",
        end: "top 50%",
        scrub: 2,
    },
});
gsap.from("#colon1", {
  y: -70,
  x: -70,
  scrollTrigger: {
    trigger: "#colon1",
    scroller: "body",
    // markers:true,
    start: "top 55%",
    end: "top 45%",
    scrub: 4,
  },
});
gsap.from("#colon2", {
  y: 70,
  x: 70,
  scrollTrigger: {
    trigger: "#colon1",
    scroller: "body",
    // markers:true,
    start: "top 55%",
    end: "top 45%",
    scrub: 4,
  },
});
gsap.from("#page4 h1", {
  y: 50,
  scrollTrigger: {
    trigger: "#page4 h1",
    scroller: "body",
    // markers:true,
    start: "top 75%",
    end: "top 70%",
    scrub: 3,
  },
});
gsap.from("#footer", {
    y: 50,
    opacity: 0,
    duration: 1,
    scrollTrigger: {
        trigger: "#footer",
        scroller: "body",
        start: "top 90%",
        end: "top 80%",
        scrub: 2,
    },
});

// Arrow scroll functionality
document.querySelector("#arrow").addEventListener("click", () => {
    document.querySelector("#page2").scrollIntoView({ behavior: "smooth" });
});

// Card tilt and click effects
document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const xAxis = (rect.width / 2 - (e.clientX - rect.left)) / 20;
        const yAxis = (rect.height / 2 - (e.clientY - rect.top)) / 20;
        gsap.to(card, {
            rotateY: -xAxis,
            rotateX: yAxis,
            scale: 1.05,
            translateY: -10,
            duration: 0.3,
            ease: "power2.out",
        });
    });

    card.addEventListener('mouseenter', () => {
        card.style.transition = 'none';
        const overlay = card.querySelector('.overlay');
        gsap.to(overlay, {
            opacity: 1,
            height: '100%',
            duration: 0.3,
        });
    });

    card.addEventListener('mouseleave', () => {
        gsap.to(card, {
            rotateY: 0,
            rotateX: 0,
            scale: 1,
            translateY: 0,
            duration: 0.5,
            ease: "power2.out",
        });
        const overlay = card.querySelector('.overlay');
        if (!card.classList.contains('active')) {
            gsap.to(overlay, {
                opacity: 0,
                height: 'auto',
                duration: 0.3,
            });
        }
    });

    card.addEventListener('click', () => {
        card.classList.toggle('active');
        const overlay = card.querySelector('.overlay');
        gsap.to(overlay, {
            opacity: card.classList.contains('active') ? 1 : 0,
            height: card.classList.contains('active') ? '100%' : 'auto',
            duration: 0.5,
            ease: "power2.inOut",
        });
    });
});

// Green div interaction
/**
 * Description placeholder
 *
 * @type {*}
 */
const greenDiv = document.querySelector('#green-div');
greenDiv.addEventListener('click', () => {
    greenDiv.classList.toggle('active');
});

// Initialize animations
document.addEventListener("DOMContentLoaded", () => {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("animated");
            }
        });
    }, { threshold: 0.2 });

    document.querySelectorAll("#page, #page2, #about-us, #green-div, .card, #page3, #page4, #footer").forEach(el => {
        observer.observe(el);
    });

    document.querySelector("#page").classList.add("animated");
});
