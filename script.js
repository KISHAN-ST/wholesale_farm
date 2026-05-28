document.addEventListener('DOMContentLoaded', () => {
  // Sticky Header Effect
  const header = document.querySelector('header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      header.style.boxShadow = '0 10px 15px rgba(0,0,0,0.1)';
      header.style.padding = '5px 0';
    } else {
      header.style.boxShadow = '0 4px 6px rgba(0,0,0,0.05)';
      header.style.padding = '0';
    }
  });

  // Simple Language Toggle Placeholder
  const langToggle = document.querySelector('.lang-toggle');
  if (langToggle) {
    let currentLang = 'EN';
    langToggle.addEventListener('click', () => {
      currentLang = currentLang === 'EN' ? 'HI' : 'EN';
      langToggle.textContent = currentLang === 'EN' ? 'ENG | HI' : 'HI | ENG';
      // In a real app, this would swap text content or redirect to a localized route
      console.log(`Language switched to ${currentLang}`);
    });
  }
});
