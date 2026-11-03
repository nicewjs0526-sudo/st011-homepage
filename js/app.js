/* 노래방 · ST011 — 재생목록/필터 렌더링 */
(function () {
  "use strict";

  /* kind: kop(한국) · jop(일본) · thema(테마) */
  var PLS = [
    { t: "한국노래방", id: "PLC26YrUpCuBI", n: 70, k: "kop", s: "TJ 미디어 반주곡 순위 가수들의 실제 원곡" },
    { t: "일본노래방", id: "PLJ1asI0PdAQA", n: 61, k: "jop", s: "J-POP TOP 100 · 반주곡 번호표" },
    { t: "dark side of k-pop", id: "PLQ7iX5retWVM", n: 27, k: "thema", s: "중독성 스와게디시" },
    { t: "cute & bright", id: "PLNdMdo68pRWU", n: 27, k: "thema", s: "청량함 수록곡" },
    { t: "y2k nostalgia", id: "PLOU-R_9YY-Lw", n: 22, k: "thema", s: "2000s throwbacks" },
    { t: "대박기원 신인들", id: "PLM1jUKnWINRQ", n: 10, k: "thema", s: "신인 · 대박 기원" },
    { t: "first gen legends", id: "PLTmfWe8mcpIU", n: 24, k: "thema", s: "1세대 명곡집" },
    { t: "k-ballads for a rainy evening", id: "PLUT5YHsN-2HY", n: 26, k: "thema", s: "비 오는 저녁 발라드" },
    { t: "k-dance floor", id: "PLUSP8Lh1m5qA", n: 25, k: "thema", s: "hips don't lie" },
    { t: "girls' power", id: "PLGlX6p4R5Vgc", n: 24, k: "thema", s: "걸그룹 히트 모음" }
  ];

  var $ = function (s) { return document.querySelector(s); };
  var esc = function (v) {
    return String(v == null ? "" : v).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  };

  function item(p) {
    return '<li class="pl ' + p.k + '">' +
      '<a class="pl-link" href="https://www.youtube.com/playlist?list=' + esc(p.id) + '" target="_blank" rel="noopener">' +
        '<span class="num">' + p.n + '<small>곡</small></span>' +
        '<span class="tt">' + esc(p.t) + '</span>' +
        '<span class="sub">' + esc(p.s) + '</span>' +
        '<span class="open">▶ 재생목록 열기</span>' +
      '</a>' +
    '</li>';
  }

  function render(kind) {
    var grid = $("#plGrid");
    if (!grid) return;
    var rows = PLS.filter(function (p) { return kind === "all" || p.k === kind; });
    grid.innerHTML = rows.map(item).join("");
    var empty = $("#plEmpty");
    if (empty) empty.hidden = rows.length > 0;
  }

  document.addEventListener("DOMContentLoaded", function () {
    var all = $("#plAll");
    if (all) all.textContent = PLS.length;
    render("all");

    document.querySelectorAll(".filter").forEach(function (btn) {
      btn.addEventListener("click", function () {
        document.querySelectorAll(".filter").forEach(function (b) { b.classList.remove("is-on"); });
        btn.classList.add("is-on");
        render(btn.getAttribute("data-kind"));
      });
    });

    var year = $("#year");
    if (year) year.textContent = new Date().getFullYear();

    /* 메뉴 활성 표시 */
    var ids = ["karaoke", "playlists", "blog", "st011"];
    var links = {};
    document.querySelectorAll(".nav a").forEach(function (a) {
      var id = (a.getAttribute("href") || "").replace("#", "");
      if (id) links[id] = a;
    });
    if ("IntersectionObserver" in window) {
      var io = new IntersectionObserver(function (es) {
        es.forEach(function (e) {
          if (!e.isIntersecting) return;
          Object.keys(links).forEach(function (k) { links[k].classList.remove("on"); });
          if (links[e.target.id]) links[e.target.id].classList.add("on");
        });
      }, { rootMargin: "-45% 0px -50% 0px" });
      ids.forEach(function (id) {
        var el = document.getElementById(id);
        if (el) io.observe(el);
      });
    }
  });
})();
