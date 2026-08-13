(function () {
  'use strict';

  var currentLang = 'en';

  var translations = {
    en: {
      skip: 'Skip',
      page_title: 'Emily & Michael — Wedding Invitation',
      hero_phrase: 'Love wrote our story... now we want to share the most important chapter with you.',
      countdown_eyebrow: 'Counting down to the celebration',
      event_date: 'November 24th, 2026',
      days_full: 'Days', hours_full: 'Hours', minutes_full: 'Minutes', seconds_full: 'Seconds',
      add_google: 'Google Calendar', add_apple: 'Apple Calendar',
      add_event_title: 'Emily & Michael — Wedding', add_event_details: 'Ceremony and reception',
      wedding_party_title: 'Wedding Party',
      wedding_party_subtitle: 'The most important people on our special day',
      wp_bride_side: 'Bride\'s Side',
      wp_groom_side: 'Groom\'s Side',
      wp_sponsors: 'Main Sponsors',
      wp_best_man: 'Best Man',
      wp_maid_of_honor: 'Maid of Honor',
      wp_bridesmaids: 'Bridesmaids',
      wp_bridesmaid: 'Bridesmaid',
      wp_groomsmen: 'Groomsmen',
      wp_groomsman: 'Groomsman',
      wp_children: 'Little Ones',
      wp_page: 'Page Boy',
      wp_flower_girl: 'Flower Girl',
      itinerary_title: 'Itinerary', itinerary_subtitle: 'Here are some moments we\'ll share together',
      ceremony_title: 'Ceremony', ceremony_desc: 'The moment it all begins',
      reception_title: 'Reception', reception_desc: 'Welcome cocktails & toast',
      party_title: 'Dinner & Dancing', party_desc: 'We celebrate until dawn',
      dresscode_title: 'Dress Code', dresscode_subtitle: 'Formal · Elegant',
      dresscode_note: 'Light colors and earth tones.<br>(Please avoid white.)',
      ceremony_detail_title: 'Ceremony', ceremony_detail_text: 'Join us at 5:00 PM to share this moment.',
      party_detail_title: 'Reception', party_detail_text: 'After the ceremony, we continue celebrating at the venue.',
      party_map_btn: 'View map',
      parents_title: 'Our Families',
      parents_bride: 'Bride\'s Family',
      parents_groom: 'Groom\'s Family',
      hotel_meta: '4 stars · 10 min from the venue',
      hotel_map: 'View location',
      gifts_title: 'Gifts',
      gifts_text: 'Your presence is our greatest gift. If you\'d like to have a thoughtful detail with us, here\'s an option.',
      gifts_btn: 'View details',
      gallery_title: 'About us...', gallery_subtitle: 'Our love story',
      rsvp_title: 'RSVP',
      rsvp_subtitle: 'Please confirm by November 1st, 2026',
      rsvp_name: 'Your full name',
      rsvp_yes: "I'll be there",
      rsvp_no: "Can't make it",
      rsvp_dietary: 'Dietary restrictions (optional)',
      rsvp_message: 'A message for the couple (optional)',
      rsvp_send: 'Send confirmation',
      rsvp_done: 'Thank you!',
      rsvp_done_text: 'Your confirmation has been sent. We can\'t wait to see you.',
      footer_tagline: 'With love, Emily & Michael',
      wp_age_6: '(6 years old)', wp_age_5: '(5 years old)'
    },
    es: {
      skip: 'Saltar',
      page_title: 'Emily & Michael — Invitación de Boda',
      hero_phrase: 'El amor escribió nuestra historia... ahora queremos compartir el capítulo más importante con ustedes.',
      countdown_eyebrow: 'Cuenta regresiva para la celebración',
      event_date: '24 de noviembre de 2026',
      days_full: 'Días', hours_full: 'Horas', minutes_full: 'Minutos', seconds_full: 'Segundos',
      add_google: 'Google Calendar', add_apple: 'Calendario de Apple',
      add_event_title: 'Emily & Michael — Boda', add_event_details: 'Ceremonia y recepción',
      wedding_party_title: 'Padrinos de Boda',
      wedding_party_subtitle: 'Las personas más importantes en nuestro día especial',
      wp_bride_side: 'Lado de la Novia',
      wp_groom_side: 'Lado del Novio',
      wp_sponsors: 'Padrinos Principales',
      wp_best_man: 'Padrino de Honor',
      wp_maid_of_honor: 'Madrina de Honor',
      wp_bridesmaids: 'Damas de Honor',
      wp_bridesmaid: 'Dama de Honor',
      wp_groomsmen: 'Padrinos de Anillo',
      wp_groomsman: 'Padrino de Anillo',
      wp_children: 'Pequeños de la Ceremonia',
      wp_page: 'Paje',
      wp_flower_girl: 'Florista',
      itinerary_title: 'Itinerario de la noche', itinerary_subtitle: 'Estos son algunos momentos que vamos a compartir',
      ceremony_title: 'Ceremonia', ceremony_desc: 'El momento en que todo comienza',
      reception_title: 'Recepción', reception_desc: 'Cóctel de bienvenida y brindis',
      party_title: 'Cena y fiesta', party_desc: 'Celebramos hasta el amanecer',
      dresscode_title: 'Dress Code', dresscode_subtitle: 'Formal · Elegante',
      dresscode_note: 'Colores claros y tonos tierra.<br>(Evitar el blanco.)',
      ceremony_detail_title: 'Ceremonia', ceremony_detail_text: 'Te esperamos a las 17:00 hs para compartir este momento.',
      party_detail_title: 'Fiesta', party_detail_text: 'Después de la ceremonia seguimos festejando en el salón.',
      party_map_btn: 'Ver mapa',
      parents_title: 'Nuestras Familias',
      parents_bride: 'Familia de la Novia',
      parents_groom: 'Familia del Novio',
      hotel_meta: '4 estrellas · a 10 min del salón',
      hotel_map: 'Ver ubicación',
      gifts_title: 'Regalos',
      gifts_text: 'Tu presencia es nuestro mejor regalo. Si querés tener un detalle con nosotros, te dejamos esta opción.',
      gifts_btn: 'Ver datos',
      gallery_title: 'Nosotros...', gallery_subtitle: 'Nuestra historia de amor',
      rsvp_title: 'Confirma tu asistencia',
      rsvp_subtitle: 'Antes del 1 de noviembre de 2026',
      rsvp_name: 'Tu nombre completo',
      rsvp_yes: 'Asistiré',
      rsvp_no: 'No podré asistir',
      rsvp_dietary: 'Restricciones alimentarias (opcional)',
      rsvp_message: 'Un mensaje para los novios (opcional)',
      rsvp_send: 'Enviar confirmación',
      rsvp_done: '¡Gracias!',
      rsvp_done_text: 'Tu confirmación ha sido enviada. Te esperamos.',
      footer_tagline: 'Con amor, Emily & Michael',
      wp_age_6: '(6 años)', wp_age_5: '(5 años)'
    }
  };

  function t(key) { return translations[currentLang] && translations[currentLang][key] || key; }

  function sanitize(str) {
    var div = document.createElement('div');
    div.textContent = str;
    return div.innerHTML.replace(/<[^>]*>/g, '').trim();
  }

  function applyLanguage(lang) {
    currentLang = lang;
    var els = document.querySelectorAll('[data-i18n]');
    for (var i = 0; i < els.length; i++) {
      var el = els[i], key = el.getAttribute('data-i18n');
      if (!key) continue;
      if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') { el.placeholder = t(key); }
      else { el.innerHTML = t(key); }
    }
    var titleEl = document.querySelector('title[data-i18n]');
    if (titleEl) titleEl.textContent = t(titleEl.getAttribute('data-i18n'));
    var btn = document.querySelector('.lang-btn');
    if (btn) {
      btn.textContent = lang === 'en' ? 'ES' : 'EN';
      btn.setAttribute('data-lang', lang === 'en' ? 'es' : 'en');
      btn.setAttribute('aria-label', lang === 'en' ? 'Cambiar a español' : 'Switch to English');
    }
    document.documentElement.lang = lang;
    updateCalendarLinks();
  }

  /* COUNTDOWN */
  function initCountdown() {
    var target = new Date('2026-11-24T17:00:00-07:00');
    var els = { d: document.getElementById('days'), h: document.getElementById('hours'), m: document.getElementById('minutes'), s: document.getElementById('seconds') };
    var rings = { d: document.getElementById('daysRing'), h: document.getElementById('hoursRing'), m: document.getElementById('minutesRing'), s: document.getElementById('secondsRing') };
    var circum = 276;

    function pad(n) { return n < 10 ? '0' + n : String(n); }

    function setRing(el, value, max) {
      if (!el) return;
      var offset = circum - (value / max) * circum;
      el.setAttribute('stroke-dashoffset', offset);
    }

    function update() {
      var diff = target - new Date();
      if (diff <= 0) {
        els.d.textContent = '00'; els.h.textContent = '00'; els.m.textContent = '00'; els.s.textContent = '00';
        return;
      }
      var d = Math.floor(diff / 86400000);
      var h = Math.floor((diff % 86400000) / 3600000);
      var m = Math.floor((diff % 3600000) / 60000);
      var s = Math.floor((diff % 60000) / 1000);
      els.d.textContent = pad(d); els.h.textContent = pad(h); els.m.textContent = pad(m); els.s.textContent = pad(s);
      setRing(rings.d, d, 365); setRing(rings.h, h, 24); setRing(rings.m, m, 60); setRing(rings.s, s, 60);
    }
    update();
    setInterval(update, 1000);
  }

  /* CALENDAR BUTTONS */
  function googleCalendarUrl() {
    var text = t('add_event_title');
    var details = t('add_event_details');
    var params = 'action=TEMPLATE'
      + '&text=' + encodeURIComponent(text)
      + '&dates=20261124T170000/20261124T235900'
      + '&details=' + encodeURIComponent(details)
      + '&location=' + encodeURIComponent('The Willowbrook Estate, Napa Valley, CA')
      + '&ctz=America/Los_Angeles';
    return 'https://calendar.google.com/calendar/render?' + params;
  }

  function appleICS() {
    var now = new Date();
    function pad(n) { return n < 10 ? '0' + n : String(n); }
    var stamp = now.getUTCFullYear() + pad(now.getUTCMonth() + 1) + pad(now.getUTCDate())
      + 'T' + pad(now.getUTCHours()) + pad(now.getUTCMinutes()) + pad(now.getUTCSeconds()) + 'Z';
    var lines = [
      'BEGIN:VCALENDAR', 'VERSION:2.0', 'PRODID:-//Emily & Michael//Wedding//EN',
      'BEGIN:VEVENT',
      'UID:emily-michael-wedding-20261124@invitacion',
      'DTSTAMP:' + stamp,
      'DTSTART:20261124T170000',
      'DTEND:20261124T235900',
      'SUMMARY:' + t('add_event_title'),
      'LOCATION:The Willowbrook Estate, Napa Valley, CA',
      'DESCRIPTION:' + t('add_event_details'),
      'END:VEVENT', 'END:VCALENDAR'
    ];
    return 'data:text/calendar;charset=utf-8,' + encodeURIComponent(lines.join('\r\n'));
  }

  function updateCalendarLinks() {
    var google = document.getElementById('addGoogle');
    var apple = document.getElementById('addApple');
    if (google) google.href = googleCalendarUrl();
    if (apple) apple.href = appleICS();
  }

  function initCalendarButtons() {
    updateCalendarLinks();
  }

  /* GALLERY LIGHTBOX */
  function initGallery() {
    var lightbox = document.getElementById('lightbox');
    if (!lightbox) return;
    var img = document.getElementById('lightboxImg');
    var items = document.querySelectorAll('.gallery__item');
    var imgs = [];
    for (var i = 0; i < items.length; i++) {
      var itemImg = items[i].querySelector('img');
      if (itemImg) imgs.push(itemImg.getAttribute('src'));
    }
    if (imgs.length === 0) return;
    var current = 0;

    function show(index) {
      current = (index + imgs.length) % imgs.length;
      img.setAttribute('src', imgs[current]);
      lightbox.classList.add('lightbox--open');
      lightbox.setAttribute('aria-hidden', 'false');
      document.body.style.overflow = 'hidden';
    }
    function close() {
      lightbox.classList.remove('lightbox--open');
      lightbox.setAttribute('aria-hidden', 'true');
      document.body.style.overflow = '';
    }
    for (var j = 0; j < items.length; j++) {
      (function (idx) {
        items[idx].addEventListener('click', function () { show(idx); });
      })(j);
    }
    document.getElementById('lightboxClose').addEventListener('click', close);
    document.getElementById('lightboxBackdrop').addEventListener('click', close);
    document.getElementById('lightboxPrev').addEventListener('click', function () { show(current - 1); });
    document.getElementById('lightboxNext').addEventListener('click', function () { show(current + 1); });
    document.addEventListener('keydown', function (e) {
      if (!lightbox.classList.contains('lightbox--open')) return;
      if (e.key === 'Escape') close();
      if (e.key === 'ArrowLeft') show(current - 1);
      if (e.key === 'ArrowRight') show(current + 1);
    });
  }

  /* GIFTS */
  function initGifts() {
    var btn = document.getElementById('giftsToggle'), detail = document.getElementById('giftsDetail');
    if (!btn) return;
    btn.addEventListener('click', function () {
      var open = detail.classList.contains('gifts__detail--open');
      detail.classList[open ? 'remove' : 'add']('gifts__detail--open');
      btn.setAttribute('aria-expanded', String(!open));
    });
  }

  /* SCROLL REVEAL */
  function initScrollReveal() {
    var els = document.querySelectorAll('.fade-in');
    if (!('IntersectionObserver' in window)) { for (var i = 0; i < els.length; i++) els[i].classList.add('fade-in--visible'); return; }
    var observer = new IntersectionObserver(function (entries) {
      for (var i = 0; i < entries.length; i++) {
        if (entries[i].isIntersecting) { entries[i].target.classList.add('fade-in--visible'); observer.unobserve(entries[i].target); }
      }
    }, { threshold: 0.12, rootMargin: '0px 0px -10px 0px' });
    for (var j = 0; j < els.length; j++) observer.observe(els[j]);
  }

  /* ROSE PETALS */
  function initPetals() {
    var container = document.getElementById('petalsContainer');
    if (!container) return;
    var colors = ['#F5C6D0','#E89AB0','#D97B9B','#C97896','#F0D5DE','#E4709A'];
    var shapes = ['M8 1 C11 4 12.5 8 12 13 C11.5 16 10 18.5 8 20 C6 18.5 4.5 16 4 13 C3.5 8 5 4 8 1Z','M8 1 C13 5 15 11 13 16 C12 18.5 10 20 8 20 C6 20 4 18.5 3 16 C1 11 3 5 8 1Z','M8 0 C10 3 12 8 11 14 C10 17 9 19 8 20 C7 19 6 17 5 14 C4 8 6 3 8 0Z'];
    createPetals(container, colors, shapes, 8);
    setInterval(function () { if (container.children.length < 14) createPetal(container, colors, shapes); }, 4000);
  }

  /* DEEP ROSE PETALS */
  function initBrownPetals() {
    var container = document.getElementById('petalsBrown');
    if (!container) return;
    var colors = ['#B03A5B','#922B4D','#A63D63','#C05780','#8E2444','#D15B8A'];
    var shapes = ['M8 1 C11 4 12.5 8 12 13 C11.5 16 10 18.5 8 20 C6 18.5 4.5 16 4 13 C3.5 8 5 4 8 1Z','M8 1 C13 5 15 11 13 16 C12 18.5 10 20 8 20 C6 20 4 18.5 3 16 C1 11 3 5 8 1Z','M8 0 C10 3 12 8 11 14 C10 17 9 19 8 20 C7 19 6 17 5 14 C4 8 6 3 8 0Z'];
    for (var i = 0; i < 5; i++) setTimeout(function () { createPetal(container, colors, shapes); }, i * 650);
    setInterval(function () { if (container.children.length < 9) createPetal(container, colors, shapes); }, 5000);
  }

  function createPetals(container, colors, shapes, count) {
    for (var i = 0; i < count; i++) setTimeout(function () { createPetal(container, colors, shapes); }, i * 600);
  }

  function createPetal(container, colors, shapes) {
    var svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svg.setAttribute('class', 'petal');
    svg.setAttribute('width', String(18 + Math.random() * 16));
    svg.setAttribute('height', String(22 + Math.random() * 18));
    svg.setAttribute('viewBox', '0 0 16 20');
    var path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    path.setAttribute('d', shapes[Math.floor(Math.random() * shapes.length)]);
    path.setAttribute('fill', colors[Math.floor(Math.random() * colors.length)]);
    path.setAttribute('opacity', String(0.18 + Math.random() * 0.22));
    svg.appendChild(path);
    svg.style.left = Math.random() * 100 + '%';
    svg.style.animationDuration = (9 + Math.random() * 13) + 's';
    svg.style.animationDelay = Math.random() * 12 + 's';
    svg.style.setProperty('--drift', ((Math.random() - 0.5) * 160) + 'px');
    svg.style.setProperty('--spin', ((Math.random() - 0.5) * 720) + 'deg');
    svg.style.transform = 'scale(' + (0.7 + Math.random() * 0.9) + ')';
    container.appendChild(svg);
    svg.addEventListener('animationend', function () { if (svg.parentNode) svg.parentNode.removeChild(svg); });
  }

  /* BOKEH ORBS */
  function initBokeh() {
    var container = document.getElementById('bokehContainer');
    if (!container) return;
    for (var i = 0; i < 10; i++) {
      var orb = document.createElement('div');
      orb.className = 'bokeh';
      var size = 40 + Math.random() * 80;
      orb.style.width = size + 'px';
      orb.style.height = size + 'px';
      orb.style.left = Math.random() * 100 + '%';
      orb.style.animationDuration = (16 + Math.random() * 18) + 's';
      orb.style.animationDelay = Math.random() * 20 + 's';
      orb.style.setProperty('--bokeh-drift', ((Math.random() - 0.5) * 120) + 'px');
      container.appendChild(orb);
    }
  }

  /* CONFETTI */
  function burstConfetti() {
    var container = document.getElementById('confettiContainer');
    if (!container) return;
    var colors = ['#D4B98C','#8B5E34','#FAF3E7','#A38B6D','#C9A227','#6B4226','#B8965A'];
    for (var i = 0; i < 30; i++) {
      var piece = document.createElement('div');
      piece.className = 'confetti-piece';
      piece.style.left = Math.random() * 100 + '%';
      piece.style.animationDuration = (2 + Math.random() * 3) + 's';
      piece.style.animationDelay = Math.random() * 0.6 + 's';
      piece.style.setProperty('--confetti-spin', (Math.random() * 720 - 360) + 'deg');
      piece.style.width = (6 + Math.random() * 8) + 'px';
      piece.style.height = (6 + Math.random() * 8) + 'px';
      piece.style.background = colors[Math.floor(Math.random() * colors.length)];
      piece.style.borderRadius = Math.random() > 0.5 ? '50%' : '2px';
      container.appendChild(piece);
      piece.addEventListener('animationend', function () { if (piece.parentNode) piece.parentNode.removeChild(piece); });
    }
    if (typeof confetti === 'function') {
      confetti({ particleCount: 160, spread: 100, origin: { y: 0.6 }, colors: colors });
      setTimeout(function () {
        confetti({ particleCount: 80, angle: 60, spread: 70, origin: { x: 0, y: 0.7 }, colors: colors });
        confetti({ particleCount: 80, angle: 120, spread: 70, origin: { x: 1, y: 0.7 }, colors: colors });
      }, 250);
      setTimeout(function () {
        confetti({ particleCount: 120, spread: 120, startVelocity: 45, decay: 0.92, origin: { y: 0.35 }, colors: colors });
      }, 600);
    }
  }

  /* VIDEO */
  function initVideo() {
    var overlay = document.getElementById('videoOverlay');
    var video = document.getElementById('introVideo');
    var skipBtn = document.getElementById('skipVideo');
    var soundBtn = document.getElementById('soundToggle');
    var main = document.getElementById('mainContent');
    var resolved = false;
    document.body.classList.add('video-locked');

    function reveal() {
      if (resolved) return;
      resolved = true;
      overlay.classList.add('video-overlay--hidden');
      main.classList.add('page--visible');
      if (video && !video.paused) video.pause();
      document.body.classList.remove('video-locked');
      window.scrollTo({ top: 0, behavior: 'instant' });
      burstConfetti();
      var audio = document.getElementById('bgMusic');
      if (audio) { audio.play().catch(function () {}); document.getElementById('musicToggle').classList.remove('music-toggle--paused'); }
    }

    if (video) {
      video.addEventListener('ended', reveal);
      video.addEventListener('error', function () { reveal(); });
      video.addEventListener('loadedmetadata', function () {
        video.play().catch(function () { reveal(); });
      });
    } else { reveal(); }

    if (skipBtn) skipBtn.addEventListener('click', reveal);
    if (soundBtn) soundBtn.addEventListener('click', function () {
      if (!video) return;
      if (video.muted) {
        video.muted = false;
        soundBtn.classList.add('video-overlay__sound--unmuted');
      } else {
        video.muted = true;
        soundBtn.classList.remove('video-overlay__sound--unmuted');
      }
    });

    setTimeout(function () { if (video && video.readyState < 2) reveal(); }, 10000);
  }

  /* LANGUAGE TOGGLE */
  function initLangToggle() {
    var btn = document.querySelector('.lang-btn');
    if (!btn) return;
    btn.addEventListener('click', function () { applyLanguage(currentLang === 'en' ? 'es' : 'en'); });
  }

  /* RSVP FORM */
  function initRSVP() {
    var form = document.getElementById('rsvpForm');
    var success = document.getElementById('rsvpSuccess');
    var guestsRow = document.getElementById('rsvpGuests');
    var dietaryRow = document.getElementById('rsvpDietary');
    if (!form) return;

    var radios = form.querySelectorAll('input[name="attendance"]');
    for (var i = 0; i < radios.length; i++) {
      radios[i].addEventListener('change', function () {
        var yes = form.querySelector('input[name="attendance"]:checked');
        var show = yes && yes.value === 'yes';
        guestsRow.classList[show ? 'add' : 'remove']('rsvp-form__cond--visible');
        dietaryRow.classList[show ? 'add' : 'remove']('rsvp-form__cond--visible');
        if (!show) { document.getElementById('guestCount').value = '1'; document.getElementById('dietaryRestrictions').value = ''; }
      });
    }

    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var nameEl = document.getElementById('guestName');
      var dietEl = document.getElementById('dietaryRestrictions');
      var msgEl = document.getElementById('messageToCouple');

      var name = sanitize(nameEl.value).slice(0, 20);
      var diet = sanitize(dietEl.value).slice(0, 100);
      var msg = sanitize(msgEl.value).slice(0, 150);

      nameEl.value = name;
      dietEl.value = diet;
      msgEl.value = msg;

      if (!name) return;
      form.style.display = 'none';
      success.style.display = 'block';
    });
  }

  /* MUSIC TOGGLE */
  function initMusic() {
    var audio = document.getElementById('bgMusic');
    var btn = document.getElementById('musicToggle');
    if (!audio || !btn) return;
    btn.addEventListener('click', function () {
      if (audio.paused) { audio.play().catch(function () {}); btn.classList.remove('music-toggle--paused'); }
      else { audio.pause(); btn.classList.add('music-toggle--paused'); }
    });
  }

  /* INIT */
  document.addEventListener('DOMContentLoaded', function () {
    applyLanguage('en');
    initCountdown();
    initCalendarButtons();
    initGifts();
    initScrollReveal();
    initVideo();
    initLangToggle();
    initMusic();
    initRSVP();
    initGallery();
    initPetals();
    initBrownPetals();
    initBokeh();
  });
})();