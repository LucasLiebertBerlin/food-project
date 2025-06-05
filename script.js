// List of available countries with ID, display name, flag icon, background image, and alt text for accessibility
const countries = [
  {
    id: "china",
    name: "China",
    flag: "https://hatscripts.github.io/circle-flags/flags/cn.svg",
    image: "./assets/images/beef.avif",
    alt: "Chinesisches Gericht",
  },
  {
    id: "südkorea",
    name: "Südkorea",
    flag: "https://hatscripts.github.io/circle-flags/flags/kr.svg",
    image: "./assets/images/sushi.avif",
    alt: "Koreanisches Essen",
  },
  {
    id: "japan",
    name: "Japan",
    flag: "https://hatscripts.github.io/circle-flags/flags/jp.svg",
    image: "./assets/images/ramen.avif",
    alt: "Sushi-Platte aus Japan",
  },
  {
    id: "thailand",
    name: "Thailand",
    flag: "https://hatscripts.github.io/circle-flags/flags/th.svg",
    image: "./assets/images/charcuteriboard.avif",
    alt: "Thai Curry",
  },
];

// Cache DOM elements for reuse
const content = document.getElementById("content");
const dropdownButton = document.getElementById("dropdownButton");
const dropdownMenu = document.getElementById("dropdownMenu");
const flagIcon = document.getElementById("flagIcon");

// Render the dropdown list dynamically based on countries array
function renderDropdown() {
  countries.forEach((country) => {
    const item = document.createElement("button");
    item.className =
      "w-full flex items-center gap-2 px-4 py-2 hover:bg-gray-100";
    item.setAttribute("role", "menuitem");
    item.innerHTML = `
      <div class='w-6 h-6 rounded-full overflow-hidden border border-gray-300'>
        <img src="${country.flag}" class="w-full h-full object-contain" alt="${country.name} Flagge" />
      </div>
      <span>${country.name}</span>
    `;
    item.onclick = () => showCountry(country.id);
    dropdownMenu.appendChild(item);
  });
}

// Trigger image preload and content update for selected country
function showCountry(id) {
  const country = countries.find((c) => c.id === id);
  const img = new Image();
  img.src = country.image;

  img.onload = () => renderCountrySection(country);
  updateFlagIcon(country);
  closeDropdown();
}

// Generate and display the selected country section with animation
function renderCountrySection(country) {
  const newSection = document.createElement("section");
  newSection.setAttribute("aria-label", `Gericht aus ${country.name}`);
  newSection.className =
    "absolute inset-0 opacity-0 transition-opacity duration-500";

  newSection.innerHTML = `
    <div class="absolute inset-0 bg-cover bg-center scale-105 transition-transform duration-1000"
         style="background-image: url('${country.image}')" 
         role="img" aria-label="${country.alt}"></div>
    <div class="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-center px-4">
      <h2 class="text-[3.5rem] leading-tight font-bold mb-5">${country.name}</h2>
      <button
        class="relative overflow-hidden border border-white px-10 py-4 rounded text-white text-xl transition-colors duration-300 ease-in-out group"
        aria-label="Jetzt ${country.name} entdecken">
        <span class="relative z-10 font-[Roboto] tracking-wide">Jetzt entdecken</span>
        <span class="absolute inset-0 bg-white/20 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-in-out"></span>
      </button>
    </div>
  `;

  const oldSection = content.querySelector("section");
  content.appendChild(newSection);
  requestAnimationFrame(() => newSection.classList.add("opacity-100"));

  if (oldSection) {
    oldSection.classList.remove("opacity-100");
    oldSection.classList.add("opacity-0");
    setTimeout(() => oldSection.remove(), 500);
  }
}

// Update the main flag icon to reflect current country
function updateFlagIcon(country) {
  flagIcon.src = country.flag;
  flagIcon.alt = `Aktuelle Flagge: ${country.name}`;
}

// Close dropdown menu
function closeDropdown() {
  dropdownButton.setAttribute("aria-expanded", "false");
  dropdownMenu.classList.add("hidden");
}

// Toggle dropdown visibility on button click
dropdownButton.addEventListener("click", () => {
  const expanded = dropdownButton.getAttribute("aria-expanded") === "true";
  dropdownButton.setAttribute("aria-expanded", String(!expanded));
  dropdownMenu.classList.toggle("hidden");
});

// Hide dropdown if clicking outside of it
document.addEventListener("click", (event) => {
  if (
    !dropdownButton.contains(event.target) &&
    !dropdownMenu.contains(event.target)
  ) {
    closeDropdown();
  }
});

// Initialize the dropdown and display default country
renderDropdown();
showCountry("japan");
