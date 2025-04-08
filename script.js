// Change navbar color when scrolling down
window.addEventListener('scroll', function () {
    const nav = document.getElementById('navbar');
    const aboutSection = document.getElementById('about');
    const trigger = aboutSection.offsetTop - window.innerHeight / 2;
  
    if (window.scrollY > trigger) {
      document.body.style.backgroundColor = '#e0ffe0'; // light green background at bottom
    } else {
      document.body.style.backgroundColor = '#f4f4f4';
    }
  
    if (window.scrollY > 50) {
      nav.style.backgroundColor = '#222';
    } else {
      nav.style.backgroundColor = '#333';
    }
  });
  