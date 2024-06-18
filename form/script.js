document.addEventListener('DOMContentLoaded', function() {
  const contactForm = document.getElementById('contactForm');
  const confirmationMessage = document.getElementById('confirmationMessage');

  contactForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Evita il comportamento predefinito di inviare il form

    // Simula l'invio dei dati (puoi implementare qui la logica per l'invio reale dei dati)
    // Per il momento mostriamo solo il messaggio di conferma
    confirmationMessage.classList.remove('hidden');
    
    // Opzionalmente, puoi reimpostare il form o fare altre azioni dopo l'invio
    // contactForm.reset(); // Resetta il form

    // Scrolla fino al messaggio di conferma
    confirmationMessage.scrollIntoView({ behavior: 'smooth' });
  });
});