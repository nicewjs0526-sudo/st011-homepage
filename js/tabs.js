document.addEventListener("DOMContentLoaded", () => {
  const tabs = document.querySelectorAll(".tab");
  const panels = document.querySelectorAll(".panel");

  function activateTab(name) {
    tabs.forEach(t => {
      t.classList.toggle("active", t.dataset.tab === name);
    });
    panels.forEach(p => {
      p.hidden = p.id !== `panel-${name}`;
      if (p.id === `panel-${name}`) {
        p.classList.add("active");
      } else {
        p.classList.remove("active");
      }
    });
  }

  tabs.forEach(tab => {
    tab.addEventListener("click", () => {
      const name = tab.dataset.tab;
      activateTab(name);
      const target = document.getElementById(`tab-target-${name}`);
      if (target) target.scrollIntoView({ behavior: "smooth", block: "nearest" });
    });
  });

  activateTab("home");
});