// BASE DE DADOS COMPLETA - TODOS OS MUSEUS E ESTABELECIMENTOS DE CURITIBA
const placesData = [
  // ========== MUSEUS ==========
  { id: 1, name: "Acervo Histórico do 2º Batalhão de Infantaria Blindado", category: "museu", yearFounded: 1950, description: "Acervo militar e histórico do 2º BIB.", address: "Bairro Alto" },
  { id: 2, name: "Memorial Chico Mendes", category: "museu", yearFounded: 1999, description: "Homenagem ao ambientalista acreano.", address: "Centro" },
  { id: 3, name: "Casa Culpi – Memorial da Imigração Italiana", category: "museu", yearFounded: 1991, description: "Memória da imigração italiana em Curitiba.", address: "Santa Felicidade" },
  { id: 4, name: "Casa da Memória de Curitiba", category: "museu", yearFounded: 1984, description: "Documentos e fotos da história curitibana.", address: "São Francisco" },
  { id: 5, name: "Casa Erbo Stenzel", category: "museu", yearFounded: 1978, description: "Espaço cultural e museu de arte.", address: "Centro" },
  { id: 6, name: "Casa João Turin", category: "museu", yearFounded: 2004, description: "Ateliê do escultor João Turin.", address: "Alto da Glória" },
  { id: 7, name: "Casa Romário Martins", category: "museu", yearFounded: 1901, description: "Centro de documentação histórica e cultural.", address: "Largo da Ordem, 50" },
  { id: 8, name: "Museu da Indústria Paranaense", category: "museu", yearFounded: 2002, description: "História da indústria no Paraná.", address: "Centro" },
  { id: 9, name: "Centro de Memória do Tribunal Regional do Trabalho", category: "museu", yearFounded: 1999, description: "Memória da justiça trabalhista.", address: "Centro" },
  { id: 10, name: "Centro Juvenil de Artes Plásticas", category: "museu", yearFounded: 1977, description: "Espaço dedicado à arte jovem.", address: "Centro" },
  { id: 11, name: "Círculo de Estudos Bandeirantes", category: "museu", yearFounded: 1945, description: "História e cultura bandeirante.", address: "Centro" },
  { id: 12, name: "Espaço Cultural Franz Krajcberg", category: "museu", yearFounded: 2017, description: "Obras do artista polonês-brasileiro.", address: "Centro" },
  { id: 13, name: "Museu Alfredo Andersen", category: "museu", yearFounded: 1960, description: "Acervo do pintor norueguês.", address: "Centro" },
  { id: 14, name: "Memorial Alemão", category: "museu", yearFounded: 2005, description: "Homenagem à imigração alemã.", address: "Bairro Ahú" },
  { id: 15, name: "Memorial Árabe", category: "museu", yearFounded: 2009, description: "Cultura árabe no Paraná.", address: "Centro" },
  { id: 16, name: "Memorial da Imigração Japonesa", category: "museu", yearFounded: 1993, description: "História dos imigrantes japoneses.", address: "Centro" },
  { id: 17, name: "Memorial de Curitiba", category: "museu", yearFounded: 1996, description: "Espaço cultural no Largo da Ordem.", address: "Largo da Ordem" },
  { id: 18, name: "Memorial Ucraniano", category: "museu", yearFounded: 1995, description: "Cultura ucraniana em Curitiba.", address: "Parque Tingui" },
  { id: 19, name: "Museu Botânico Municipal", category: "museu", yearFounded: 1991, description: "Acervo botânico no Jardim Botânico.", address: "Jardim Botânico" },
  { id: 20, name: "Museu da Energia", category: "museu", yearFounded: 2000, description: "História da energia elétrica.", address: "Centro" },
  { id: 21, name: "Museu da Farmácia", category: "museu", yearFounded: 1975, description: "Acervo farmacêutico histórico.", address: "Centro" },
  { id: 22, name: "Museu da Fotografia", category: "museu", yearFounded: 2003, description: "Fotografia curitibana e paranaense.", address: "Centro" },
  { id: 23, name: "Museu da Gravura", category: "museu", yearFounded: 1995, description: "Gravuras brasileiras e estrangeiras.", address: "Solar do Barão" },
  { id: 24, name: "Museu da Imagem e do Som do Paraná", category: "museu", yearFounded: 1982, description: "Acervo audiovisual do Paraná.", address: "Centro" },
  { id: 25, name: "Museu da Junta Comercial do Paraná", category: "museu", yearFounded: 1998, description: "História do comércio paranaense.", address: "Centro" },
  { id: 26, name: "Museu da Justiça", category: "museu", yearFounded: 1992, description: "Memória do poder judiciário.", address: "Centro" },
  { id: 27, name: "Museu da Papiloscopia", category: "museu", yearFounded: 1994, description: "História da identificação criminal.", address: "Centro" },
  { id: 28, name: "Museu da Vida", category: "museu", yearFounded: 2006, description: "Museu interativo de ciências.", address: "Centro" },
  { id: 29, name: "Museu da Periferia", category: "museu", yearFounded: 2015, description: "Arte e cultura periférica.", address: "Periferia" },
  { id: 30, name: "Museu de Arte Contemporânea do Paraná (MAC)", category: "museu", yearFounded: 2002, description: "Arte contemporânea paranaense.", address: "Centro" },
  { id: 31, name: "Museu de Arte da UFPR", category: "museu", yearFounded: 1992, description: "Acervo artístico da universidade.", address: "Centro" },
  { id: 32, name: "Museu de Arte Indígena", category: "museu", yearFounded: 2009, description: "Arte e cultura indígena.", address: "Centro" },
  { id: 33, name: "Museu de Arte Sacra", category: "museu", yearFounded: 1940, description: "Peças sacras dos séculos XVIII e XIX.", address: "Largo da Ordem" },
  { id: 34, name: "Museu de Ciências Naturais da UFPR", category: "museu", yearFounded: 1990, description: "Acervo de história natural.", address: "Centro" },
  { id: 35, name: "Museu de História Natural", category: "museu", yearFounded: 1962, description: "Fósseis e biodiversidade.", address: "Capão da Imbuia" },
  { id: 36, name: "Museu de Medicina", category: "museu", yearFounded: 1996, description: "História da medicina paranaense.", address: "Centro" },
  { id: 37, name: "Museu de Zoologia da PUC-PR", category: "museu", yearFounded: 1995, description: "Acervo zoológico da PUC.", address: "Prado Velho" },
  { id: 38, name: "Museu do Automóvel", category: "museu", yearFounded: 1998, description: "Carros antigos e históricos.", address: "Centro" },
  { id: 39, name: "Museu do Cartaz", category: "museu", yearFounded: 2010, description: "Cartazes históricos e artísticos.", address: "Centro" },
  { id: 40, name: "Museu do Coritiba", category: "museu", yearFounded: 2010, description: "História do Coritiba Foot Ball Club.", address: "Alto da Glória" },
  { id: 41, name: "Museu do Expedicionário", category: "museu", yearFounded: 1946, description: "Homenagem aos pracinhas da FEB.", address: "R. Comendador Macedo, 655" },
  { id: 42, name: "Museu do Futebol do Paraná", category: "museu", yearFounded: 2014, description: "História do futebol paranaense.", address: "Centro" },
  { id: 43, name: "Museu do Holocausto", category: "museu", yearFounded: 2011, description: "Memória do Holocausto.", address: "Centro" },
  { id: 44, name: "Museu do Instituto Médico Legal", category: "museu", yearFounded: 2000, description: "História da medicina legal.", address: "Centro" },
  { id: 45, name: "Museu do Saneamento do Paraná", category: "museu", yearFounded: 2005, description: "História do saneamento básico.", address: "Centro" },
  { id: 46, name: "Museu do Som Independente", category: "museu", yearFounded: 2018, description: "Música independente paranaense.", address: "Centro" },
  { id: 47, name: "Museu Egípcio e Rosacruz", category: "museu", yearFounded: 1995, description: "Acervo egípcio e rosacruz.", address: "Centro" },
  { id: 48, name: "Museu das Drogas", category: "museu", yearFounded: 2002, description: "História farmacológica.", address: "Centro" },
  { id: 49, name: "Museu Aeroespacial", category: "museu", yearFounded: 2008, description: "Aviação e espaço.", address: "Bacacheri" },
  { id: 50, name: "Museu Ferroviário", category: "museu", yearFounded: 1982, description: "História das ferrovias.", address: "Centro" },
  { id: 51, name: "Museu Guido Straube", category: "museu", yearFounded: 1985, description: "Acervo do artista Guido Straube.", address: "Centro" },
  { id: 52, name: "Museu Histórico da Polícia Militar", category: "museu", yearFounded: 1990, description: "História da PMPR.", address: "Centro" },
  { id: 53, name: "Museu Leprológico", category: "museu", yearFounded: 1970, description: "História da hanseníase.", address: "Centro" },
  { id: 54, name: "Museu Maçônico Paranaense", category: "museu", yearFounded: 1980, description: "História da maçonaria.", address: "Centro" },
  { id: 55, name: "Museu Municipal de Arte (MuMA)", category: "museu", yearFounded: 1993, description: "Arte municipal.", address: "Portão" },
  { id: 56, name: "Museu Nacional do Espiritismo", category: "museu", yearFounded: 2010, description: "História do espiritismo.", address: "Centro" },
  { id: 57, name: "Museu Odontológico", category: "museu", yearFounded: 1995, description: "História da odontologia.", address: "Centro" },
  { id: 58, name: "Museu Oscar Niemeyer", category: "museu", yearFounded: 1951, description: "O icônico Museu do Olho.", address: "R. Mal. Hermes, 999" },
  { id: 59, name: "Museu Paranaense", category: "museu", yearFounded: 1876, description: "Museu mais antigo do Paraná.", address: "R. Kellers, 289" },
  { id: 60, name: "Museu Penitenciário do Paraná", category: "museu", yearFounded: 2003, description: "História do sistema prisional.", address: "Centro" },
  { id: 61, name: "Museu Ucraniano", category: "museu", yearFounded: 1995, description: "Cultura ucraniana.", address: "Centro" },
  { id: 62, name: "Museu Universitário da PUC-PR", category: "museu", yearFounded: 1990, description: "Acervo universitário.", address: "Prado Velho" },
  { id: 63, name: "Observatório Astronômico e Planetário", category: "museu", yearFounded: 1985, description: "Astronomia e ciência.", address: "Centro" },
  { id: 64, name: "Memorial da Imigração Polonesa", category: "museu", yearFounded: 1990, description: "Imigração polonesa.", address: "Centro" },
  { id: 65, name: "Sala da Memória da Caixa Cultural", category: "museu", yearFounded: 2005, description: "Memória da Caixa.", address: "Centro" },
  { id: 66, name: "Sala do Artista Popular", category: "museu", yearFounded: 1995, description: "Arte popular.", address: "Centro" },
  { id: 67, name: "Umbigo Casa de Cultura", category: "museu", yearFounded: 2010, description: "Casa de cultura alternativa.", address: "Centro" },

  // ========== BARES E RESTAURANTES ==========
  { id: 68, name: "Bar Palácio", category: "bar", yearFounded: 1930, description: "Tradicional bar do centro histórico.", address: "Centro" },
  { id: 69, name: "Bar Stuart", category: "bar", yearFounded: 1955, description: "Clássico bar curitibano.", address: "Centro" },
  { id: 70, name: "Restaurante Madalosso", category: "restaurante", yearFounded: 1963, description: "Tradição italiana.", address: "Av. Manoel Ribas, 5875" },
  { id: 71, name: "Cantina do Délio", category: "restaurante", yearFounded: 1950, description: "Tradição italiana familiar.", address: "Santa Felicidade" },
  { id: 72, name: "Baviera", category: "restaurante", yearFounded: 1975, description: "Culinária alemã tradicional.", address: "Centro" },
  { id: 73, name: "Bar do Alemão", category: "bar", yearFounded: 1975, description: "Boteco tradicional no Largo.", address: "Largo da Ordem" },

  // ========== LOJAS E COMÉRCIOS ==========
  { id: 74, name: "Casa Edith", category: "loja", yearFounded: 1950, description: "Doces tradicionais curitibanos.", address: "Centro" },
  { id: 75, name: "Casa China", category: "loja", yearFounded: 1960, description: "Utilidades domésticas tradicional.", address: "Centro" },
  { id: 76, name: "Casa Glaser", category: "loja", yearFounded: 1904, description: "Instrumentos musicais históricos.", address: "Centro" },
  { id: 77, name: "Casa Lomelino", category: "loja", yearFounded: 1882, description: "Chapéus tradicionais desde 1882.", address: "Centro" },
  { id: 78, name: "Casa das Cuecas", category: "loja", yearFounded: 1970, description: "Tradicional loja do centro.", address: "Centro" },
  { id: 79, name: "Prosdócimo", category: "loja", yearFounded: 1950, description: "Varejo tradicional paranaense.", address: "Centro" }
];

// FILTRAR APENAS COM +70 ANOS
const currentYear = new Date().getFullYear();
const allPlaces = placesData.filter(place => (currentYear - place.yearFounded) >= 70);

// VARIÁVEIS DO CHECKLIST
let checklist = JSON.parse(localStorage.getItem('checklist')) || [];
let isChecklistMode = false;

// FUNÇÃO PARA RENDERIZAR CARDS
function renderCards(filter = "all") {
  const container = document.getElementById('placesContainer');
  let filtered = [...allPlaces];
  
  if (filter === "museu") {
    filtered = allPlaces.filter(p => p.category === "museu");
  } else if (filter === "bar") {
    filtered = allPlaces.filter(p => p.category === "bar" || p.category === "restaurante");
  } else if (filter === "loja") {
    filtered = allPlaces.filter(p => p.category === "loja");
  }
  
  container.innerHTML = "";
  
  if (filtered.length === 0) {
    container.innerHTML = `<div class="col-span-full text-center py-20"><p class="text-gray-400">Nenhum lugar encontrado nesta categoria.</p></div>`;
    return;
  }
  
  filtered.forEach(place => {
    const ageCalc = currentYear - place.yearFounded;
    const card = document.createElement('div');
    card.className = "place-card";
    if (isChecklistMode) card.classList.add("checklist-mode");
    if (checklist.includes(place.id)) card.classList.add("checked");
    card.setAttribute("data-id", place.id);
    card.setAttribute("data-aos", "fade-up");
    card.setAttribute("data-aos-duration", "600");
    
    let categoryIcon = "🏛️";
    let categoryTag = "MUSEU";
    if (place.category === "bar") {
      categoryIcon = "🍻";
      categoryTag = "BAR";
    } else if (place.category === "restaurante") {
      categoryIcon = "🍽️";
      categoryTag = "RESTAURANTE";
    } else if (place.category === "loja") {
      categoryIcon = "🏪";
      categoryTag = "LOJA";
    }
    
    card.innerHTML = `
      <div class="card-header">
        <span class="card-icon">${categoryIcon}</span>
        <span class="card-year">${place.yearFounded} · ${ageCalc} anos</span>
      </div>
      <h3 class="card-title">${place.name}</h3>
      <p class="card-description">${place.description}</p>
      <div class="card-address">
        <span>📍</span>
        <span>${place.address}</span>
      </div>
      <div class="card-tags">
        <span class="tag tag-highlight">+70 ANOS</span>
        <span class="tag">${categoryTag}</span>
        ${checklist.includes(place.id) ? '<span class="tag">✓ VISITADO</span>' : ''}
      </div>
    `;
    
    if (isChecklistMode) {
      card.addEventListener('click', (e) => {
        e.stopPropagation();
        toggleChecklistItem(place.id);
        renderCards(filter);
      });
    }
    
    container.appendChild(card);
  });
  
  // Atualizar contador
  document.getElementById('totalPlaces').innerText = allPlaces.length;
  
  if (typeof AOS !== 'undefined') {
    AOS.refresh();
  }
}

// FUNÇÃO PARA ALTERNAR ITEM DO CHECKLIST
function toggleChecklistItem(id) {
  if (checklist.includes(id)) {
    checklist = checklist.filter(item => item !== id);
  } else {
    checklist.push(id);
  }
  localStorage.setItem('checklist', JSON.stringify(checklist));
}

// FUNÇÃO PARA BOTÃO ATIVO
function setActiveButton(activeId) {
  const buttons = ['btnAll', 'btnMuseus', 'btnBares', 'btnLojas', 'btnChecklist'];
  buttons.forEach(id => {
    const btn = document.getElementById(id);
    if (btn) {
      if (id === activeId) {
        btn.classList.add('active');
      } else {
        btn.classList.remove('active');
      }
    }
  });
}

// FUNÇÃO PARA ABRIR MODAL DO CHECKLIST
function openChecklistModal() {
  const modal = document.getElementById('checklistModal');
  const checklistContainer = document.getElementById('checklistItems');
  
  checklistContainer.innerHTML = '';
  
  allPlaces.forEach(place => {
    let categoryIcon = "";
    if (place.category === "museu") categoryIcon = "🏛️";
    else if (place.category === "bar" || place.category === "restaurante") categoryIcon = "🍻";
    else categoryIcon = "🏪";
    
    const itemDiv = document.createElement('div');
    itemDiv.className = 'checklist-item';
    itemDiv.innerHTML = `
      <input type="checkbox" id="check_${place.id}" ${checklist.includes(place.id) ? 'checked' : ''}>
      <label for="check_${place.id}">${categoryIcon} ${place.name}</label>
      <span class="item-category">${place.category.toUpperCase()}</span>
    `;
    
    const checkbox = itemDiv.querySelector('input');
    checkbox.addEventListener('change', () => {
      toggleChecklistItem(place.id);
    });
    
    checklistContainer.appendChild(itemDiv);
  });
  
  modal.style.display = 'block';
}

// CURSOR PERSONALIZADO
function initCustomCursor() {
  const cursorDot = document.querySelector('.cursor-dot');
  const cursorOutline = document.querySelector('.cursor-outline');
  
  if (!cursorDot || !cursorOutline) return;
  
  window.addEventListener('mousemove', (e) => {
    const posX = e.clientX;
    const posY = e.clientY;
    
    cursorDot.style.transform = `translate(${posX - 3}px, ${posY - 3}px)`;
    cursorOutline.style.transform = `translate(${posX - 20}px, ${posY - 20}px)`;
  });
  
  const hoverElements = document.querySelectorAll('button, .place-card, .character, .filter-btn');
  hoverElements.forEach(el => {
    el.addEventListener('mouseenter', () => {
      cursorOutline.style.width = '56px';
      cursorOutline.style.height = '56px';
      cursorOutline.style.borderColor = '#FFB347';
    });
    el.addEventListener('mouseleave', () => {
      cursorOutline.style.width = '40px';
      cursorOutline.style.height = '40px';
      cursorOutline.style.borderColor = '#FF5E5E';
    });
  });
}

// INICIALIZAR
document.addEventListener("DOMContentLoaded", () => {
  // AOS
  if (typeof AOS !== 'undefined') {
    AOS.init({ duration: 800, once: true, offset: 60 });
  }
  
  // GSAP ANIMAÇÕES
  if (typeof gsap !== 'undefined') {
    gsap.from(".hero-title", { y: 50, opacity: 0, duration: 0.8, ease: "power3.out" });
    gsap.from(".hero-description", { y: 30, opacity: 0, duration: 0.8, delay: 0.2, ease: "power3.out" });
    gsap.from(".hero-stats", { y: 30, opacity: 0, duration: 0.8, delay: 0.4, ease: "power3.out" });
    gsap.from(".character", { scale: 0, opacity: 0, duration: 0.6, stagger: 0.2, ease: "back.out(1.2)" });
  }
  
  // RENDER CARDS
  renderCards('all');
  
  // FILTROS
  document.getElementById('btnAll')?.addEventListener('click', () => {
    isChecklistMode = false;
    renderCards('all');
    setActiveButton('btnAll');
  });
  document.getElementById('btnMuseus')?.addEventListener('click', () => {
    isChecklistMode = false;
    renderCards('museu');
    setActiveButton('btnMuseus');
  });
  document.getElementById('btnBares')?.addEventListener('click', () => {
    isChecklistMode = false;
    renderCards('bar');
    setActiveButton('btnBares');
  });
  document.getElementById('btnLojas')?.addEventListener('click', () => {
    isChecklistMode = false;
    renderCards('loja');
    setActiveButton('btnLojas');
  });
  document.getElementById('btnChecklist')?.addEventListener('click', () => {
    isChecklistMode = true;
    renderCards('all');
    setActiveButton('btnChecklist');
  });
  
  // MODAL CHECKLIST
  const modal = document.getElementById('checklistModal');
  const closeBtn = document.querySelector('.modal-close');
  
  document.getElementById('btnChecklist')?.addEventListener('dblclick', openChecklistModal);
  
  const checklistBtn = document.getElementById('btnChecklist');
  const originalClick = checklistBtn?.click;
  if (checklistBtn) {
    checklistBtn.addEventListener('click', () => {
      isChecklistMode = true;
      renderCards('all');
      setActiveButton('btnChecklist');
    });
    checklistBtn.addEventListener('dblclick', openChecklistModal);
  }
  
  if (closeBtn) {
    closeBtn.addEventListener('click', () => {
      modal.style.display = 'none';
    });
  }
  
  window.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.style.display = 'none';
    }
  });
  
  document.getElementById('resetChecklist')?.addEventListener('click', () => {
    checklist = [];
    localStorage.setItem('checklist', JSON.stringify(checklist));
    openChecklistModal();
    renderCards(isChecklistMode ? 'all' : document.querySelector('.filter-btn.active')?.id.replace('btn', '').toLowerCase() || 'all');
  });
  
  document.getElementById('saveChecklist')?.addEventListener('click', () => {
    modal.style.display = 'none';
    renderCards(isChecklistMode ? 'all' : document.querySelector('.filter-btn.active')?.id.replace('btn', '').toLowerCase() || 'all');
  });
  
  // CURSOR
  initCustomCursor();
  
  console.log(`✨ ${allPlaces.length} lugares carregados para Lena e Nine explorarem em Curitiba!`);
});