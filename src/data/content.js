import {
  BookOpen,
  Building2,
  Castle,
  Clock3,
  Compass,
  Gem,
  Landmark,
  LibraryBig,
  MapPinned,
  Orbit,
  Route,
  Shield,
  Sparkles,
} from 'lucide-react';

export const languages = [
  { code: 'uz', label: 'UZ' },
  { code: 'en', label: 'EN' },
];

export const contentByLanguage = {
  uz: {
    siteMeta: {
      brand: 'Merosnoma',
      documentTitle: "Merosnoma | Tarixiy meros sayti",
      themeToggleLabel: "Rang rejimini o'zgartirish",
      menuToggleLabel: "Navigatsiyani ochish",
      languageLabel: 'Tilni tanlash',
      footerText:
        "Ikki tilli tarixiy demo sahifa. React, Vite va animatsiyali zamonaviy bloklar bilan qayta ishlangan.",
    },
    navLinks: [
      { label: 'Davrlar', href: '#features' },
      { label: 'Meros', href: '#about' },
      { label: 'Alomatlar', href: '#symbols' },
      { label: 'Joylar', href: '#showcase' },
      { label: "Vaqt chizig'i", href: '#journey' },
      { label: 'Aloqa', href: '#contact' },
    ],
    hero: {
      eyebrow: 'Movarounnahr tarixiy portali',
      titleLead: 'Buyuk',
      titleAccent: "Ipak Yo'li",
      titleTail: 'izlarida tarixni his qildiradigan shaharlarga qayting.',
      description:
        "Bu sahifa Samarqand, Buxoro, Xiva, Termiz va Qo'qonni savdo yo'llari, ilm markazlari hamda me'moriy qatlamlar orqali bir butun tarixiy makon sifatida ko'rsatadi.",
      primaryCta: "Vaqt chizig'ini ko'rish",
      secondaryCta: "Tarixiy joylarni ochish",
      panelEyebrow: "Qo'lyozma xarita",
      panelTitle:
        "Karvon yo'li, yodgorlik va ilm markazi bir-biriga ulanadigan tarixiy tarmoq",
      panelDescription:
        "Bekatlar endi moslashuvchan grid ko'rinishida: mobil ekranda buzilmaydi, katta ekranda esa yo'l xaritasi hissini saqlaydi.",
      periodChip: 'VIII - XIX asrlar',
      floatingPeriod: {
        eyebrow: 'Asosiy yuksalish',
        value: 'XIV-XV',
        description:
          "Temuriylar davrida shahar, madrasa va rasadxona bir vaqtning o'zida keskin yuksaldi.",
      },
      floatingAnchors: {
        eyebrow: 'Uch tayanch',
        description:
          "Yo'llar, ilm markazlari va me'moriy xotira tarixiy makonning bir-biriga ulanib ketgan qatlamlaridir.",
      },
    },
    heroStats: [
      { value: '1000+ yil', label: "savdo, ilm va me'moriy meros qatlamlari" },
      { value: '5 manzil', label: "Samarqand, Buxoro, Xiva, Termiz va Qo'qon" },
      { value: '2 til', label: 'o‘zbek va inglizcha tez almashuvchi interfeys' },
    ],
    routeStops: [
      {
        id: 'termiz',
        label: 'Bekat 1',
        name: 'Termiz',
        note: "Janubiy darvoza va qadimgi qatlamlar",
      },
      {
        id: 'samarkand',
        label: 'Bekat 2',
        name: 'Samarqand',
        note: 'Ilm, siyosat va monumental markaz',
      },
      {
        id: 'bukhara',
        label: 'Bekat 3',
        name: 'Buxoro',
        note: 'Madrasa, bozor va diniy an’ana',
      },
      {
        id: 'khiva',
        label: 'Bekat 4',
        name: 'Xiva',
        note: "Yaxlit saqlangan devorli tarixiy makon",
      },
    ],
    heroHighlights: [
      {
        title: "Yo'l",
        description:
          "Sharq va G'arbni bog'lagan yo'llar shaharlarni alohida emas, tarmoq sifatida yashatgan.",
        icon: Route,
      },
      {
        title: 'Ilm',
        description:
          "Madrasalar, kutubxonalar va rasadxonalarda shakllangan an'ana hududga ma'no bergan.",
        icon: BookOpen,
      },
      {
        title: "Me'moriy iz",
        description:
          "Gumbaz, peshtoq va maqbaralar xotirani tosh va koshin orqali bugungacha saqlagan.",
        icon: Landmark,
      },
    ],
    featuresSection: {
      eyebrow: 'Meros qatlamlari',
      title:
        "Tarixiy makonni sanalar emas, bir-biriga tutashgan tizimlar shakllantiradi.",
      description:
        "Shaharni tushunish uchun uning bozori, ilm maskani, siyosiy markazi va me'moriy xotirasini birgalikda ko'rish kerak.",
    },
    features: [
      {
        title: "Karvon yo'llari",
        description:
          "Savdo yo'nalishlari shaharlarni alohida nuqta emas, o'zaro bog'langan tarixiy tarmoq sifatida yashatgan.",
        icon: Compass,
        accent: 'from-[#4f7a72]/30 via-[#4f7a72]/12 to-transparent',
      },
      {
        title: 'Ilm va tafakkur',
        description:
          "Madrasa va rasadxonalar orqali nazariy bilim ham, amaliy kuzatuv ham markazlashgan.",
        icon: LibraryBig,
        accent: 'from-[#c79a55]/30 via-[#c79a55]/12 to-transparent',
      },
      {
        title: 'Sulolalar izi',
        description:
          "Somoniylar, Temuriylar va keyingi xonliklar hududga yangi siyosiy va madaniy qiyofa bergan.",
        icon: Shield,
        accent: 'from-[#8a6b45]/26 via-[#8a6b45]/10 to-transparent',
      },
      {
        title: "Toshdagi xotira",
        description:
          "Me'moriy meros nafaqat go'zallik, balki davrning dunyoqarashi va kuch markazini ham aks ettiradi.",
        icon: Building2,
        accent: 'from-[#5f7f7a]/24 via-[#d8c18f]/10 to-transparent',
      },
    ],
    archiveSection: {
      ribbonLeft: "Qo'lyozma parcha",
      archiveLabel: 'Xotira va makon',
      archiveEyebrow: 'Arxivdagi asosiy fikr',
      archiveQuote:
        "Tarixni ko'rish uchun faqat sanani emas, uning qatlamlari orasidagi bog'lanishni ham o'qish kerak.",
      focusEyebrow: 'Diqqat markazi',
      focusTitle: 'Registon',
      focusDescription:
        "Maydon faqat me'moriy markaz emas, balki bilim va hokimiyat ramzi sifatida ham ishlagan.",
    },
    archiveNotes: [
      {
        title: 'Savdo ritmi',
        text:
          "Bozorlar va karvonsaroylar shaharning tashqi aloqalarini belgilagan, shu bilan uning ichki tuzilishini ham shakllantirgan.",
      },
      {
        title: 'Ilm nafasi',
        text:
          "Madrasa, kutubxona va rasadxona bir joyga yig'ilganda shahar faqat siyosiy markaz bo'lib qolmay, tafakkur markaziga ham aylangan.",
      },
      {
        title: "Me'moriy xotira",
        text:
          "Koshin, peshtoq va gumbazlar bugun ham davrning siyosiy qudrati va estetik qarashini o'qishga imkon beradi.",
      },
    ],
    aboutSection: {
      eyebrow: "Tarixiy o'qish",
      title:
        "Bir hududni anglash uchun uning yo'li, ilmi va xotirasini birga ko'rish zarur.",
      description:
        "Quyidagi qismlar tarixiy saytni oddiy bezak emas, mazmunli hikoyaga aylantiradi. Har bir blok foydalanuvchiga nimani ko'rishini aniq ko'rsatadi.",
    },
    aboutPoints: [
      "Tarixiy sayt foydalanuvchiga faqat ma'lumot berib qolmasligi, balki makon va davr hissini ham yetkazishi kerak.",
      "Rang, bo'shliq va tipografiya tarixiy yo'nalishga mos bo'lsa, kontent ko'proq ishonch uyg'otadi.",
      "Bo'limlar o'zaro izchil bog'lansa, foydalanuvchi davrlar va shaharlar orasidagi aloqani tezroq anglaydi.",
    ],
    aboutStats: [
      {
        label: 'Markazlar',
        value: '5',
        description: "Samarqand, Buxoro, Xiva, Termiz, Qo'qon",
      },
      {
        label: "E'tibor",
        value: '4 qatlam',
        description: "Yo'l, ilm, me'moriy alomat va tarixiy joy",
      },
      {
        label: "Ko'lam",
        value: '1000+ yil',
        description: 'Qadimgi qatlamlardan tiklash davrigacha',
      },
    ],
    symbolsSection: {
      eyebrow: 'Tarixiy alomatlar',
      title:
        "Tarixni tanitadigan belgilar ko'pincha shahar nomidan ham kuchliroq ishlaydi.",
      description:
        "Quyidagi alomatlar tarixiy sahifaga bezak emas, ma'no beradi. Har biri hudud xotirasining boshqa tomonini ifodalaydi.",
    },
    symbolItems: [
      {
        id: 'tiles',
        title: 'Koshin naqshi',
        subtitle: 'Rang va geometriya',
        description:
          "Ko'k va turkuaz koshinlar markaziy Osiyo me'morchiligini uzoqdan tanitadigan eng kuchli vizual belgilaridan biridir.",
        icon: Gem,
      },
      {
        id: 'portal',
        title: 'Peshtoq',
        subtitle: 'Monumental kirish',
        description:
          "Peshtoq shaharni va inshootni tantanavor qabul qiladi; u ko'pincha hokimiyat va ilmning ko'rinarli yuzidir.",
        icon: Castle,
      },
      {
        id: 'dome',
        title: 'Gumbaz',
        subtitle: 'Siluet va ramz',
        description:
          "Gumbaz osmon, markaz va muqaddaslik bilan bog'langan ko'p qatlamli tarixiy ramz sifatida o'qiladi.",
        icon: Orbit,
      },
      {
        id: 'observatory',
        title: "Rasadxona",
        subtitle: 'Bilim manzili',
        description:
          "Ulug'bek rasadxonasi singari maskanlar tarixni faqat siyosiy emas, ilmiy yuksalish orqali ham ko'rsatadi.",
        icon: Sparkles,
      },
    ],
    landmarksPanel: {
      eyebrow: 'Tarixiy joylar',
      title: 'Ko‘rinarli yodgorliklar va ularning roli',
      description:
        "Bu joylar shaharlarni umumiy fon emas, aniq xotira nuqtalari sifatida ko'rsatadi. Har biri tarixiy hikoyaning alohida tayanchi.",
    },
    landmarkItems: [
      {
        id: 'registan',
        name: 'Registon majmuasi',
        city: 'Samarqand',
        note: "Ulug'bek, Sherdor va Tillakori madrasalari jamlangan markaziy maydon.",
        icon: Landmark,
      },
      {
        id: 'ark',
        name: "Ark qal'asi",
        city: 'Buxoro',
        note: "Buxoro amirlarining siyosiy markazi va shahar hokimiyati ramzi.",
        icon: Shield,
      },
      {
        id: 'kalta-minor',
        name: 'Kalta Minor',
        city: 'Xiva',
        note: "Ichan qal'a siluetini darhol ajratib turadigan yirik me'moriy belgi.",
        icon: Building2,
      },
      {
        id: 'fayoztepa',
        name: 'Fayoztepa',
        city: 'Termiz',
        note: 'Qadimgi buddaviy qatlamlarni yoritadigan janubiy tarixiy markazlardan biri.',
        icon: MapPinned,
      },
    ],
    placesSection: {
      eyebrow: 'Shaharlar',
      title:
        "Har bir manzil bir xil ko'rinmaydi, chunki ularning tarixiy vazifalari ham turlicha bo'lgan.",
      description:
        "Shahar kartalari endi faqat rang emas, muhim joylar, davr va xarakter bilan boyitildi.",
    },
    showcaseItems: [
      {
        id: 'samarkand',
        title: 'Samarqand',
        category: 'Temuriylar yuragi',
        period: 'XIV-XV asrlar',
        description:
          "Registon, Bibixonim va rasadxona orqali ilm va hokimiyat markaziga aylangan shahar.",
        detail:
          "Samarqand kuchi faqat me'morchiligida emas, saroy, madrasa va karvon yo'lining bir markazga jam bo'lganidadir.",
        facts: ['Registon', "Ulug'bek rasadxonasi", 'Bibixonim'],
        palette:
          'linear-gradient(160deg, rgba(15,50,65,0.98) 0%, rgba(35,102,110,0.9) 52%, rgba(196,153,86,0.82) 100%)',
        layout: 'md:col-span-2 md:row-span-2 min-h-[360px] md:min-h-[460px]',
      },
      {
        id: 'bukhara',
        title: 'Buxoro',
        category: 'Ilm va fiqh',
        period: 'IX-XVI asrlar',
        description:
          "Madrasalar, masjidlar va bozorlar uyg'unligida shakllangan qadimiy ilm markazi.",
        detail:
          "Buxoro tarixiy xotirasining quvvati uning uzluksiz yashagan ilmiy va diniy an'analarida ko'rinadi.",
        facts: ['Poi Kalon', 'Mir Arab', "Ark qal'asi"],
        palette:
          'linear-gradient(155deg, rgba(59,44,30,0.96) 0%, rgba(139,101,57,0.88) 58%, rgba(225,206,165,0.7) 100%)',
        layout: 'min-h-[260px]',
      },
      {
        id: 'khiva',
        title: 'Xiva',
        category: "Ichan qal'a",
        period: 'XVI-XIX asrlar',
        description:
          "Devor bilan o'ralgan tarixiy makon sifatida yaxlit saqlanib qolgan nodir shaharlardan biri.",
        detail:
          "Xiva tarixiy sayt uchun muhim namuna, chunki unda me'moriy tuzilma bir butun sahna kabi saqlangan.",
        facts: ["Ichan qal'a", 'Kalta Minor', 'Pahlavon Mahmud'],
        palette:
          'linear-gradient(150deg, rgba(24,54,58,0.96) 0%, rgba(69,113,119,0.88) 46%, rgba(206,177,124,0.76) 100%)',
        layout: 'min-h-[260px]',
      },
      {
        id: 'termiz',
        title: 'Termiz',
        category: 'Janubiy darvoza',
        period: "Qadimgi va o'rta asr qatlamlari",
        description:
          "Janubiy yo'nalishdagi tarixiy ko'prik sifatida turli madaniy qatlamlarni birlashtirgan hudud.",
        detail:
          "Termiz orqali hududning faqat shimoliy markazlar bilan emas, janubiy tarixiy oqimlar bilan ham bog'langanini ko'rish mumkin.",
        facts: ['Fayoztepa', 'Qoratepa', 'Ayritom'],
        palette:
          'linear-gradient(165deg, rgba(43,31,22,0.96) 0%, rgba(110,78,48,0.88) 50%, rgba(151,106,70,0.78) 100%)',
        layout: 'min-h-[260px]',
      },
      {
        id: 'kokand',
        title: "Qo'qon",
        category: 'Xonlik markazi',
        period: 'XVIII-XIX asrlar',
        description:
          "Keyingi siyosiy bosqichlarda Farg'ona vodiysidagi markazlashuvni ifodalagan shahar.",
        detail:
          "Qo'qon misolida tarixiy sayt davrlar orasidagi uzilish emas, davomiylik va yangi markazlar paydo bo'lishini ko'rsatadi.",
        facts: ['Xudoyorxon saroyi', "Farg'ona", 'Hunarmandchilik'],
        palette:
          'linear-gradient(160deg, rgba(32,44,35,0.96) 0%, rgba(78,102,67,0.86) 48%, rgba(191,151,92,0.72) 100%)',
        layout: 'md:col-span-2 min-h-[260px]',
      },
    ],
    journeySection: {
      eyebrow: "Vaqt chizig'i",
      title:
        "Tarixiy sayt yo'nalishsiz qolmasligi uchun davrlar orasidagi bog'lanish ketma-ket ko'rsatildi.",
      description:
        "Foydalanuvchi bo'limlar orasida yo'qolib ketmasligi uchun muhim bosqichlar qisqa, aniq va vizual tartibda berildi.",
    },
    timeline: [
      {
        step: '01',
        eyebrow: 'Qadimgi qatlam',
        title: 'Afrosiyob va ilk manzillar',
        description:
          "Hududning tarixiy xotirasi qadimgi shaharlardan boshlanadi. Ular keyingi davr markazlari uchun poydevor bo'lib xizmat qilgan.",
      },
      {
        step: '02',
        eyebrow: "Ipak yo'li",
        title: "Savdo va elchilik yo'llari kengaydi",
        description:
          "VIII-XII asrlarda shaharlar bozori, karvonsaroyi va diplomatik aloqalari orqali mintaqaviy tarmoq tuguniga aylandi.",
      },
      {
        step: '03',
        eyebrow: 'Yuksalish',
        title: "Temuriylar davrida ilm va me'morchilik kuchaydi",
        description:
          "Samarqand va atrofidagi markazlarda me'moriy buyuklik bilan birga ilmiy kuzatuv va ta'lim tizimi ham yuksaldi.",
      },
      {
        step: '04',
        eyebrow: 'Saqlash',
        title: "Yodgorliklarni qayta o'qish va tiklash",
        description:
          "XX-XXI asrlarda tarixiy makonlar restavratsiya, tadqiqot va sayyohlik orqali yangi avlod uchun qayta talqin qilinmoqda.",
      },
    ],
    finalSection: {
      eyebrow: 'Tarixni davom ettiring',
      title: 'Har bir yodgorlik ortida bir davrning ovozi bor.',
      description:
        "Sahifa demo bo'lsa ham, uslubi tarixiy mavzuga mos holda qayta qurildi: ikki til, joylar, alomatlar va animatsiyali zamonaviy taqdimot bilan.",
      button: 'Tepaga qaytish',
    },
  },
  en: {
    siteMeta: {
      brand: 'Merosnoma',
      documentTitle: 'Merosnoma | Historical heritage site',
      themeToggleLabel: 'Toggle color theme',
      menuToggleLabel: 'Open navigation menu',
      languageLabel: 'Choose language',
      footerText:
        'Bilingual historical demo page rebuilt with React, Vite, and modern animated sections.',
    },
    navLinks: [
      { label: 'Periods', href: '#features' },
      { label: 'Heritage', href: '#about' },
      { label: 'Symbols', href: '#symbols' },
      { label: 'Places', href: '#showcase' },
      { label: 'Timeline', href: '#journey' },
      { label: 'Contact', href: '#contact' },
    ],
    hero: {
      eyebrow: 'Historical portal of Transoxiana',
      titleLead: 'Walk the',
      titleAccent: 'Silk Road',
      titleTail: 'through cities that still carry the weight of memory.',
      description:
        "This page presents Samarkand, Bukhara, Khiva, Termez, and Kokand as one connected historical landscape shaped by trade routes, centers of learning, and architectural layers.",
      primaryCta: 'View the timeline',
      secondaryCta: 'Explore historical places',
      panelEyebrow: 'Manuscript map',
      panelTitle:
        'A historical network where trade routes, monuments, and learning centers connect',
      panelDescription:
        'The route cards now use a responsive grid: stable on mobile, but still visually read like a path on larger screens.',
      periodChip: '8th - 19th centuries',
      floatingPeriod: {
        eyebrow: 'Peak era',
        value: '14th-15th',
        description:
          'During the Timurid period, city life, madrasas, and observatories rose together.',
      },
      floatingAnchors: {
        eyebrow: 'Three anchors',
        description:
          'Routes, learning centers, and architectural memory form the connected layers of this historical geography.',
      },
    },
    heroStats: [
      { value: '1000+ years', label: 'of trade, scholarship, and built memory' },
      { value: '5 locations', label: 'Samarkand, Bukhara, Khiva, Termez, Kokand' },
      { value: '2 languages', label: 'instant switch between Uzbek and English' },
    ],
    routeStops: [
      {
        id: 'termiz',
        label: 'Stop 1',
        name: 'Termez',
        note: 'Southern gate and ancient layers',
      },
      {
        id: 'samarkand',
        label: 'Stop 2',
        name: 'Samarkand',
        note: 'Monumental center of politics and scholarship',
      },
      {
        id: 'bukhara',
        label: 'Stop 3',
        name: 'Bukhara',
        note: 'Madrasa, market, and religious tradition',
      },
      {
        id: 'khiva',
        label: 'Stop 4',
        name: 'Khiva',
        note: 'A walled historical city preserved as a whole',
      },
    ],
    heroHighlights: [
      {
        title: 'Route',
        description:
          'Trade corridors linked East and West, allowing cities to live as a network rather than isolated points.',
        icon: Route,
      },
      {
        title: 'Scholarship',
        description:
          'Madrasas, libraries, and observatories gave the region intellectual depth and continuity.',
        icon: BookOpen,
      },
      {
        title: 'Architectural trace',
        description:
          'Domes, portals, and mausoleums preserved memory through stone, tile, and silhouette.',
        icon: Landmark,
      },
    ],
    featuresSection: {
      eyebrow: 'Layers of heritage',
      title:
        'Historical landscapes are shaped less by dates than by systems that overlap and reinforce one another.',
      description:
        'To understand a city, its market, learning center, political core, and architectural memory must be read together.',
    },
    features: [
      {
        title: 'Caravan routes',
        description:
          'Trade roads allowed cities to function as connected historical nodes instead of separate destinations.',
        icon: Compass,
        accent: 'from-[#4f7a72]/30 via-[#4f7a72]/12 to-transparent',
      },
      {
        title: 'Learning and thought',
        description:
          'Madrasas and observatories concentrated both theoretical knowledge and practical observation.',
        icon: LibraryBig,
        accent: 'from-[#c79a55]/30 via-[#c79a55]/12 to-transparent',
      },
      {
        title: 'Dynastic imprint',
        description:
          'The Samanids, Timurids, and later khanates gave the region new political and cultural identities.',
        icon: Shield,
        accent: 'from-[#8a6b45]/26 via-[#8a6b45]/10 to-transparent',
      },
      {
        title: 'Memory in stone',
        description:
          'Architectural heritage communicates worldview and power, not just beauty.',
        icon: Building2,
        accent: 'from-[#5f7f7a]/24 via-[#d8c18f]/10 to-transparent',
      },
    ],
    archiveSection: {
      ribbonLeft: 'Manuscript fragment',
      archiveLabel: 'Memory and place',
      archiveEyebrow: 'Core archival idea',
      archiveQuote:
        'To see history clearly, one must read not only the date, but the connections between its layers.',
      focusEyebrow: 'Focus point',
      focusTitle: 'Registan',
      focusDescription:
        'The square functioned not only as an architectural center but as a visible symbol of knowledge and authority.',
    },
    archiveNotes: [
      {
        title: 'Trade rhythm',
        text:
          'Markets and caravanserais shaped the city’s outer connections and, through them, its inner structure as well.',
      },
      {
        title: 'Breath of learning',
        text:
          'When madrasa, library, and observatory stand together, a city becomes more than a political center; it becomes an intellectual one.',
      },
      {
        title: 'Architectural memory',
        text:
          'Tilework, portals, and domes still allow us to read the political power and aesthetic vision of their era.',
      },
    ],
    aboutSection: {
      eyebrow: 'Reading history',
      title:
        'To understand a region, its routes, scholarship, and memory must be studied together.',
      description:
        'These sections turn the site from a decorative layout into a readable historical narrative. Each block tells the visitor what matters and why.',
    },
    aboutPoints: [
      'A historical website should not only present information; it should also convey atmosphere, place, and period.',
      'When color, spacing, and typography match the subject, the content feels more credible and intentional.',
      'When sections connect clearly, visitors understand the relationship between cities and eras much faster.',
    ],
    aboutStats: [
      {
        label: 'Centers',
        value: '5',
        description: 'Samarkand, Bukhara, Khiva, Termez, Kokand',
      },
      {
        label: 'Focus',
        value: '4 layers',
        description: 'Route, scholarship, symbol, and historical place',
      },
      {
        label: 'Scope',
        value: '1000+ years',
        description: 'From ancient strata to modern restoration',
      },
    ],
    symbolsSection: {
      eyebrow: 'Historical symbols',
      title:
        'The signs that define a civilization often work more powerfully than the city names themselves.',
      description:
        'These motifs are not decoration. Each one carries a distinct layer of memory and meaning.',
    },
    symbolItems: [
      {
        id: 'tiles',
        title: 'Tile pattern',
        subtitle: 'Color and geometry',
        description:
          'Blue and turquoise tilework remains one of the strongest visual markers of Central Asian architecture.',
        icon: Gem,
      },
      {
        id: 'portal',
        title: 'Monumental portal',
        subtitle: 'Ceremonial threshold',
        description:
          'The portal welcomes the viewer with scale and prestige; it is often the public face of power and learning.',
        icon: Castle,
      },
      {
        id: 'dome',
        title: 'Dome',
        subtitle: 'Sky, center, and silhouette',
        description:
          'The dome functions as a layered symbol tied to sacred space, centrality, and civic identity.',
        icon: Orbit,
      },
      {
        id: 'observatory',
        title: 'Observatory',
        subtitle: 'A site of knowledge',
        description:
          "Places like Ulugh Beg's observatory show history through scientific ambition, not only political power.",
        icon: Sparkles,
      },
    ],
    landmarksPanel: {
      eyebrow: 'Historical places',
      title: 'Visible monuments and what they represent',
      description:
        'These sites act as concrete memory points rather than generic backdrops. Each one supports a different part of the story.',
    },
    landmarkItems: [
      {
        id: 'registan',
        name: 'Registan Ensemble',
        city: 'Samarkand',
        note: 'A central square defined by the Ulugh Beg, Sher-Dor, and Tilya-Kori madrasas.',
        icon: Landmark,
      },
      {
        id: 'ark',
        name: 'Ark Fortress',
        city: 'Bukhara',
        note: 'The political center of the emirs of Bukhara and a major symbol of authority.',
        icon: Shield,
      },
      {
        id: 'kalta-minor',
        name: 'Kalta Minor',
        city: 'Khiva',
        note: 'A powerful landmark that defines the skyline of the Ichan Kala.',
        icon: Building2,
      },
      {
        id: 'fayoztepa',
        name: 'Fayaz Tepe',
        city: 'Termez',
        note: 'A southern historical site that preserves the region’s Buddhist layer.',
        icon: MapPinned,
      },
    ],
    placesSection: {
      eyebrow: 'Cities',
      title:
        'Each destination feels different because its historical function was different.',
      description:
        'The city cards now carry stronger identity through places, periods, and significance instead of color alone.',
    },
    showcaseItems: [
      {
        id: 'samarkand',
        title: 'Samarkand',
        category: 'Timurid heartland',
        period: '14th-15th centuries',
        description:
          'A city where Registan, Bibi-Khanym, and the observatory placed scholarship beside authority.',
        detail:
          'Samarkand matters not only because of its architecture, but because court, madrasa, and trade route converged there.',
        facts: ['Registan', 'Ulugh Beg Observatory', 'Bibi-Khanym'],
        palette:
          'linear-gradient(160deg, rgba(15,50,65,0.98) 0%, rgba(35,102,110,0.9) 52%, rgba(196,153,86,0.82) 100%)',
        layout: 'md:col-span-2 md:row-span-2 min-h-[360px] md:min-h-[460px]',
      },
      {
        id: 'bukhara',
        title: 'Bukhara',
        category: 'Scholarship and law',
        period: '9th-16th centuries',
        description:
          'A historic learning center shaped by madrasas, mosques, markets, and continuity.',
        detail:
          'Bukhara draws its strength from a living scholarly and religious tradition that endured across centuries.',
        facts: ['Poi Kalyan', 'Mir-i Arab', 'Ark Fortress'],
        palette:
          'linear-gradient(155deg, rgba(59,44,30,0.96) 0%, rgba(139,101,57,0.88) 58%, rgba(225,206,165,0.7) 100%)',
        layout: 'min-h-[260px]',
      },
      {
        id: 'khiva',
        title: 'Khiva',
        category: 'Ichan Kala',
        period: '16th-19th centuries',
        description:
          'A rare example of a walled historical city preserved as a coherent whole.',
        detail:
          'Khiva is vital for historical storytelling because its urban form survives almost like a complete stage set.',
        facts: ['Ichan Kala', 'Kalta Minor', 'Pahlavan Mahmud'],
        palette:
          'linear-gradient(150deg, rgba(24,54,58,0.96) 0%, rgba(69,113,119,0.88) 46%, rgba(206,177,124,0.76) 100%)',
        layout: 'min-h-[260px]',
      },
      {
        id: 'termiz',
        title: 'Termez',
        category: 'Southern gateway',
        period: 'Ancient and medieval layers',
        description:
          'A southern historical bridge where multiple cultural layers met and accumulated.',
        detail:
          'Termez reveals that the region was connected not only to northern centers, but also to deeper southern currents.',
        facts: ['Fayaz Tepe', 'Kara Tepe', 'Ayrtam'],
        palette:
          'linear-gradient(165deg, rgba(43,31,22,0.96) 0%, rgba(110,78,48,0.88) 50%, rgba(151,106,70,0.78) 100%)',
        layout: 'min-h-[260px]',
      },
      {
        id: 'kokand',
        title: 'Kokand',
        category: 'Khanate center',
        period: '18th-19th centuries',
        description:
          'A city that represents later political centralization in the Ferghana Valley.',
        detail:
          'Kokand helps the site show continuity rather than rupture by revealing how new centers emerged in later periods.',
        facts: ["Khudayar Khan's Palace", 'Ferghana', 'Craft traditions'],
        palette:
          'linear-gradient(160deg, rgba(32,44,35,0.96) 0%, rgba(78,102,67,0.86) 48%, rgba(191,151,92,0.72) 100%)',
        layout: 'md:col-span-2 min-h-[260px]',
      },
    ],
    journeySection: {
      eyebrow: 'Timeline',
      title:
        'The site keeps its direction by showing how one era leads into the next.',
      description:
        'Key stages are deliberately brief, readable, and visually ordered so the visitor never loses the thread.',
    },
    timeline: [
      {
        step: '01',
        eyebrow: 'Ancient stratum',
        title: 'Afrasiab and the earliest centers',
        description:
          'The historical memory of the region begins with ancient cities that later periods built upon.',
      },
      {
        step: '02',
        eyebrow: 'Silk Road',
        title: 'Trade and diplomatic routes expanded',
        description:
          'Between the 8th and 12th centuries, cities became regional nodes through markets, caravanserais, and political exchange.',
      },
      {
        step: '03',
        eyebrow: 'High point',
        title: 'Timurid scholarship and architecture intensified',
        description:
          'Around Samarkand, monumental building and scientific inquiry advanced together and reinforced each other.',
      },
      {
        step: '04',
        eyebrow: 'Preservation',
        title: 'Sites were re-read and restored',
        description:
          'In the 20th and 21st centuries, restoration, research, and tourism opened these places to new generations.',
      },
    ],
    finalSection: {
      eyebrow: 'Continue the journey',
      title: 'Every monument carries the voice of an era.',
      description:
        'The page now matches the historical theme more closely: bilingual content, real places, symbolic motifs, and a more contemporary animated presentation.',
      button: 'Back to top',
    },
  },
};
