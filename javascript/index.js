document.addEventListener('DOMContentLoaded', function () {
  


  // Function to close the navbar collapse
  function closeNavbarCollapse() {
    const navbarCollapse = document.querySelector('.navbar-collapse');
    navbarCollapse.classList.remove('show');

    const backdrop = document.querySelector('.navbar-backdrop');
    backdrop.style.display = 'none';
  }

  // Close the navbar collapse when clicking outside of it
  document.addEventListener('click', function (event) {
    const navbarToggler = event.target.closest('.navbar-toggler');
    const navbarCollapse = event.target.closest('.navbar-collapse');
    if (!navbarToggler && !navbarCollapse) {
      closeNavbarCollapse();
    }
  });


});
