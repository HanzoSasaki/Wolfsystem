// Menu Mobile
const navToggle = document.querySelector('.nav__toggle');
const navMenu = document.querySelector('.nav__menu');

navToggle.addEventListener('click', () => {
  navMenu.classList.toggle('active');
  document.body.classList.toggle('no-scroll');
});

// Fechar menu ao clicar em link
document.querySelectorAll('.nav__link').forEach(link => {
  link.addEventListener('click', () => {
    navMenu.classList.remove('active');
    document.body.classList.remove('no-scroll');
  });
});

// Tema Dark/Light
const themeToggle = document.querySelector('.theme-toggle');
themeToggle.addEventListener('click', () => {
  const currentTheme = document.documentElement.getAttribute('data-theme');
  const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
  document.documentElement.setAttribute('data-theme', newTheme);
  themeToggle.setAttribute('aria-label', `Alternar para tema ${newTheme === 'dark' ? 'claro' : 'escuro'}`);
  themeToggle.querySelector('i').className = 
    newTheme === 'dark' ? 'fas fa-moon' : 'fas fa-sun';
});

// Scroll Suave
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Observer para animações
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('animate');
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.feature-card, .demo-container').forEach(el => observer.observe(el));