// Select elements
const openButton = document.querySelector('.open'); // Button to open menu
const closeButton = document.querySelector('.close'); // Button to close menu
const mobileMenu = document.getElementById('mobileMenu'); // Mobile menu container

// Open menu function
openButton.addEventListener('click', () => {
    mobileMenu.classList.add('show'); // Add 'show' class to display the menu
});

// Close menu function
closeButton.addEventListener('click', () => {
    mobileMenu.classList.remove('show'); // Remove 'show' class to hide the menu
});




const swiper = new Swiper('.slider-wrapper', {
  loop: true,
  grabCursor: true,
  spaceBetween: 15,
  autoplay: true,
    autoplayTimeout: 4000,
    autoplayHoverPause: true,
  // Pagination bullets
  // pagination: {
  //   el: '.swiper-pagination',
  //   clickable: true,
  //   dynamicBullets: true
  // },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // Responsive breakpoints
  breakpoints: {
    0: {
      slidesPerView: 1
    },
    768: {
      slidesPerView: 2
    },
    1024: {
      slidesPerView: 4
    }
  }
});


// 2nd 
const swiper1 = new Swiper('.slider-wrapper1' , {
  loop: true,
  grabCursor: true,
  spaceBetween: 15,
  autoplay: true,
  autoplayTimeout: 5000,
  autoplayHoverPause: true,
  // Pagination bullets
  // pagination: {
  //   el: '.swiper-pagination',
  //   clickable: true,
  //   dynamicBullets: true
  // },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next1',
    prevEl: '.swiper-button-prev1',
  },

  // Responsive breakpoints
  breakpoints: {
    0: {
      slidesPerView: 1
    },
    768: {
      slidesPerView: 2
    },
    1024: {
      slidesPerView: 3
    }
  }
});





// FAQ

function toggleDescription(number) {
  // Select elements for the specific number
  const heading = document.getElementById(`heading${number}`);
  const desc = document.getElementById(`desc${number}`);
  const openSymbol = heading.querySelector(".open");
  const closeSymbol = heading.querySelector(".close");

  // Check if the selected description is visible
  const isVisible = desc.style.display === 'block';

  // Hide all descriptions and reset all symbols and highlights
  for (let i = 1; i <= 4; i++) {
      document.getElementById(`heading${i}`).classList.remove('highlight');
      document.getElementById(`desc${i}`).style.display = 'none';
      document.querySelector(`#heading${i} .open`).style.display = 'inline';
      document.querySelector(`#heading${i} .close`).style.display = 'none';
  }

  // Toggle visibility of the selected description
  if (!isVisible) {
      desc.style.display = 'block';
      openSymbol.style.display = 'none';
      closeSymbol.style.display = 'inline';
      heading.classList.add('highlight');
  } else {
      desc.style.display = 'none';
      openSymbol.style.display = 'inline';
      closeSymbol.style.display = 'none';
      heading.classList.remove('highlight');
  }
}