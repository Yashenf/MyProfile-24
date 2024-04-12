document.getElementById("navbar-toggle").addEventListener("click", function () {
  document.getElementById("nav-list").classList.toggle("show");
});

setInterval(() => {}, 4500);
document.addEventListener("DOMContentLoaded", function () {
  // Create a new Typed instance
  const typed = new Typed("#job-dynamic-txt", {
    strings: [
      "Tech Tutor.",
      "DevOps Engineer.",
      "Full Stack Software Engineer.",
      "UI/UX Designer.",
    ],
    typeSpeed: 60,
    loop: true,
    backSpeed: 80,
    backDelay: 1500,
  });

  // Other custom code that relies on Typed.js can go here
});

