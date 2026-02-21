const PROPERTIES = [
  {
    id: "1",
    title: "The Obsidian Sky",
    price: "&#8377;2,450,000",
    location: "Jamnagar, New Delhi",
    type: "Penthouse",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80&w=2000",
    beds: 3,
    baths: 2,
    sqft: 2800,
    tags: ["Skyline View", "Smart Home"],
    description:
      "A masterpiece of contemporary architecture, offering panoramic views of the Hudson River and the city that never sleeps.",
  },
  {
    id: "2",
    title: "Lumina Residences",
    price: "&#8377;1,890,000",
    location: "Mumbai, India",
    type: "Villa",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=2000",
    beds: 4,
    baths: 4,
    sqft: 3500,
    tags: ["Infinity Pool", "Private Gym"],
    description:
      "Bask in the California sun in this expansive glass villa where indoor and outdoor living merge seamlessly.",
  },
  {
    id: "3",
    title: "Neon Garden Loft",
    price: "&#8377;980,000",
    location: "Jaipur, India",
    type: "Loft",
    image: "https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&fit=crop&q=80&w=2000",
    beds: 2,
    baths: 2,
    sqft: 1400,
    tags: ["Industrial Design", "Art District"],
    description:
      "A creative sanctuary featuring 15ft ceilings, exposed brick, and a private rooftop garden in the heart of London.",
  },
  {
    id: "4",
    title: "Azure Waters",
    price: "&#8377;3,200,000",
    location: "Palm Jumeirah, Dubai",
    type: "Mansion",
    image: "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?auto=format&fit=crop&q=80&w=2000",
    beds: 5,
    baths: 6,
    sqft: 6200,
    tags: ["Beachfront", "Underground Parking"],
    description:
      "Experience unparalleled luxury on the edge of the world. Private beach access and custom marble interiors.",
  },
];

function initReveal() {
  const revealElements = document.querySelectorAll(".reveal");
  if (!revealElements.length) return;
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    },
    { threshold: 0.15 }
  );
  revealElements.forEach((item) => observer.observe(item));
}

function initHeader() {
  const mainNav = document.getElementById("main-nav");
  const mobileToggle = document.getElementById("mobile-toggle");
  const mobileMenu = document.getElementById("mobile-menu");
  if (mainNav) {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 50) {
        mainNav.classList.add("is-scrolled");
      } else {
        mainNav.classList.remove("is-scrolled");
      }
    });
  }
  if (mobileToggle && mobileMenu) {
    mobileToggle.addEventListener("click", () => {
      mobileMenu.classList.toggle("hidden");
      mobileToggle.textContent = mobileMenu.classList.contains("hidden") ? "Menu" : "Close";
    });
  }
}

function propertyCardHTML(property) {
  return `
    <article class="property-card group relative glass aspect-[4/5] border-transparent hover:border-blue-500/30 transition-all duration-500" data-property-id="${property.id}">
      <div class="absolute inset-0 overflow-hidden">
        <img src="${property.image}" alt="${property.title}" class="property-image w-full h-full object-cover" />
        <div class="absolute inset-0 bg-gradient-to-t from-white/90 via-white/10 to-transparent opacity-80 group-hover:opacity-100 transition-opacity"></div>
      </div>
      <div class="absolute top-6 left-6 flex gap-2">
        <span class="px-3 py-1 bg-white/80 backdrop-blur-md text-slate-900 text-[10px] font-bold uppercase tracking-widest rounded-full border border-slate-200 shadow-sm">${property.tags[0]}</span>
      </div>
      <div class="absolute bottom-0 left-0 right-0 p-8 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
        <div class="flex justify-between items-end mb-4">
          <div>
            <div class="flex items-center gap-1 text-blue-600 text-xs font-bold mb-1">${property.location}</div>
            <h3 class="text-2xl font-extrabold text-slate-900 mb-2">${property.title}</h3>
            <p class="text-xl font-bold text-slate-600">${property.price}</p>
          </div>
        </div>
        <div class="flex items-center gap-6 pt-4 border-t border-slate-200 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <div class="text-slate-600 text-sm font-semibold">${property.beds} Beds</div>
          <div class="text-slate-600 text-sm font-semibold">${property.baths} Baths</div>
          <div class="text-slate-600 text-sm font-semibold">${property.sqft} Sqft</div>
        </div>
      </div>
    </article>
  `;
}

function initHomePage() {
  const featuredGrid = document.getElementById("home-featured-grid");
  if (featuredGrid) {
    featuredGrid.innerHTML = PROPERTIES.slice(0, 3)
      .map((property) => `<div class="reveal">${propertyCardHTML(property)}</div>`)
      .join("");
  }

  const sliderImage = document.getElementById("slider-image");
  const sliderTitle = document.getElementById("slider-title");
  const sliderDescription = document.getElementById("slider-description");
  const sliderPrice = document.getElementById("slider-price");
  const sliderSqft = document.getElementById("slider-sqft");
  const prevButton = document.getElementById("slider-prev");
  const nextButton = document.getElementById("slider-next");

  if (!sliderImage || !sliderTitle || !sliderDescription || !sliderPrice || !sliderSqft || !prevButton || !nextButton) {
    return;
  }

  let activeSlide = 0;
  const sliderImages = PROPERTIES.slice(0, 4);

  const updateSlide = () => {
    const item = sliderImages[activeSlide];
    sliderImage.src = item.image;
    sliderTitle.textContent = item.title;
    sliderDescription.textContent = item.description;
    sliderPrice.innerHTML = item.price;
    sliderSqft.textContent = String(item.sqft);
  };

  prevButton.addEventListener("click", () => {
    activeSlide = (activeSlide - 1 + sliderImages.length) % sliderImages.length;
    updateSlide();
  });

  nextButton.addEventListener("click", () => {
    activeSlide = (activeSlide + 1) % sliderImages.length;
    updateSlide();
  });

  updateSlide();
}

function initPropertiesPage() {
  const grid = document.getElementById("properties-grid");
  if (!grid) return;

  const emptyState = document.getElementById("properties-empty");
  const filters = Array.from(document.querySelectorAll(".property-filter"));
  const searchInput = document.getElementById("property-search");

  const modal = document.getElementById("property-modal");
  const closeModal = document.getElementById("close-modal");
  const modalImage = document.getElementById("modal-image");
  const modalTitle = document.getElementById("modal-title");
  const modalPrice = document.getElementById("modal-price");
  const modalLocation = document.getElementById("modal-location");
  const modalBeds = document.getElementById("modal-beds");
  const modalBaths = document.getElementById("modal-baths");
  const modalSqft = document.getElementById("modal-sqft");
  const modalDescription = document.getElementById("modal-description");

  let activeFilter = "All";

  function showModal(property) {
    if (!modal || !modalImage || !modalTitle || !modalPrice || !modalLocation || !modalBeds || !modalBaths || !modalSqft || !modalDescription) return;
    modalImage.src = property.image;
    modalTitle.textContent = property.title;
    modalPrice.innerHTML = property.price;
    modalLocation.textContent = property.location;
    modalBeds.textContent = property.beds + " Beds";
    modalBaths.textContent = property.baths + " Baths";
    modalSqft.textContent = property.sqft + " Sqft";
    modalDescription.textContent = property.description;
    modal.classList.remove("hidden");
    modal.classList.add("flex");
  }

  function hideModal() {
    if (!modal) return;
    modal.classList.add("hidden");
    modal.classList.remove("flex");
  }

  function render() {
    const term = searchInput ? searchInput.value.trim().toLowerCase() : "";
    const filtered = PROPERTIES.filter((property) => {
      const categoryMatch = activeFilter === "All" ? true : property.type === activeFilter;
      const termMatch =
        !term ||
        property.location.toLowerCase().includes(term) ||
        property.title.toLowerCase().includes(term) ||
        property.type.toLowerCase().includes(term);
      return categoryMatch && termMatch;
    });

    grid.innerHTML = filtered.map((property) => propertyCardHTML(property)).join("");
    if (emptyState) {
      emptyState.classList.toggle("hidden", filtered.length !== 0);
    }

    Array.from(grid.querySelectorAll("[data-property-id]")).forEach((card) => {
      card.addEventListener("click", () => {
        const property = PROPERTIES.find((item) => item.id === card.getAttribute("data-property-id"));
        if (property) showModal(property);
      });
    });
  }

  filters.forEach((button) => {
    button.addEventListener("click", () => {
      activeFilter = button.getAttribute("data-filter") || "All";
      filters.forEach((item) => {
        item.classList.remove("bg-slate-900", "text-white");
        item.classList.add("glass", "text-slate-500");
      });
      button.classList.add("bg-slate-900", "text-white");
      button.classList.remove("glass", "text-slate-500");
      render();
    });
  });

  if (searchInput) {
    searchInput.addEventListener("input", render);
  }

  if (closeModal) {
    closeModal.addEventListener("click", hideModal);
  }

  if (modal) {
    modal.addEventListener("click", (event) => {
      if (event.target === modal) hideModal();
    });
  }

  render();
}

function initContactForm() {
  const form = document.getElementById("contact-form");
  const submit = document.getElementById("contact-submit");
  if (!form || !submit) return;

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    submit.setAttribute("disabled", "disabled");
    submit.textContent = "Sending...";
    setTimeout(() => {
      submit.textContent = "Message Sent Successfully";
    }, 2000);
  });
}

document.addEventListener("DOMContentLoaded", () => {
  initHeader();
  initReveal();
  initHomePage();
  initPropertiesPage();
  initContactForm();
});
