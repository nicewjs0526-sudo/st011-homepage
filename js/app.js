/* ST011 HUB — 실제 수집 데이터(st006) 렌더링 */
(function () {
  "use strict";

  /* 화별 제목 */
  var EP = {
    1: "외계 침략자들의 머리통을 깨부수는 중입니다",
    2: "밭을 갈다 말고 외계인을 잡는 법",
    3: "양반 놈들의 몰수 통지서",
    4: "위장한 놈은 머리통부터"
  };

  /* [화, 릴스번호, YouTube ID, Instagram 코드, 블로그 글, 일본어 여부] */
  var DATA = [
    [1, 1, "h71V_TuY8aE", "DeT11DfCuy5", "https://okluckday9009.blogspot.com/2026/10/st011-1-1.html", 0],
    [1, 1, "JWNoG4ojs70", "", "", 1],
    [1, 2, "2oEH3AZr828", "DeT2FqKDecx", "https://okluckday9009.blogspot.com/2026/10/st011-1-2.html", 0],
    [1, 4, "5866aR7x1Wc", "DeT2aIpCD3w", "https://okluckday9009.blogspot.com/2026/10/st011-1-4.html", 0],
    [2, 1, "pRahe1YT7Gk", "DeT2qjZjl4y", "https://okluckday9009.blogspot.com/2026/10/st011-2-1.html", 0],
    [2, 2, "icGNp7vHbL8", "DeT3AYilDQW", "https://okluckday9009.blogspot.com/2026/10/st011-2-2.html", 0],
    [2, 3, "TLaUuXp0Tio", "DeT3PUkDRfa", "https://okluckday9009.blogspot.com/2026/10/st011-2-3.html", 0],
    [2, 4, "d_5WzrYfYfo", "DeT3c35DJd8", "https://okluckday9009.blogspot.com/2026/10/st011-2-4.html", 0],
    [3, 1, "-ogIaoAQ8pc", "DeUOO4tgRY1", "https://okluckday9009.blogspot.com/2026/10/st011-3-1.html", 0],
    [3, 2, "vuyFO8co-Tc", "DeUOekKgqoB", "https://okluckday9009.blogspot.com/2026/10/st011-3-2.html", 0],
    [3, 4, "KLglSSzlhNg", "DeUQIN5Ai72", "https://okluckday9009.blogspot.com/2026/10/st011-3-4.html", 0],
    [4, 1, "MNRYfB_dFZ0", "DeUQVhTjrrh", "https://okluckday9009.blogspot.com/2026/10/st011-4-1.html", 0],
    [4, 2, "YEuZNyQRZB8", "DeUQl2rDQXQ", "https://okluckday9009.blogspot.com/2026/10/st011-4-2.html", 0]
  ];

  var PLAYLIST = "https://www.youtube.com/playlist?list=PLRJI6sIC6s7Q";
  var $ = function (sel) { return document.querySelector(sel); };
  var esc = function (s) {
    return String(s == null ? "" : s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  };

  function thumb(id) {
    return "https://i.ytimg.com/vi/" + encodeURIComponent(id) + "/hqdefault.jpg";
  }

  function card(d) {
    var ep = d[0], no = d[1], yt = d[2], ig = d[3], blog = d[4], jp = d[5];
    var links = '<a href="https://www.youtube.com/shorts/' + esc(yt) + '" target="_blank" rel="noopener">▶ Shorts</a>';
    links += '<a href="' + esc(PLAYLIST) + '" target="_blank" rel="noopener">▣ 재생목록</a>';
    if (ig) links += '<a href="https://www.instagram.com/reel/' + esc(ig) + '/" target="_blank" rel="noopener">◎ 릴스</a>';
    if (blog) links += '<a href="' + esc(blog) + '" target="_blank" rel="noopener">▣ 블로그</a>';

    return '<article class="ep" data-ep="' + ep + '">' +
      '<a class="ep-media" href="https://www.youtube.com/shorts/' + esc(yt) + '" target="_blank" rel="noopener">' +
        '<img src="' + thumb(yt) + '" alt="' + esc(ep + "화 · " + EP[ep]) + '" loading="lazy" width="480" height="300">' +
        '<span class="ep-play">▶ SHORTS</span>' +
      '</a>' +
      '<div class="ep-body">' +
        '<p class="ep-meta"><span>' + ep + '화</span><i class="dot"></i><span>릴스 ' + no + '</span>' +
          (jp ? '<i class="dot"></i><span class="jp">日本語</span>' : '') + '</p>' +
        '<h3>' + esc(EP[ep]) + '</h3>' +
        '<div class="ep-links">' + links + '</div>' +
      '</div>' +
    '</article>';
  }

  function render(ep) {
    var grid = $("#gridEpisodes");
    if (!grid) return;
    var rows = DATA.filter(function (d) { return ep === "all" || String(d[0]) === String(ep); });
    grid.innerHTML = rows.map(card).join("");
    var empty = $("#emptyEp");
    if (empty) empty.hidden = rows.length > 0;
  }

  function fillCounts() {
    var yt = DATA.length;
    var ig = DATA.filter(function (d) { return d[3]; }).length;
    var bl = DATA.filter(function (d) { return d[4]; }).length;
    if ($("#cntYt")) $("#cntYt").textContent = yt;
    if ($("#cntIg")) $("#cntIg").textContent = ig;
    if ($("#cntBl")) $("#cntBl").textContent = bl;
    if ($("#fAll")) $("#fAll").textContent = yt;

    document.querySelectorAll(".filter").forEach(function (btn) {
      var key = btn.getAttribute("data-ep");
      var em = btn.querySelector("em");
      if (!em) return;
      em.textContent = key === "all" ? yt : DATA.filter(function (d) { return String(d[0]) === key; }).length;
    });
  }

  function renderBlog() {
    var list = $("#blogList");
    if (!list) return;
    var rows = DATA.filter(function (d) { return d[4]; });
    list.innerHTML = rows.map(function (d, i) {
      return '<li><a href="' + esc(d[4]) + '" target="_blank" rel="noopener">' +
        '<span class="no">' + String(i + 1).padStart(2, "0") + '</span>' +
        '<span class="tt">' + esc(d[0] + "화 · 릴스 " + d[1] + " — " + EP[d[0]]) + '</span>' +
        '<span class="go">읽기 ↗</span></a></li>';
    }).join("");
  }


  document.addEventListener("DOMContentLoaded", function () {
    fillCounts();
    render("all");
    renderBlog();

    document.querySelectorAll(".filter").forEach(function (btn) {
      btn.addEventListener("click", function () {
        document.querySelectorAll(".filter").forEach(function (b) { b.classList.remove("is-on"); });
        btn.classList.add("is-on");
        render(btn.getAttribute("data-ep"));
      });
    });

    var year = $("#year");
    if (year) year.textContent = new Date().getFullYear();

    /* 스크롤에 따른 메뉴 활성 표시 */
    var sections = ["episodes", "channels", "novel", "blog"];
    var navLinks = {};
    document.querySelectorAll(".gnav a").forEach(function (a) {
      var id = (a.getAttribute("href") || "").replace("#", "");
      if (id) navLinks[id] = a;
    });
    if ("IntersectionObserver" in window) {
      var io = new IntersectionObserver(function (entries) {
        entries.forEach(function (en) {
          if (!en.isIntersecting) return;
          Object.keys(navLinks).forEach(function (k) { navLinks[k].classList.remove("on"); });
          if (navLinks[en.target.id]) navLinks[en.target.id].classList.add("on");
        });
      }, { rootMargin: "-45% 0px -50% 0px" });
      sections.forEach(function (id) {
        var el = document.getElementById(id);
        if (el) io.observe(el);
      });
    }
  });
})();

