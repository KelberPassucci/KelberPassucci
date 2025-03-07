document.getElementById('contact-form').addEventListener('submit', function(event) {
  event.preventDefault();
  alert('Mensagem enviada com sucesso!');
});

// Animação de rolagem suave
const links = document.querySelectorAll('nav ul li a');
links.forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    const targetId = e.target.getAttribute('href').substring(1);
    document.getElementById(targetId).scrollIntoView({ behavior: 'smooth' });
  });
});
