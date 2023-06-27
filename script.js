// <================= GSAP(GreenSock) Intro =======================>

// from - animation starting point, esh ka matlab ha animation kab start hoga.
// to - animation ending point, esh ka matlab ha animation kab end hoga.

// gsap.from(".para",{
//     opacity: 0,
//     duration: 4,
// });

// gsap.from(".para", {
//     color: "red",
//     duration: 4,
// })

// gsap.to(".para", {
//     color: "red",
//     duration: 4,
// })

// gsap.from(".para", {
//     color: "red",
//     duration: 4,
// })

// gsap.to(".para", {
//     color: "lightseagreen",
//     duration: 4,
// })

// gsap.from(".nav__one", {
//     y : 20,
//     duration: 2,
// })

// maei chata hu ke all element ak ka baad ak line maei aae, esh ka leya time line ka use karte hai.
// gsap.timeline() - ya ak function aur all animation ak shath run karne ka leya function time line ka use karte hai. For example below,

// <==================== Start Project Animating ==================>
var tl = gsap.timeline();

tl
  .from(".nav__one", {
    delay : 1,
    opacity: 0,
    y : 20,
  })

  .from(".nav__two", {
    opacity: 0,
    y : 20,
  })

  .from(".para", {
    opacity: 0,
    scale: 1.3,
    duration: 1
  })

  .from(".btn", {
    y : 20,
    opacity: 0
  })

  .from([".bag", ".makeUp__kit"], {
    x : -60,
    scale : 1.6,
    opacity : 0,
    duration: 1
  })

  .from([".flower", ".cup"], {
    x : 60,
    opacity : 0,
    duration: 1,
    delay : "-1"
  })

  .from(".down__button", {
    scale : 0.1,
    opacity : 0
  })
  
  .to(".down__button", {
    y : 20,
    yoyo : "true",
    repeat : "-1" // repeat : -1 dene se ya simple infinite loop maei fash jata hai.
  })