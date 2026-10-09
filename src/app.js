(function () {
  var cfg = window.SOCIALHUB || {};
  var root = document.getElementById("links");
  var frag = document.createDocumentFragment();

  if (cfg.title) document.title = cfg.title;

  function card(l) {
    var a = document.createElement("a");
    a.className = "card";
    a.href = l.url;
    a.target = "_blank";
    a.rel = "noopener noreferrer";

    var img = new Image(28, 28);
    img.alt = "";
    img.decoding = "async";
    img.src = l.icon;
    img.onerror = function () { img.remove(); };

    var name = document.createElement("span");
    name.textContent = l.name;

    a.appendChild(img);
    a.appendChild(name);
    return a;
  }

  (cfg.groups || []).forEach(function (g) {
    var sec = document.createElement("section");
    var h = document.createElement("h2");
    var grid = document.createElement("div");
    h.textContent = g.title;
    grid.className = "grid";
    g.links.forEach(function (l) { grid.appendChild(card(l)); });
    sec.appendChild(h);
    sec.appendChild(grid);
    frag.appendChild(sec);
  });

  root.appendChild(frag);
})();
