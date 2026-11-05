(function () {
  "use strict";

  var A = window.AGENCIA;
  var ARTISTAS = window.ARTISTAS || [];
  var VIDEOS = window.VIDEOS || [];

  var videoSrc = function (id) { return "assets/videos/" + id + ".mp4"; };
  var posterSrc = function (id) { return "assets/posters/" + id + ".jpg"; };
  var $ = function (s, el) { return (el || document).querySelector(s); };
  var $$ = function (s, el) { return Array.prototype.slice.call((el || document).querySelectorAll(s)); };
  var nomeArtista = function (id) {
    var a = ARTISTAS.find(function (x) { return x.id === id; });
    return a ? a.nome : "";
  };

  // ---- Textos da agência ----
  document.title = A.nome + " — Agência de Música";
  $$("[data-agencia-nome]").forEach(function (el) { el.textContent = A.nome; });
  $$("[data-agencia-slogan]").forEach(function (el) {
    if (A.slogan) el.textContent = A.slogan;
    else el.hidden = true;
  });
  $$("[data-agencia-sobre]").forEach(function (el) { el.textContent = A.sobre; });
  $("#ano").textContent = new Date().getFullYear();

  var c = A.contato;
  var links = {
    email: { text: c.email, href: "mailto:" + c.email },
    instagram: { text: c.instagram, href: "https://instagram.com/" + c.instagram.replace("@", "") },
    whatsapp: { text: c.whatsapp, href: "https://wa.me/" + c.whatsapp.replace(/\D/g, "") },
  };
  $$("[data-contato]").forEach(function (el) {
    var l = links[el.dataset.contato];
    el.textContent = l.text;
    el.href = l.href;
  });

  // ---- Hero ----
  var hero = $(".hero-video");
  hero.poster = posterSrc(A.heroVideo);
  hero.src = videoSrc(A.heroVideo);
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    hero.removeAttribute("autoplay");
    hero.pause();
  }

  // ---- Artistas ----
  var artistGrid = $("#artist-grid");
  ARTISTAS.forEach(function (a) {
    var qtd = VIDEOS.filter(function (v) { return v.artista === a.id; }).length;
    var card = document.createElement("article");
    card.className = "artist-card";
    card.innerHTML =
      '<div class="artist-media"><img loading="lazy" alt="" src="' + posterSrc(a.poster) + '"></div>' +
      '<div class="artist-body">' +
      '<p class="artist-type"></p><h3></h3><p class="artist-desc"></p>' +
      '<button class="artist-link" type="button">' + (qtd ? "Ver " + qtd + " vídeo" + (qtd > 1 ? "s" : "") : "Vídeos em breve") + " →</button>" +
      "</div>";
    $(".artist-type", card).textContent = a.tipo;
    $("h3", card).textContent = a.nome;
    $(".artist-desc", card).textContent = a.descricao;
    $(".artist-link", card).addEventListener("click", function () {
      if (qtd) setFilter(a.id);
      $("#tanaton").scrollIntoView({ behavior: "smooth" });
    });
    artistGrid.appendChild(card);
  });

  // ---- Grade de vídeos (reels) ----
  var reelGrid = $("#reel-grid");
  var canHover = window.matchMedia("(hover: hover)").matches;

  VIDEOS.forEach(function (v) {
    var item = document.createElement("button");
    item.type = "button";
    item.className = "reel";
    item.dataset.artista = v.artista || "";
    item.setAttribute("aria-label", "Assistir " + v.titulo);
    item.innerHTML =
      '<video muted loop playsinline preload="none" poster="' + posterSrc(v.arquivo) + '"></video>' +
      '<span class="reel-play" aria-hidden="true">▶</span>' +
      '<span class="reel-info"><span class="reel-artist"></span><span class="reel-title"></span></span>';
    $(".reel-artist", item).textContent = v.artista ? nomeArtista(v.artista) : "Tanaton Fest";
    $(".reel-title", item).textContent = v.titulo;

    var vid = $("video", item);
    var loaded = false;
    var ensureSrc = function () {
      if (!loaded) { vid.src = videoSrc(v.arquivo); loaded = true; }
    };
    if (canHover) {
      item.addEventListener("mouseenter", function () {
        ensureSrc();
        var p = vid.play();
        if (p && p.catch) p.catch(function () {});
      });
      item.addEventListener("mouseleave", function () { vid.pause(); });
    }
    item.addEventListener("click", function () {
      vid.pause();
      openModal(v);
    });
    reelGrid.appendChild(item);
  });

  // ---- Filtros (só aparecem se houver vídeo com artista definido) ----
  var filters = $("#filters");
  var comArtista = ARTISTAS.filter(function (a) {
    return VIDEOS.some(function (v) { return v.artista === a.id; });
  });

  function setFilter(id) {
    $$(".filter", filters).forEach(function (b) {
      b.setAttribute("aria-selected", String(b.dataset.filter === id));
    });
    $$(".reel", reelGrid).forEach(function (r) {
      r.hidden = id !== "todos" && r.dataset.artista !== id;
    });
  }

  if (comArtista.length) {
    [{ id: "todos", nome: "Todos" }].concat(comArtista).forEach(function (a) {
      var b = document.createElement("button");
      b.type = "button";
      b.className = "filter";
      b.role = "tab";
      b.dataset.filter = a.id;
      b.textContent = a.nome;
      b.addEventListener("click", function () { setFilter(a.id); });
      filters.appendChild(b);
    });
    setFilter("todos");
  } else {
    filters.hidden = true;
  }

  // ---- Modal ----
  var modal = $("#modal");
  var modalVideo = $("#modal-video");
  var lastFocus = null;

  function openModal(v) {
    lastFocus = document.activeElement;
    modalVideo.poster = posterSrc(v.arquivo);
    modalVideo.src = videoSrc(v.arquivo);
    $("#modal-title").textContent = (v.artista ? nomeArtista(v.artista) + " · " : "") + v.titulo;
    modal.hidden = false;
    document.body.classList.add("no-scroll");
    hero.pause();
    var p = modalVideo.play();
    if (p && p.catch) p.catch(function () {});
    $(".modal-close", modal).focus();
  }

  function closeModal() {
    modalVideo.pause();
    modalVideo.removeAttribute("src");
    modalVideo.load();
    modal.hidden = true;
    document.body.classList.remove("no-scroll");
    if (hero.hasAttribute("autoplay")) {
      var p = hero.play();
      if (p && p.catch) p.catch(function () {});
    }
    if (lastFocus) lastFocus.focus();
  }

  $$("[data-close]", modal).forEach(function (el) { el.addEventListener("click", closeModal); });
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && !modal.hidden) closeModal();
  });

  // ---- Topbar ao rolar ----
  var topbar = $(".topbar");
  var onScroll = function () { topbar.classList.toggle("scrolled", window.scrollY > 40); };
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();
})();
