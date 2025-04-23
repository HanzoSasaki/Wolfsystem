    // Idade automática
    const birth = new Date('1997-06-11');
    const now = new Date();
    let age = now.getFullYear() - birth.getFullYear();
    const m = now.getMonth() - birth.getMonth();
    if (m < 0 || (m === 0 && now.getDate() < birth.getDate())) age--;
    document.getElementById('age').textContent = age;
    document.getElementById('year').textContent = now.getFullYear();

    // Scroll suave e nav ativo
    const links = document.querySelectorAll('nav a');
    links.forEach(link => {
      link.addEventListener('click', e => {
        e.preventDefault();
        links.forEach(l => l.classList.remove('active'));
        link.classList.add('active');
        document.querySelector(link.getAttribute('href')).scrollIntoView({ behavior: 'smooth' });
      });
    });