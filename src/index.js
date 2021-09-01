import "./styles.css"

const mainNavLinks = document.querySelectorAll("nav a");
// const mainSections = document.querySelectorAll("main section");

// let lastId;
// let cur = [];
// eslint-disable-next-line
window.addEventListener("scroll", event => {
  const fromTop = window.scrollY;

  mainNavLinks.forEach(link => {
    const section = document.querySelector(link.hash);

    if (
      section.offsetTop <= fromTop &&
      section.offsetTop + section.offsetHeight > fromTop
    ) {
      link.classList.add("current");
    } else {
      link.classList.remove("current");
    }
  });
});
