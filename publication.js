window.addEventListener('DOMContentLoaded', function() {
    const navEL = document.querySelector('.navbar');
  
    function handleScroll() {
      if (window.scrollY >= 200) {
        navEL.classList.add('navbar-scrolledDesktop');
      } else {
        navEL.classList.remove('navbar-scrolledDesktop');
      }
    }
  
    function handleMediaQueryChange() {
      if (window.matchMedia('screen and (max-width: 575px)').matches) {
        navEL.classList.add('navbar-scrolledMobile');
      } else {
        navEL.classList.remove('navbar-scrolledMobile');
      }
  
      if (window.matchMedia('screen and (min-width: 576px) and (max-width: 991px)').matches) {
        navEL.classList.add('navbar-scrolledTablet');
      } else {
        navEL.classList.remove('navbar-scrolledTablet');
      }
    }
  
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleMediaQueryChange);
  
    handleMediaQueryChange(); // Call the function initially to apply the correct classes based on the initial viewport size
  });
  