// GSAP for Smooth Transitions
gsap.utils.toArray(".section").forEach(section => {
    gsap.from(section, {
        scrollTrigger: {
            trigger: section,
            start: "top center",
            toggleActions: "play none none none"
        },
        opacity: 0,
        duration: 1
    });
});
