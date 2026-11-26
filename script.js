// Eseguiamo il codice solo quando il DOM HTML è completamente caricato
document.addEventListener("DOMContentLoaded", () => {
  /* =========================================================
     1. DIZIONARIO TRADUZIONI (ITALIANO / INGLESE)
  ========================================================== */
  const translations = {
    it: {
      "meta.title": "Aldo Dishani | Junior Web Developer — Bologna",
      "meta.description":
        "Portfolio di Aldo Dishani, Junior Web Developer in formazione in AI Web Development presso Boolean a Bologna, Italia. Progetti reali in HTML5, CSS3 e JavaScript.",
      "a11y.skip": "Vai al contenuto principale",
      "a11y.mainNav": "Navigazione principale",
      "a11y.langSwitch": "Selettore lingua",
      "a11y.menuToggle": "Apri menu di navigazione",
      "a11y.menuClose": "Chiudi menu di navigazione",
      "a11y.codeCard": "Scheda profilo sviluppatore",
      "a11y.projectFilters": "Filtra i progetti per tecnologia",

      "nav.home": "Home",
      "nav.about": "Chi sono",
      "nav.transition": "Percorso",
      "nav.skills": "Competenze",
      "nav.projects": "Progetti",
      "nav.contact": "Contatti",

      "hero.openToWork": "Open to Work",
      "hero.academyBadge": "AI Web Development @ Boolean",
      "hero.location": "Bologna, Italia",
      "hero.greeting": "Ciao, sono",
      "hero.description":
        "In formazione in AI Web Development presso Boolean, con base a Bologna, Italia. Disponibile per posizioni Junior Web Developer, stage, tirocini e apprendistato.",
      "hero.btnProjects": "Esplora i Progetti",
      "hero.btnContact": "Contattami",
      "hero.btnCv": "Scarica CV",
      "hero.cvNotReady":
        "CV non ancora caricato: inserisci il file PDF in assets/cv/Aldo-Dishani-CV.pdf.",

      "about.tag": "Profilo",
      "about.titleMain": "Chi",
      "about.titleAccent": "sono",
      "about.photoHint": "Spazio foto personale",
      "about.heading": "Formazione in AI Web Development presso Boolean",
      "about.p1":
        "Mi chiamo Aldo Dishani, vivo a Bologna, Italia e sto frequentando il percorso formativo in AI Web Development presso Boolean. Sto costruendo le mie competenze nello sviluppo web partendo dalle basi e dalla pratica quotidiana.",
      "about.p2":
        "Lavoro su HTML5, CSS3 e JavaScript per creare pagine ordinate, accessibili e responsive, utilizzando GitHub per il controllo versione e Google Antigravity come strumento di supporto allo sviluppo assistito dall'AI.",
      "about.p3":
        "Sono disponibile per posizioni Junior Web Developer, stage, tirocini e apprendistato, pronto a crescere in un contesto professionale serio e collaborativo.",

      "transition.tag": "Transizione Professionale",
      "transition.titleMain": "Dalla metalmeccanica",
      "transition.titleAccent": "al Web",
      "transition.description":
        "Un cambiamento di percorso costruito con metodo, studio costante e mentalità operativa.",
      "transition.story":
        "Prima di intraprendere il percorso in AI Web Development presso Boolean, ho maturato esperienza lavorativa nel settore metalmeccanico. Anche se è un ambito diverso dall'informatica, mi ha insegnato a lavorare con precisione, rispettare le consegne, gestire i compiti in autonomia e mantenere alta l'attenzione anche nelle attività ripetitive o complesse. Oggi porto lo stesso approccio serio e concreto nello studio del codice e nello sviluppo web.",
      "transition.v1Title": "Affidabilità",
      "transition.v1Desc":
        "Puntualità, senso di responsabilità e attenzione costante verso il risultato finale e le esigenze del team.",
      "transition.v2Title": "Autonomia",
      "transition.v2Desc":
        "Capacità di organizzare il lavoro, analizzare un problema passo dopo passo e cercare soluzioni in modo ordinato.",
      "transition.v3Title": "Disciplina",
      "transition.v3Desc":
        "Costanza nell'esercizio quotidiano, rispetto delle procedure e voglia continua di imparare e migliorarsi.",

      "skills.tag": "Competenze",
      "skills.titleMain": "Le mie",
      "skills.titleAccent": "Competenze",
      "skills.description":
        "Le conoscenze che sto acquisendo nella pratica, gli strumenti quotidiani e le lingue che parlo.",
      "skills.htmlP1": "Struttura semantica con header, nav, main, section e footer.",
      "skills.htmlP2": "Creazione di form, input tipizzati, label e attributi alt/aria.",
      "skills.htmlP3": "Impaginazione di card, liste, immagini e link esterni sicuri.",
      "skills.cssP1": "Layout responsive con Flexbox, CSS Grid e media query.",
      "skills.cssP2": "Uso di variabili CSS (:root) per mantenere colori e stili coerenti.",
      "skills.cssP3": "Transizioni, stati hover/focus e adattamento smartphone, tablet e desktop.",
      "skills.jsP1": "Variabili, array, oggetti, condizioni e cicli for.",
      "skills.jsP2": "Manipolazione del DOM e gestione degli eventi (click, scroll).",
      "skills.jsP3": "Validazione input e salvataggio dati lato browser con localStorage.",
      "skills.gitP1": "Creazione e aggiornamento di repository didattici su GitHub.",
      "skills.gitP2": "Gestione di commit ordinati per tracciare i progressi del codice.",
      "skills.gitP3": "Organizzazione dei file di progetto per la pubblicazione statica.",
      "skills.toolsTitle": "Strumenti utilizzati",
      "skills.toolGithub":
        "Versioning del codice, archivio dei progetti didattici e pubblicazione tramite GitHub Pages.",
      "skills.toolAntigravity":
        "Ambiente AI-assisted utilizzato durante la formazione in AI Web Development per scrivere, analizzare e migliorare il codice.",
      "skills.languagesTitle": "Competenze Linguistiche",
      "skills.langAlbanian": "Albanese",
      "skills.langItalian": "Italiano",
      "skills.langEnglish": "Inglese",
      "skills.langGerman": "Tedesco",
      "skills.levelNative": "Madrelingua",

      "projects.tag": "Progetti Didattici Reali",
      "projects.titleMain": "I miei",
      "projects.titleAccent": "Progetti",
      "projects.description":
        "Tutti i progetti didattici reali realizzati durante il percorso di studio e pubblicati sul mio profilo GitHub.",
      "projects.filterAll": "Tutti",
      "projects.previewPending": "Anteprima in arrivo",
      "projects.viewGithub": "Codice su GitHub →",
      "projects.p1Type": "DOM & localStorage",
      "projects.p1Desc":
        "Pagina \"Meet Our Team\" che genera dinamicamente le schede dei membri in JavaScript, consente di aggiungerne di nuovi tramite form e salva i dati in localStorage.",
      "projects.p2Type": "Logica & Form",
      "projects.p2Desc":
        "Calcolatore interattivo del prezzo di un biglietto in base ai chilometri percorsi (0,21 €/km), con sconti automatici per minorenni (-20%) e Over 65 (-40%).",
      "projects.p3Type": "Esercizi JavaScript",
      "projects.p3Desc":
        "Raccolta di esercizi didattici dedicati ai cicli for, alle variabili e al calcolo di somme e medie in JavaScript.",
      "projects.p4Type": "Basi di JavaScript",
      "projects.p4Desc":
        "Primi esercizi con dichiarazione di costanti e variabili, operazioni aritmetiche e concatenazione di stringhe in console.",
      "projects.p5Type": "Primi Layout HTML/CSS",
      "projects.p5Desc":
        "Primo esercizio pratico di struttura HTML e collegamento di un foglio di stile CSS esterno per impaginare card, testi e immagini.",

      "contact.tag": "Parliamoci",
      "contact.titleAccent": "Contatti",
      "contact.description":
        "Disponibile a Bologna, Italia per posizioni Junior Web Developer, stage, tirocini e apprendistato.",
      "contact.infoTitle": "Informazioni di contatto",
      "contact.infoText":
        "Sono aperto a opportunità di ingresso nel mondo dello sviluppo web, a confronti con altri sviluppatori e a feedback sui miei progetti didattici.",
      "contact.labelName": "Nome",
      "contact.labelLocation": "Località",
      "contact.labelTraining": "Formazione",
      "contact.labelAvailability": "Disponibilità",
      "contact.availabilityValue":
        "Junior Web Developer, Stage, Tirocinio, Apprendistato",
      "contact.labelStatus": "Stato",
      "contact.directTitle": "Scrivimi direttamente",
      "contact.directText":
        "Per inviarmi un messaggio reale, clicca sul pulsante qui sotto per aprire il tuo client email oppure copia direttamente il mio indirizzo.",
      "contact.sendEmail": "Scrivimi via Email",
      "contact.copyEmail": "Copia indirizzo Email",
      "contact.visitGithub": "Visita il profilo GitHub",
      "contact.copied": "Email copiata negli appunti: dishanialdo4@gmail.com"
    },

    en: {
      "meta.title": "Aldo Dishani | Junior Web Developer — Bologna, Italy",
      "meta.description":
        "Personal portfolio of Aldo Dishani, Junior Web Developer training in AI Web Development at Boolean in Bologna, Italy. Real learning projects in HTML5, CSS3, and JavaScript.",
      "a11y.skip": "Skip to main content",
      "a11y.mainNav": "Main navigation",
      "a11y.langSwitch": "Language selector",
      "a11y.menuToggle": "Open navigation menu",
      "a11y.menuClose": "Close navigation menu",
      "a11y.codeCard": "Developer profile card",
      "a11y.projectFilters": "Filter projects by technology",

      "nav.home": "Home",
      "nav.about": "About Me",
      "nav.transition": "Journey",
      "nav.skills": "Skills",
      "nav.projects": "Projects",
      "nav.contact": "Contact",

      "hero.openToWork": "Open to Work",
      "hero.academyBadge": "AI Web Development @ Boolean",
      "hero.location": "Bologna, Italy",
      "hero.greeting": "Hi, I'm",
      "hero.description":
        "Training in AI Web Development at Boolean, based in Bologna, Italy. Available for Junior Web Developer roles, internships, traineeships, and apprenticeships.",
      "hero.btnProjects": "Explore Projects",
      "hero.btnContact": "Contact Me",
      "hero.btnCv": "Download CV",
      "hero.cvNotReady":
        "CV not uploaded yet: add your PDF file at assets/cv/Aldo-Dishani-CV.pdf.",

      "about.tag": "Profile",
      "about.titleMain": "About",
      "about.titleAccent": "Me",
      "about.photoHint": "Personal photo slot",
      "about.heading": "AI Web Development Training at Boolean",
      "about.p1":
        "My name is Aldo Dishani, I live in Bologna, Italy and I am attending the AI Web Development training program at Boolean. I am building my web development skills from the ground up through daily hands-on practice.",
      "about.p2":
        "I work with HTML5, CSS3, and JavaScript to build clean, accessible, and responsive pages, using GitHub for version control and Google Antigravity as an AI-assisted development tool.",
      "about.p3":
        "I am available for Junior Web Developer positions, internships, traineeships, and apprenticeships, eager to grow inside a collaborative professional team.",

      "transition.tag": "Career Transition",
      "transition.titleMain": "From Metalworking",
      "transition.titleAccent": "to Web",
      "transition.description":
        "A career change built with method, consistent study, and a practical mindset.",
      "transition.story":
        "Before starting the AI Web Development program at Boolean, I gained work experience in the metalworking sector. Even though it is a different field from software, it taught me to work accurately, meet deadlines, manage tasks independently, and stay focused on complex or repetitive processes. Today I bring that same serious and hands-on approach to learning code and building on the web.",
      "transition.v1Title": "Reliability",
      "transition.v1Desc":
        "Punctuality, sense of responsibility, and constant care for the final result and team goals.",
      "transition.v2Title": "Autonomy",
      "transition.v2Desc":
        "Ability to organize daily work, break down problems step by step, and look for structured solutions.",
      "transition.v3Title": "Discipline",
      "transition.v3Desc":
        "Consistency in daily practice, respect for procedures, and continuous willingness to learn and improve.",

      "skills.tag": "Skills",
      "skills.titleMain": "My",
      "skills.titleAccent": "Skills",
      "skills.description":
        "The practical knowledge I am building, the tools I use daily, and the languages I speak.",
      "skills.htmlP1": "Semantic page structure using header, nav, main, section, and footer.",
      "skills.htmlP2": "Building forms, typed inputs, labels, and alt/aria attributes.",
      "skills.htmlP3": "Structuring cards, lists, images, and safe external links.",
      "skills.cssP1": "Responsive layouts with Flexbox, CSS Grid, and media queries.",
      "skills.cssP2": "Using CSS variables (:root) to keep colors and styles consistent.",
      "skills.cssP3": "Transitions, hover/focus states, and adaptation for mobile, tablet, and desktop.",
      "skills.jsP1": "Variables, arrays, objects, conditionals, and for loops.",
      "skills.jsP2": "DOM manipulation and event handling (click, scroll).",
      "skills.jsP3": "Input validation and browser-side persistence with localStorage.",
      "skills.gitP1": "Creating and updating learning repositories on GitHub.",
      "skills.gitP2": "Writing organized commits to track code progress.",
      "skills.gitP3": "Organizing project files cleanly for static publishing.",
      "skills.toolsTitle": "Tools I Use",
      "skills.toolGithub":
        "Code versioning, archive of learning projects, and hosting via GitHub Pages.",
      "skills.toolAntigravity":
        "AI-assisted development environment used during my AI Web Development training to write, analyze, and improve code.",
      "skills.languagesTitle": "Spoken Languages",
      "skills.langAlbanian": "Albanian",
      "skills.langItalian": "Italian",
      "skills.langEnglish": "English",
      "skills.langGerman": "German",
      "skills.levelNative": "Native",

      "projects.tag": "Real Learning Projects",
      "projects.titleMain": "My",
      "projects.titleAccent": "Projects",
      "projects.description":
        "All real learning projects built during my study path and published on my GitHub profile.",
      "projects.filterAll": "All",
      "projects.previewPending": "Preview coming soon",
      "projects.viewGithub": "Code on GitHub →",
      "projects.p1Type": "DOM & localStorage",
      "projects.p1Desc":
        "\"Meet Our Team\" page that dynamically generates team member cards in JavaScript, lets users add new members via form, and saves data in localStorage.",
      "projects.p2Type": "Logic & Form",
      "projects.p2Desc":
        "Interactive ticket price calculator based on travel distance (0.21 €/km), with automatic discounts for minors (-20%) and Over 65 (-40%).",
      "projects.p3Type": "JavaScript Exercises",
      "projects.p3Desc":
        "Collection of learning exercises focused on for loops, variables, and calculating sums and averages in JavaScript.",
      "projects.p4Type": "JavaScript Basics",
      "projects.p4Desc":
        "Introductory exercises with constants, variables, arithmetic operations, and string concatenation in the console.",
      "projects.p5Type": "First HTML/CSS Layout",
      "projects.p5Desc":
        "First practical exercise on HTML structure and linking an external CSS stylesheet to style cards, text, and images.",

      "contact.tag": "Get in touch",
      "contact.titleAccent": "Contact",
      "contact.description":
        "Available in Bologna, Italy for Junior Web Developer roles, internships, traineeships, and apprenticeships.",
      "contact.infoTitle": "Contact information",
      "contact.infoText":
        "I am open to entry-level opportunities in web development, connecting with other developers, and receiving feedback on my learning projects.",
      "contact.labelName": "Name",
      "contact.labelLocation": "Location",
      "contact.labelTraining": "Training",
      "contact.labelAvailability": "Availability",
      "contact.availabilityValue":
        "Junior Web Developer, Internship, Traineeship, Apprenticeship",
      "contact.labelStatus": "Status",
      "contact.directTitle": "Email me directly",
      "contact.directText":
        "To send me a real message, click the button below to open your email client or copy my address directly.",
      "contact.sendEmail": "Send Email",
      "contact.copyEmail": "Copy Email Address",
      "contact.visitGithub": "Visit GitHub Profile",
      "contact.copied": "Email copied to clipboard: dishanialdo4@gmail.com"
    }
  };

  let currentLang = "it";

  /* =========================================================
     2. GESTIONE IMMAGINI OPZIONALI (Foto personale e Preview progetti)
     Se i file non sono ancora presenti nelle cartelle assets/,
     nasconde l'<img> e lascia visibile il fallback elegante.
  ========================================================== */
  const aboutPhoto = document.getElementById("about-photo");
  const aboutPlaceholder = document.getElementById("about-photo-placeholder");

  if (aboutPhoto && aboutPlaceholder) {
    const showPhoto = () => {
      aboutPhoto.classList.remove("is-hidden");
      aboutPlaceholder.classList.add("is-hidden");
    };
    const showPlaceholder = () => {
      aboutPhoto.classList.add("is-hidden");
      aboutPlaceholder.classList.remove("is-hidden");
    };

    aboutPhoto.addEventListener("load", showPhoto);
    aboutPhoto.addEventListener("error", showPlaceholder);

    if (aboutPhoto.complete) {
      if (aboutPhoto.naturalWidth > 0) showPhoto();
      else showPlaceholder();
    }
  }

  document.querySelectorAll(".project-preview").forEach((img) => {
    const note = img.parentElement?.querySelector(".project-preview-note");
    const showPreview = () => {
      img.classList.remove("is-hidden");
      if (note) note.classList.add("is-hidden");
    };
    const hidePreview = () => {
      img.classList.add("is-hidden");
      if (note) note.classList.remove("is-hidden");
    };

    img.addEventListener("load", showPreview);
    img.addEventListener("error", hidePreview);

    if (img.complete) {
      if (img.naturalWidth > 0) showPreview();
      else hidePreview();
    }
  });

  /* =========================================================
     3. MENU MOBILE (HAMBURGER)
  ========================================================== */
  const navToggle = document.getElementById("nav-toggle");
  const navMenu = document.getElementById("nav-menu");
  const navLinks = document.querySelectorAll(".nav-link");

  if (navToggle && navMenu) {
    navToggle.addEventListener("click", () => {
      const isOpen = navMenu.classList.toggle("open");
      navToggle.classList.toggle("open", isOpen);
      navToggle.setAttribute("aria-expanded", String(isOpen));
      navToggle.setAttribute(
        "aria-label",
        translations[currentLang][isOpen ? "a11y.menuClose" : "a11y.menuToggle"]
      );
    });

    navLinks.forEach((link) => {
      link.addEventListener("click", () => {
        navMenu.classList.remove("open");
        navToggle.classList.remove("open");
        navToggle.setAttribute("aria-expanded", "false");
        navToggle.setAttribute("aria-label", translations[currentLang]["a11y.menuToggle"]);
      });
    });
  }

  /* =========================================================
     4. EFFETTO MACCHINA DA SCRIVERE NELLA SEZIONE HOME
  ========================================================== */
  const typingElement = document.getElementById("typing-role");
  const rolesByLang = {
    it: [
      "HTML5, CSS3 & JavaScript",
      "AI Web Development @ Boolean",
      "GitHub & Google Antigravity",
      "Bologna, Italia"
    ],
    en: [
      "HTML5, CSS3 & JavaScript",
      "AI Web Development @ Boolean",
      "GitHub & Google Antigravity",
      "Bologna, Italy"
    ]
  };

  let roleIndex = 0;
  let charIndex = rolesByLang[currentLang][0].length;
  let isDeleting = true;
  let typingTimer = null;

  function typeRole() {
    if (!typingElement) return;

    const roles = rolesByLang[currentLang];
    const currentText = roles[roleIndex % roles.length];

    if (isDeleting) {
      charIndex--;
      typingElement.textContent = currentText.slice(0, charIndex);
    } else {
      charIndex++;
      typingElement.textContent = currentText.slice(0, charIndex);
    }

    let delay = isDeleting ? 45 : 85;

    if (!isDeleting && charIndex >= currentText.length) {
      delay = 1600;
      isDeleting = true;
    } else if (isDeleting && charIndex <= 0) {
      isDeleting = false;
      roleIndex = (roleIndex + 1) % roles.length;
      delay = 350;
    }

    typingTimer = setTimeout(typeRole, delay);
  }

  if (typingElement) {
    typingElement.textContent = rolesByLang[currentLang][0];
    typingTimer = setTimeout(typeRole, 1500);
  }

  /* =========================================================
     5. SELETTORE LINGUA (IT / EN)
  ========================================================== */
  const langButtons = document.querySelectorAll(".lang-btn");
  const cvFeedback = document.getElementById("cv-feedback");
  const copyFeedback = document.getElementById("copy-feedback");
  const metaDescription = document.querySelector('meta[name="description"]');

  function setLanguage(lang) {
    if (!translations[lang]) return;
    currentLang = lang;
    document.documentElement.lang = lang;
    document.title = translations[lang]["meta.title"];

    if (metaDescription) {
      metaDescription.setAttribute("content", translations[lang]["meta.description"]);
    }

    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.dataset.i18n;
      if (translations[lang][key]) {
        el.textContent = translations[lang][key];
      }
    });

    document.querySelectorAll("[data-i18n-aria]").forEach((el) => {
      const key = el.dataset.i18nAria;
      if (translations[lang][key]) {
        el.setAttribute("aria-label", translations[lang][key]);
      }
    });

    langButtons.forEach((btn) => {
      const isActive = btn.dataset.lang === lang;
      btn.classList.toggle("active", isActive);
      btn.setAttribute("aria-pressed", String(isActive));
    });

    if (cvFeedback) cvFeedback.textContent = "";
    if (copyFeedback) copyFeedback.textContent = "";

    if (typingElement) {
      clearTimeout(typingTimer);
      roleIndex = 0;
      isDeleting = true;
      charIndex = rolesByLang[currentLang][0].length;
      typingElement.textContent = rolesByLang[currentLang][0];
      typingTimer = setTimeout(typeRole, 1200);
    }
  }

  langButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      setLanguage(btn.dataset.lang);
    });
  });

  /* =========================================================
     6. PULSANTE "SCARICA CV" DALLA CARTELLA assets/cv/
     Su HTTP/HTTPS (es. GitHub Pages) verifica automaticamente se il PDF esiste.
  ========================================================== */
  const downloadCvBtn = document.getElementById("download-cv-btn");

  if (downloadCvBtn && cvFeedback) {
    const cvHref = downloadCvBtn.getAttribute("href");

    if (window.location.protocol.startsWith("http") && cvHref) {
      fetch(cvHref, { method: "HEAD" })
        .then((res) => {
          if (res.ok) {
            downloadCvBtn.dataset.cvReady = "true";
          }
        })
        .catch(() => {
          // Rimane predisposto in attesa del file PDF
        });
    }

    downloadCvBtn.addEventListener("click", (event) => {
      if (downloadCvBtn.dataset.cvReady !== "true") {
        event.preventDefault();
        cvFeedback.textContent = translations[currentLang]["hero.cvNotReady"];
      }
    });
  }

  /* =========================================================
     7. EVIDENZIAZIONE LINK ATTIVO NELLA NAVBAR ALLO SCROLL
  ========================================================== */
  const sections = document.querySelectorAll("main section[id]");

  function updateActiveNavLink() {
    const scrollPosition = window.scrollY + 140;

    sections.forEach((section) => {
      const top = section.offsetTop;
      const height = section.offsetHeight;
      const id = section.getAttribute("id");

      if (scrollPosition >= top && scrollPosition < top + height) {
        navLinks.forEach((link) => {
          link.classList.toggle("active", link.getAttribute("href") === `#${id}`);
        });
      }
    });
  }

  window.addEventListener("scroll", updateActiveNavLink, { passive: true });

  /* =========================================================
     8. ANIMAZIONE DI COMPARSA ELEMENTI ALLO SCROLL
  ========================================================== */
  const revealElements = document.querySelectorAll(".reveal");

  function revealInViewport() {
    revealElements.forEach((el) => {
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight * 0.95) {
        el.classList.add("visible");
      }
    });
  }

  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08 }
    );

    revealElements.forEach((el) => observer.observe(el));
    revealInViewport();
  } else {
    revealElements.forEach((el) => el.classList.add("visible"));
  }

  /* =========================================================
     9. FILTRO INTERATTIVO DEI PROGETTI
  ========================================================== */
  const filterButtons = document.querySelectorAll(".filter-btn");
  const projectCards = document.querySelectorAll(".project-card");

  filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      filterButtons.forEach((btn) => btn.classList.remove("active"));
      button.classList.add("active");

      const filterValue = button.dataset.filter;

      projectCards.forEach((card) => {
        const category = card.dataset.category;
        const shouldShow = filterValue === "all" || category === filterValue;
        card.classList.toggle("hidden", !shouldShow);
      });
    });
  });

  /* =========================================================
     10. COPIA EMAIL NEGLI APPUNTI (SEZIONE CONTATTI)
  ========================================================== */
  const copyEmailBtn = document.getElementById("copy-email-btn");

  if (copyEmailBtn && copyFeedback) {
    copyEmailBtn.addEventListener("click", async () => {
      const email = copyEmailBtn.dataset.email || "dishanialdo4@gmail.com";

      try {
        await navigator.clipboard.writeText(email);
        copyFeedback.textContent = translations[currentLang]["contact.copied"];
      } catch {
        // Fallback per browser senza Clipboard API su file://
        const tempInput = document.createElement("input");
        tempInput.value = email;
        document.body.appendChild(tempInput);
        tempInput.select();
        document.execCommand("copy");
        document.body.removeChild(tempInput);
        copyFeedback.textContent = translations[currentLang]["contact.copied"];
      }
    });
  }

  /* =========================================================
     11. ANNO CORRENTE AUTOMATICO NEL FOOTER
  ========================================================== */
  const yearElement = document.getElementById("current-year");
  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }
});
