// =====================
// HAMBURGER MENU
// =====================
const menu = document.querySelector(".menu");
const hamburgerMenu = document.querySelector(".hamburger-menu");
const iconsBars = document.querySelector(".icon-bars");
const iconClose = document.querySelector(".icon-close");

if (hamburgerMenu && menu) {
  hamburgerMenu.addEventListener("click", displayMenu);
  menu.addEventListener("click", displayMenu);

  function displayMenu() {
    if (menu.classList.contains("tampil")) {
      menu.classList.remove("tampil");
      iconsBars.style.display = "inline";
      iconClose.style.display = "none";
    } else {
      menu.classList.add("tampil");
      iconsBars.style.display = "none";
      iconClose.style.display = "inline";
    }
  }
}

// =====================
// SLIDESHOW PRODUK
// =====================
document.addEventListener("DOMContentLoaded", () => {
  const slideshows = document.querySelectorAll(".slideshow");

  slideshows.forEach(slideshow => {
    const images = slideshow.querySelectorAll("img");
    let index = 0;

    // Pastikan gambar pertama aktif
    images[0].classList.add("active");

    setInterval(() => {
      images[index].classList.remove("active");
      index = (index + 1) % images.length;
      images[index].classList.add("active");
    }, 3000); // ganti gambar setiap 3 detik
  });
});

document.querySelectorAll(".social a, .social i").forEach(icon => {
  icon.addEventListener("click", (e) => {
    // tambahkan class animasi
    icon.classList.add("clicked");

    // hapus lagi setelah animasi selesai (biar bisa diklik ulang)
    setTimeout(() => {
      icon.classList.remove("clicked");
    }, 400); // sesuai durasi animasi
  });
});


