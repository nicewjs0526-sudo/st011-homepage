document.addEventListener("DOMContentLoaded", () => {
  const ogImage = document.querySelector('meta[property="og:image"]');
  const hero = document.querySelector(".hero");

  if (ogImage && hero) {
    const source = ogImage.getAttribute("content");
    if (source) {
      hero.style.backgroundImage = `url(${source})`;
    }
  }
});