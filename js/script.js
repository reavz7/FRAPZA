///////////////////////////////////////////////////////////
// Set current year
const yearEl = document.querySelector(".year");
const currentYear = new Date().getFullYear();
yearEl.textContent = currentYear;
///////////////////////////////////////////////////////////
// Make mobile navigation work
const btnNavEl = document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector(".header");
btnNavEl.addEventListener("click", function () {
  headerEl.classList.toggle("nav-open");
});
///////////////////////////////////////////////////////////
// Smooth scrolling animation

const allLinks = document.querySelectorAll("a:link");

allLinks.forEach(function (link) {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const href = link.getAttribute("href");

    // Scroll back to top
    if (href === "#")
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });

    // Scroll to other links
    if (href !== "#" && href.startsWith("#")) {
      const sectionEl = document.querySelector(href);
      sectionEl.scrollIntoView({ behavior: "smooth" });
    }

    // Close mobile naviagtion
    if (link.classList.contains("main-nav-link"))
      headerEl.classList.toggle("nav-open");
  });
});
///////////////////////////////////////////////////////////
// Sticky navigation
//
const sectionHeroEl = document.querySelector(".section-hero");

const obss = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];
    if (ent.isIntersecting === false) {
      document.body.classList.add("sticky");
    }
    if (ent.isIntersecting === true) {
      document.body.classList.remove("sticky");
    }
  },
  {
    root: null,
    threshold: 0,
    rootMargin: "440px",
  }
);
obss.observe(sectionHeroEl);
///////////////////////////////////////////////////////////
// Fixing flexbox gap property missing in some Safari versions
function checkFlexGap() {
  var flex = document.createElement("div");
  flex.style.display = "flex";
  flex.style.flexDirection = "column";
  flex.style.rowGap = "1px";
  flex.appendChild(document.createElement("div"));
  flex.appendChild(document.createElement("div"));
  document.body.appendChild(flex);
  var isSupported = flex.scrollHeight === 1;
  flex.parentNode.removeChild(flex);
  console.log(isSupported);
  if (!isSupported) document.body.classList.add("no-flexbox-gap");
}
checkFlexGap();
// https://unpkg.com/smoothscroll-polyfill@0.4.4/dist/smoothscroll.min.js
const underline = document.getElementById("underline");
const links = document.querySelectorAll(".menu-position-types a");

function moveUnderline(link) {
    // Remove active class from all links
    links.forEach(item => item.classList.remove("active"));
    // Add active class to the clicked link
    link.classList.add("active");
    // Position the underline
    underline.style.left = link.offsetLeft + "px";
    underline.style.width = link.offsetWidth + "px";
}

// Initial position of the underline
window.onload = () => {
    const activeLink = document.querySelector(".menu-position-types a.active");
    underline.style.left = activeLink.offsetLeft + "px";
    underline.style.width = activeLink.offsetWidth + "px";
};