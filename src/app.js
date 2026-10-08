(function () {
  "use strict";
  var cfg = window.SOCIALHUB || {};
  var $ = function (id) { return document.getElementById(id); };

  if (cfg.title) { document.title = cfg.title; $("title").textContent = cfg.title; }
  $("subtitle").textContent = cfg.subtitle || "";
  $("footer").textContent = cfg.footer || "";

  // อนุญาตเฉพาะ http(s), mailto, tel
  function safeUrl(u) {
    try {
      var p = new URL(u, location.href);
      return /^(https?|mailto|tel):$/.test(p.protocol) ? p.href : null;
    } catch (e) { return null; }
  }

  function card(l) {
    var href = l && l.name ? safeUrl(l.url) : null;
    if (!href) return null;

    var a = document.createElement("a");
    a.className = "card";
    a.href = href;
    if (/^https?:/.test(href)) { a.target = "_blank"; a.rel = "noopener noreferrer"; }

    var ic = document.createElement("span");
    ic.className = "icon";
    var letter = function () { ic.textContent = l.name.charAt(0).toUpperCase(); };
    if (l.icon) {
      var img = new Image(28, 28);
      img.alt = "";
      img.decoding = "async";
      img.src = l.icon;
      img.onerror = function () { img.remove(); letter(); };
      ic.appendChild(img);
    } else { letter(); }

    var nm = document.createElement("span");
    nm.className = "name";
    nm.textContent = l.name;

    a.appendChild(ic);
    a.appendChild(nm);
    return a;
  }

  // รองรับทั้งแบบแบ่งหมวด (groups) และแบบรายการเดียว (links)
  var groups = cfg.groups || (cfg.links ? [{ links: cfg.links }] : []);
  var root = document.createDocumentFragment();

  groups.forEach(function (g) {
    var grid = document.createElement("div");
    grid.className = "grid";
    (g.links || []).forEach(function (l) {
      var c = card(l);
      if (c) grid.appendChild(c);
    });
    if (!grid.firstChild) return;

    var sec = document.createElement("section");
    sec.className = "group";
    if (g.title) {
      var h = document.createElement("h2");
      h.textContent = g.title;
      sec.appendChild(h);
    }
    sec.appendChild(grid);
    root.appendChild(sec);
  });
  $("links").appendChild(root);
})();
