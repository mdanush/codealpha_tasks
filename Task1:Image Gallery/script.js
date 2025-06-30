let currentImageIndex = 0;
let images = [];

function openLightbox(img) {
  images = Array.from(document.querySelectorAll(".gallery img"));
  currentImageIndex = images.indexOf(img);
  document.getElementById("lightbox-img").src = img.src;
  document.getElementById("lightbox").style.display = "block";
}

function closeLightbox() {
  document.getElementById("lightbox").style.display = "none";
}

function changeImage(n) {
  currentImageIndex += n;
  if (currentImageIndex < 0) currentImageIndex = images.length - 1;
  if (currentImageIndex >= images.length) currentImageIndex = 0;
  document.getElementById("lightbox-img").src = images[currentImageIndex].src;
}

function filterImages(category) {
  let allImages = document.querySelectorAll(".image");
  document.querySelectorAll(".filter-btn").forEach(btn => btn.classList.remove("active"));
  event.target.classList.add("active");
  allImages.forEach(img => {
    if (category === 'all' || img.classList.contains(category)) {
      img.style.display = "block";
    } else {
      img.style.display = "none";
    }
  });
}
