document.addEventListener('DOMContentLoaded', () => {
  // Update timestamp
  const timestampEl = document.getElementById('current-timestamp');
  if (timestampEl) {
    const now = new Date();
    timestampEl.textContent = now.toLocaleString('es-DO', {
      dateStyle: 'medium',
      timeStyle: 'medium'
    });
  }

  // Smooth hover tilt effect on cards
  const cards = document.querySelectorAll('.glass-card');
  cards.forEach(card => {
    card.addEventListener('mouseenter', () => {
      card.style.transition = 'transform 0.15s ease, border-color 0.15s ease, box-shadow 0.15s ease';
    });
    card.addEventListener('mouseleave', () => {
      card.style.transition = 'transform 0.35s ease, border-color 0.35s ease, box-shadow 0.35s ease';
    });
  });

  console.log('Primer Parcial Electiva 2 - CI/CD Pipeline Ready');
});
