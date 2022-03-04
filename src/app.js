
// Declaring Variables for hamburger mobile view

 const menuButton = document.querySelector(".hamburger");
 const mobileMenu = document.querySelector(".mobile-nav");
// Adding active to the click function
  menuButton.addEventListener("click", () => {
      menuButton.classList.toggle("is-active");
     mobileMenu.classList.toggle("is-active");
  });

// Project Image carousel 

