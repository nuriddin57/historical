const commonsFile = (filename) =>
  `https://commons.wikimedia.org/wiki/Special:FilePath/${encodeURIComponent(filename)}`;

const heroBackground = commonsFile('Great Wall of China July 2006.JPG');
const contactBackground = commonsFile('Stonehenge2007 07 30.jpg');

const figures = [
  {
    name: 'Napoleon Bonaparte',
    years: '1769-1821',
    region: 'France',
    description:
      'Napoleon transformed Europe through military conquest, state reform, and the spread of the Napoleonic Code. His rise from general to emperor remains one of history’s most dramatic political arcs.',
    image: commonsFile('Napoleon I of France by Andrea Appiani.jpg'),
  },
  {
    name: 'Albert Einstein',
    years: '1879-1955',
    region: 'Germany / United States',
    description:
      'Einstein reshaped modern physics with the theories of special and general relativity. His work changed how humanity understands space, time, energy, and the structure of the universe.',
    image: commonsFile('Albert Einstein Head.jpg'),
  },
  {
    name: 'Marie Curie',
    years: '1867-1934',
    region: 'Poland / France',
    description:
      'Marie Curie pioneered research on radioactivity and became the first person to win two Nobel Prizes in different sciences. Her work opened new paths in both physics and medicine.',
    image: commonsFile('Marie Curie c1920.jpg'),
  },
  {
    name: 'Mahatma Gandhi',
    years: '1869-1948',
    region: 'India',
    description:
      'Gandhi led India’s struggle for independence with nonviolent resistance and civil disobedience. His political philosophy influenced freedom movements across the world.',
    image: commonsFile('Mahatma-Gandhi, studio, 1931.jpg'),
  },
  {
    name: 'Abraham Lincoln',
    years: '1809-1865',
    region: 'United States',
    description:
      'Lincoln guided the United States through the Civil War and issued the Emancipation Proclamation. He is remembered for preserving the Union and redefining the nation’s moral direction.',
    image: commonsFile('Abraham Lincoln O-77 matte collodion print.jpg'),
  },
  {
    name: 'Ada Lovelace',
    years: '1815-1852',
    region: 'United Kingdom',
    description:
      'Ada Lovelace wrote visionary notes on Charles Babbage’s Analytical Engine and is often described as the world’s first computer programmer. Her ideas anticipated software long before electronic computers existed.',
    image: commonsFile('Ada Lovelace portrait.jpg'),
  },
  {
    name: 'Isaac Newton',
    years: '1642-1727',
    region: 'England',
    description:
      'Newton established the laws of motion and universal gravitation while also making major advances in mathematics and optics. His work shaped the scientific revolution for centuries.',
    image: commonsFile('GodfreyKneller-IsaacNewton-1689.jpg'),
  },
  {
    name: 'Nikola Tesla',
    years: '1856-1943',
    region: 'Serbia / United States',
    description:
      'Tesla developed groundbreaking ideas in alternating current, electrical engineering, and wireless energy transmission. His inventions helped define the technological modern age.',
    image: commonsFile('Tesla circa 1890.jpeg'),
  },
];

const places = [
  {
    name: 'Registan Square',
    location: 'Samarkand, Uzbekistan',
    era: '15th-17th centuries',
    description:
      'This monumental square became one of Central Asia’s greatest centers of learning and public life. Its tiled madrasas remain among the most recognizable landmarks of the Silk Road.',
    image: commonsFile('Registan square (Samarkand).jpg'),
    size: 'wide',
  },
  {
    name: 'The Colosseum',
    location: 'Rome, Italy',
    era: '1st century CE',
    description:
      'Built under the Roman Empire, the Colosseum hosted gladiatorial contests and public spectacles. It remains one of the strongest architectural symbols of ancient Rome.',
    image: commonsFile('Colosseum in Rome, Italy - April 2007.jpg'),
    size: 'standard',
  },
  {
    name: 'Pyramids of Giza',
    location: 'Giza, Egypt',
    era: 'c. 2600-2500 BCE',
    description:
      'The pyramids stand as some of the oldest and most powerful architectural achievements in human history. They continue to define the visual memory of ancient Egypt.',
    image: commonsFile('Pyramids of the Giza Necropolis.jpg'),
    size: 'wide',
  },
  {
    name: 'Petra',
    location: 'Ma’an Governorate, Jordan',
    era: 'Nabataean Kingdom',
    description:
      'Petra is famous for rock-cut facades carved directly into rose-colored stone. It was once a thriving trade hub linking Arabia, Egypt, and the Mediterranean world.',
    image: commonsFile('Petra Jordan BW 21.JPG'),
    size: 'standard',
  },
  {
    name: 'Taj Mahal',
    location: 'Agra, India',
    era: '17th century',
    description:
      'Commissioned by Shah Jahan, the Taj Mahal is both a mausoleum and an enduring symbol of imperial artistry. Its white marble silhouette remains one of the world’s best-known historical images.',
    image: commonsFile('Taj Mahal in March 2004.jpg'),
    size: 'standard',
  },
  {
    name: 'Machu Picchu',
    location: 'Cusco Region, Peru',
    era: '15th century',
    description:
      'Perched high in the Andes, Machu Picchu reveals the engineering and ceremonial sophistication of the Inca world. Its mountain setting makes it one of history’s most cinematic places.',
    image: commonsFile('Machu Picchu, Perú.jpg'),
    size: 'tall',
  },
  {
    name: 'Hagia Sophia',
    location: 'Istanbul, Türkiye',
    era: '6th century',
    description:
      'Hagia Sophia moved across empires and faiths, serving as cathedral, mosque, museum, and mosque again. Few buildings better capture how architecture can hold multiple historical identities.',
    image: commonsFile('Hagia Sophia Mars 2013.jpg'),
    size: 'standard',
  },
  {
    name: 'Great Wall of China',
    location: 'Near Beijing, China',
    era: 'Various dynasties',
    description:
      'Stretching across mountain ridges and plains, the Great Wall represents centuries of military planning and imperial defense. It is one of the most expansive historical landscapes ever built.',
    image: commonsFile('Great Wall of China July 2006.JPG'),
    size: 'standard',
  },
];

const heroHighlights = [
  {
    title: 'Samarkand',
    tag: 'Silk Road city',
    image: commonsFile('Registan square Samarkand.jpg'),
  },
  {
    title: 'Napoleon',
    tag: 'Empire and reform',
    image: commonsFile('Napoleon-aux-tuileries.jpg'),
  },
  {
    title: 'Marie Curie',
    tag: 'Science and discovery',
    image: commonsFile('Marie Curie c1920.jpg'),
  },
  {
    title: 'Giza',
    tag: 'Ancient monumentality',
    image: commonsFile('Giza Necropolis.jpg'),
  },
];

const spotlightStories = [
  {
    title: 'Imperial portraiture',
    tag: 'Visual memory',
    image: commonsFile('Queen Victoria by Bassano.jpg'),
  },
  {
    title: 'Scholars of the modern world',
    tag: 'Ideas that endure',
    image: commonsFile('Albert Einstein Head.jpg'),
  },
  {
    title: 'Stone cities and sacred skylines',
    tag: 'Architecture',
    image: commonsFile('Hagia Sophia Mars 2013 (2).jpg'),
  },
  {
    title: 'Lost worlds rediscovered',
    tag: 'Highland heritage',
    image: commonsFile('Machu Picchu Peru.JPG'),
  },
];

const figuresGrid = document.getElementById('figuresGrid');
const placesGrid = document.getElementById('placesGrid');
const heroGallery = document.getElementById('heroGallery');
const spotlightStrip = document.getElementById('spotlightStrip');
const heroBackdrop = document.getElementById('heroBackdrop');
const contactBackdrop = document.getElementById('contactBackdrop');
const menuToggle = document.getElementById('menuToggle');
const siteShell = document.querySelector('.site-shell');

const lightbox = document.getElementById('lightbox');
const lightboxImage = document.getElementById('lightboxImage');
const lightboxTitle = document.getElementById('lightboxTitle');
const lightboxMeta = document.getElementById('lightboxMeta');
const lightboxDescription = document.getElementById('lightboxDescription');
const lightboxClose = document.getElementById('lightboxClose');
const lightboxPrev = document.getElementById('lightboxPrev');
const lightboxNext = document.getElementById('lightboxNext');

const mediaLibrary = [];
let activeMediaIndex = 0;

const registerMedia = (item) => {
  mediaLibrary.push(item);
  return mediaLibrary.length - 1;
};

const createMediaButton = (index) =>
  `<button class="media-button" type="button" data-media-index="${index}" aria-label="Open image in larger view">View</button>`;

const createHeroCard = (item, index) => {
  const mediaIndex = registerMedia({
    image: item.image,
    title: item.title,
    meta: item.tag,
    description: 'Open the image for a larger view.',
  });

  return `
    <article class="hero-gallery-card reveal" style="transition-delay:${index * 80}ms">
      <img src="${item.image}" alt="${item.title}" loading="lazy" decoding="async" />
      ${createMediaButton(mediaIndex)}
      <div class="hero-gallery-copy">
        <span>${item.tag}</span>
        <h3>${item.title}</h3>
      </div>
    </article>
  `;
};

const createSpotlightItem = (item, index) => {
  const mediaIndex = registerMedia({
    image: item.image,
    title: item.title,
    meta: item.tag,
    description: 'Open the image for a larger view.',
  });

  return `
    <article class="spotlight-item reveal" style="transition-delay:${index * 90}ms">
      <img src="${item.image}" alt="${item.title}" loading="lazy" decoding="async" />
      ${createMediaButton(mediaIndex)}
      <div class="spotlight-item-copy">
        <span>${item.tag}</span>
        <h3>${item.title}</h3>
      </div>
    </article>
  `;
};

const createFigureCard = (figure, index) => {
  const mediaIndex = registerMedia({
    image: figure.image,
    title: figure.name,
    meta: `${figure.region} · ${figure.years}`,
    description: figure.description,
  });

  return `
    <article class="figure-card reveal" style="transition-delay:${index * 70}ms">
      <div class="figure-media">
        <img src="${figure.image}" alt="${figure.name}" loading="lazy" decoding="async" />
        ${createMediaButton(mediaIndex)}
      </div>
      <div class="card-copy">
        <h3>${figure.name}</h3>
        <div class="card-meta">
          <span>${figure.region}</span>
          <span>${figure.years}</span>
        </div>
        <p>${figure.description}</p>
      </div>
    </article>
  `;
};

const createPlaceCard = (place, index) => {
  const mediaIndex = registerMedia({
    image: place.image,
    title: place.name,
    meta: `${place.location} · ${place.era}`,
    description: place.description,
  });

  return `
    <article class="place-card place-${place.size} reveal" style="transition-delay:${index * 80}ms">
      <div class="place-media">
        <img src="${place.image}" alt="${place.name}" loading="lazy" decoding="async" />
        ${createMediaButton(mediaIndex)}
      </div>
      <div class="place-copy">
        <span class="place-kicker">${place.location}</span>
        <h3>${place.name}</h3>
        <div class="place-meta">
          <span>${place.era}</span>
        </div>
        <p>${place.description}</p>
      </div>
    </article>
  `;
};

const renderPage = () => {
  heroBackdrop.style.backgroundImage = `url("${heroBackground}")`;
  contactBackdrop.style.backgroundImage = `url("${contactBackground}")`;

  heroGallery.innerHTML = heroHighlights.map(createHeroCard).join('');
  spotlightStrip.innerHTML = spotlightStories.map(createSpotlightItem).join('');
  figuresGrid.innerHTML = figures.map(createFigureCard).join('');
  placesGrid.innerHTML = places.map(createPlaceCard).join('');
};

const revealElements = () => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.16,
      rootMargin: '0px 0px -60px 0px',
    },
  );

  document.querySelectorAll('.reveal').forEach((element) => {
    observer.observe(element);
  });
};

const openLightbox = (index) => {
  activeMediaIndex = index;
  const item = mediaLibrary[index];
  if (!item) return;

  lightboxImage.src = item.image;
  lightboxImage.alt = item.title;
  lightboxTitle.textContent = item.title;
  lightboxMeta.textContent = item.meta;
  lightboxDescription.textContent = item.description;
  lightbox.classList.add('is-open');
  lightbox.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
};

const closeLightbox = () => {
  lightbox.classList.remove('is-open');
  lightbox.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
};

const moveLightbox = (direction) => {
  if (!mediaLibrary.length) return;
  activeMediaIndex =
    (activeMediaIndex + direction + mediaLibrary.length) % mediaLibrary.length;
  openLightbox(activeMediaIndex);
};

document.addEventListener('click', (event) => {
  const mediaTrigger = event.target.closest('[data-media-index]');
  if (mediaTrigger) {
    openLightbox(Number(mediaTrigger.dataset.mediaIndex));
    return;
  }

  if (event.target.closest('.nav-panel a')) {
    siteShell.classList.remove('menu-open');
    menuToggle.setAttribute('aria-expanded', 'false');
  }

  if (event.target === lightbox) {
    closeLightbox();
  }
});

menuToggle.addEventListener('click', () => {
  const expanded = menuToggle.getAttribute('aria-expanded') === 'true';
  menuToggle.setAttribute('aria-expanded', String(!expanded));
  siteShell.classList.toggle('menu-open');
});

lightboxClose.addEventListener('click', closeLightbox);
lightboxPrev.addEventListener('click', () => moveLightbox(-1));
lightboxNext.addEventListener('click', () => moveLightbox(1));

document.addEventListener('keydown', (event) => {
  if (!lightbox.classList.contains('is-open')) return;

  if (event.key === 'Escape') closeLightbox();
  if (event.key === 'ArrowLeft') moveLightbox(-1);
  if (event.key === 'ArrowRight') moveLightbox(1);
});

renderPage();
revealElements();
