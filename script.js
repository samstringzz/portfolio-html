// Smooth Scroll
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
  
  // Lightbox for Gallery
  const galleryImages = document.querySelectorAll('.gallery img');
  galleryImages.forEach(image => {
    image.addEventListener('click', () => {
      const modal = document.createElement('div');
      modal.classList.add('modal');
      modal.innerHTML = `<img src="${image.src}" alt="${image.alt}">
                         <span class="close">&times;</span>`;
      document.body.appendChild(modal);
  
      document.querySelector('.modal .close').addEventListener('click', () => {
        document.body.removeChild(modal);
      });
    });
  });
  

  const hamburger = document.getElementById('hamburger');
  const navLinks = document.getElementById('nav-links');

  hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
  });

  document.addEventListener('DOMContentLoaded', function () {
    const swiper = new Swiper('.swiper-container', {
      slidesPerView: 1,  
      spaceBetween: 10, 
      autoplay: {
        delay: 3000,  
        disableOnInteraction: false,  
      },
      loop: true,  
      navigation: {
        nextEl: '.swiper-button-next',  
        prevEl: '.swiper-button-prev',  
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      breakpoints: {
        640: { 
          slidesPerView: 1, 
          spaceBetween: 10,
        },
        1024: { 
          slidesPerView: 1, 
          spaceBetween: 10,
        }
      },
    });
  });
  