(function () {
  "use strict";
  var cfg = window.SOCIALHUB || { links: [] };
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

  function fallback(ic, name) {
    ic.textContent = name.charAt(0).toUpperCase();
  }

  var frag = document.createDocumentFragment();
  (cfg.links || []).forEach(function (l) {
    var href = l && l.name ? safeUrl(l.url) : null;
    if (!href) return;

    var a = document.createElement("a");
    a.className = "card";
    a.href = href;
    if (/^https?:/.test(href)) { a.target = "_blank"; a.rel = "noopener noreferrer"; }

    var ic = document.createElement("span");
    ic.className = "icon";
    if (l.icon) {
      var img = new Image(28, 28);
      img.alt = "";
      img.decoding = "async";
      img.src = l.icon;
      img.onerror = function () { img.remove(); fallback(ic, l.name); };
      ic.appendChild(img);
    } else { fallback(ic, l.name); }

    var nm = document.createElement("span");
    nm.className = "name";
    nm.textContent = l.name;

    a.appendChild(ic);
    a.appendChild(nm);
    frag.appendChild(a);
  });
  $("links").appendChild(frag);
})();
