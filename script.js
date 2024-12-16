        // For handling mobile dropdown toggle (if needed in responsive designs)
        document.querySelectorAll('.dropdown1 > a').forEach(menuLink => {
          menuLink.addEventListener('click', (e) => {
              e.preventDefault();
              const submenu = menuLink.nextElementSibling;
              submenu.style.display = submenu.style.display === 'block' ? 'none' : 'block';
          });
      });
      




// Select elements
const openButton = document.querySelector('.open'); // Button to open menu
const closeButton = document.querySelector('.close'); // Button to close menu
const mobileMenu = document.getElementById('mobileMenu'); // Mobile menu container

// Open menu function
openButton.addEventListener('click', () => {
    mobileMenu.classList.add('show'); // Add 'show' class to display the menu
    mobileMenu.style.animation = "openAnimation 2s cubic-bezier(0.25, 1, 0.5, 1)"; // Add 'show' class to display the menu
    mobileMenu.style.overflow = "hidden"; // Add 'show' class to display the menu
    openButton.style.display = "none"
    closeButton.style.display = "block"
    
  });
  
  // Close menu function
  closeButton.addEventListener('click', () => {
    mobileMenu.classList.remove('show'); // Remove 'show' class to hide the menu
    openButton.style.display = "block"
    closeButton.style.display = "none"
    mobileMenu.style.animation = "closeAnimation 2s cubic-bezier(0.25, 1, 0.5, 1)";
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


// 2nd 
const swiper12 = new Swiper('.slider-wrapper12' , {
  loop: true,
  grabCursor: true,
  spaceBetween: 50,
  autoplay: false,
  autoplayTimeout: 2000,
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
    }
  }
});


// service part js 


// let swiper11 = document.querySelector(".swiper11");
// let swiper22 = document.querySelector(".swiper22");
// let swiper33 = document.querySelector(".swiper33");
// let swiper44 = document.querySelector(".swiper44");
// let Testimonials = document.querySelector(".Testimonials");
// let Technology = document.querySelector(".Technology");
// let whyChooseUsCards = document.querySelector(".whyChooseUsCards");
// let h41 = document.querySelector(".h41")
// let h42 = document.querySelector(".h42")
// let h43 = document.querySelector(".h43")
// let h44 = document.querySelector(".h44")
// let h45 = document.querySelector(".h45")
// let h46 = document.querySelector(".h46")
// let h47 = document.querySelector(".h47")
// let servicelink1 = document.querySelector(".servicelink1")
// let servicelink2 = document.querySelector(".servicelink2")
// let servicelink3 = document.querySelector(".servicelink3")
// let servicelink4 = document.querySelector(".servicelink4")
// let servicelink5 = document.querySelector(".servicelink5")
// let servicelink6 = document.querySelector(".servicelink6")
// let servicelink7 = document.querySelector(".servicelink7")


// servicelink1.addEventListener("click", function(){
//   servicelink1.style.color ="#327FC7"
//   servicelink1.style.borderBottom = "1px solid #327FC7"
//   servicelink1.style.boxShadow = " rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px"
//   h41.style.display = "block"
//   h42.style.display = "none"
//   h43.style.display = "none"
//   h44.style.display = "none"
//   h45.style.display = "none"
//   h46.style.display = "none"
//   h47.style.display = "none"
//   swiper11.style.display = "block"
//   swiper22.style.display = "none"
//   swiper33.style.display = "none"
//   swiper44.style.display = "none"
//   Testimonials.style.display = "none"
//   Technology.style.display = "none"
//   whyChooseUsCards.style.display = "none"
// });

// servicelink2.addEventListener("click", function(){
//   servicelink2.style.color ="#327FC7"
//   servicelink2.style.borderBottom = "1px solid #327FC7"
//   servicelink2.style.boxShadow = " rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px"
  
//   h41.style.display = "none"
//   h42.style.display = "block"
//   h43.style.display = "none"
//   h44.style.display = "none"
//   h45.style.display = "none"
//   h46.style.display = "none"
//   h47.style.display = "none"
//   swiper11.style.display = "none"
//   swiper22.style.display = "block"
//   swiper33.style.display = "none"
//   swiper44.style.display = "none"
//   Testimonials.style.display = "none"
//   Technology.style.display = "none"
//   whyChooseUsCards.style.display = "none"
// });
// servicelink3.addEventListener("click", function(){
//   servicelink3.style.color ="#327FC7"
//   servicelink3.style.borderBottom = "1px solid #327FC7"
//   servicelink3.style.boxShadow = " rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px"
  
//   h41.style.display = "none"
//   h42.style.display = "none"
//   h43.style.display = "block"
//   h44.style.display = "none"
//   h45.style.display = "none"
//   h46.style.display = "none"
//   h47.style.display = "none"
//   swiper11.style.display = "none"
//   swiper22.style.display = "none"
//   swiper33.style.display = "block"
//   swiper44.style.display = "none"
//   Testimonials.style.display = "none"
//   Technology.style.display = "none"
//   whyChooseUsCards.style.display = "none"
// });

// servicelink4.addEventListener("click", function(){
//   servicelink4.style.color ="#327FC7"
//   servicelink4.style.borderBottom = "1px solid #327FC7"
//   servicelink4.style.boxShadow = " rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px"
  
//   h41.style.display = "none"
//   h42.style.display = "none"
//   h43.style.display = "none"
//   h44.style.display = "block"
//   h45.style.display = "none"
//   h46.style.display = "none"
//   h47.style.display = "none"
//   swiper11.style.display = "none"
//   swiper22.style.display = "none"
//   swiper33.style.display = "none"
//   swiper44.style.display = "block"
//   Testimonials.style.display = "none"
//   Technology.style.display = "none"
//   whyChooseUsCards.style.display = "none"
// });
// servicelink5.addEventListener("click", function(){
//   servicelink5.style.color ="#327FC7"
//   servicelink5.style.borderBottom = "1px solid #327FC7"
//   servicelink5.style.boxShadow = " rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px"
  
//   h41.style.display = "none"
//   h42.style.display = "none"
//   h43.style.display = "none"
//   h44.style.display = "none"
//   h45.style.display = "block"
//   h46.style.display = "none"
//   h47.style.display = "none"
//   swiper11.style.display = "none"
//   swiper22.style.display = "none"
//   swiper33.style.display = "none"
//   swiper44.style.display = "none"
//   Testimonials.style.display = "flex"
//   Technology.style.display = "none"
//   whyChooseUsCards.style.display = "none"
// });
// servicelink6.addEventListener("click", function(){
  
//   servicelink6.style.color ="#327FC7"
//   servicelink6.style.borderBottom = "1px solid #327FC7"
//   servicelink6.style.boxShadow = " rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px"
  
//   h41.style.display = "none"
//   h42.style.display = "none"
//   h43.style.display = "none"
//   h44.style.display = "none"
//   h45.style.display = "none"
//   h46.style.display = "block"
//   h47.style.display = "none"
//   swiper11.style.display = "none"
//   swiper22.style.display = "none"
//   swiper33.style.display = "none"
//   swiper44.style.display = "none"
//   Testimonials.style.display = "none"
//   Technology.style.display = "block"
//   whyChooseUsCards.style.display = "none"
// });
// servicelink7.addEventListener("click", function(){
//   servicelink7.style.color ="#327FC7"
//   servicelink7.style.borderBottom = "1px solid #327FC7"
//   servicelink7.style.boxShadow = " rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px"
  
//   h41.style.display = "none"
//   h42.style.display = "none"
//   h43.style.display = "none"
//   h44.style.display = "none"
//   h45.style.display = "none"
//   h46.style.display = "none"
//   h47.style.display = "block"
//   swiper11.style.display = "none"
//   swiper22.style.display = "none"
//   swiper33.style.display = "none"
//   swiper44.style.display = "none"
//   Testimonials.style.display = "none"
//   Technology.style.display = "none"
//   whyChooseUsCards.style.display = "flex"
// });









// service 

// function service(number) {
//   // Select elements for the specific number
//   const link = document.getElementById(`servicelink${number}`);
//   const heading = document.getElementById(`h${number}`);
//   const details = document.getElementById(`swiper${number}`);

//   // Check if the selected description is visible
//   const isVisible = desc.style.hlay === 'block';

//   // Hide all descriptions and reset all symbols and highlights
//   for (let i = 1; i <= 7; i++) {
//       document.getElementsByClassName(`heading${i}`).classList.remove('active');
//       document.getElementsByClassName(`h${i}`).style.display = 'none';
//       document.getElementsByClassName(`details${i}`).style.display = 'none';
//   }

//   // Toggle visibility of the selected description
//   if (!isVisible) {
//       details.style.display = 'block';
//       heading.style.display = 'block';
//       link.classList.add('active');
//   }
// }

function service(number) {
  // Hide all sections
  for (let i = 1; i <= 7; i++) {
      const link = document.getElementById(`servicelink${i}`);
      const heading = document.getElementById(`h${i}`);
      const details = document.getElementById(`swiper${i}`);

      // Reset styles
      if (link) link.classList.remove('active');
      if (heading) heading.style.display = 'none';
      if (details) details.style.display = 'none';
  }

  // Show selected section
  const selectedLink = document.getElementById(`servicelink${number}`);
  const selectedHeading = document.getElementById(`h${number}`);
  const selectedDetails = document.getElementById(`swiper${number}`);

  if (selectedLink) selectedLink.classList.add('active');
  if (selectedHeading) selectedHeading.style.display = 'block';
  if (selectedDetails) selectedDetails.style.display = 'block';
}

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