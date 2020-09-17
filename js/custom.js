gsap.registerPlugin(ScrollTrigger);
let tl = gsap.timeline({
  // yes, we can add it to an entire timeline!
  scrollTrigger: {
    trigger: "#scroll_section",
    pin: true, // pin the trigger element while active
    start: "top top", // when the top of the trigger hits the top of the viewport
    end: "+=2000", // end after scrolling 500px beyond the start
    scrub: 1, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
  },
});
tl.from("#skills", { xPercent: -100 })
  .from("#project", { xPercent: 100 })
  .from("#experience", { yPercent: -100 })
  .from("#footer", { yPercent: 100 });
