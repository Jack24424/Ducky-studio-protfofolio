const images = [
  { 
    src: "basic.png", 
    alt: "",
    desc: ""
  },
   { 
    src: "2.png", 
    alt: "",
    desc: ""
  },
   { 
    src: "gun.png",   
    alt: "",
    desc: ""
  },
  { 
    src: "ship.png",  
    alt: "",
    desc: ""
  }
  // Add more here anytime ↓
  // { src: "newmodel.png", alt: "New asset", desc: "Your description here" },
];

const gallery = document.getElementById("gallery");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const lightboxDesc = document.getElementById("lightbox-desc");
let currentIndex = 0;

// Build gallery cards
images.forEach((img, index) => {
  const card = document.createElement("div");
  card.className = "card";
  card.innerHTML = `<img src="${img.src}" alt="${img.alt}" loading="lazy">`;
  card.onclick = () => openLightbox(index);
  gallery.appendChild(card);
});

function openLightbox(index) {
  currentIndex = index;
  updateLightbox();
  lightbox.style.display = "flex";
}

function closeLightbox() {
  lightbox.style.display = "none";
}

function changeImage(direction) {
  currentIndex = (currentIndex + direction + images.length) % images.length;
  updateLightbox();
}

function updateLightbox() {
  const img = images[currentIndex];
  lightboxImg.src = img.src;
  lightboxImg.alt = img.alt;
  lightboxDesc.textContent = img.desc || "";
}

// Close when clicking outside image
lightbox.addEventListener("click", (e) => {
  if (e.target === lightbox) closeLightbox();
});

// Keyboard navigation
document.addEventListener("keydown", (e) => {
  if (lightbox.style.display !== "flex") return;
  if (e.key === "Escape") closeLightbox();
  if (e.key === "ArrowLeft")  changeImage(-1);
  if (e.key === "ArrowRight") changeImage(1);
});
