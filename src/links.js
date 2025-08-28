document.querySelectorAll('.top-list a').forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    link.classList.toggle('active');
  });

  link.addEventListener('mouseleave', () => {
    link.classList.remove('active');
  });
});

document.querySelectorAll('.social-list a').forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    link.classList.toggle('active');
  });

  link.addEventListener('mouseleave', () => {
    link.classList.remove('active');
  });
});

document.querySelectorAll('.bottom-list a').forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    link.classList.toggle('active');
  });

  link.addEventListener('mouseleave', () => {
    link.classList.remove('active');
  });
});
