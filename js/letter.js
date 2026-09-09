document.addEventListener('DOMContentLoaded', function() {
  const letterBtn = document.getElementById('letter-btn');
  const letterContainer = document.querySelector('.main__letter');

  if (letterBtn && letterContainer) {
    letterBtn.addEventListener('click', function() {
      
      letterContainer.classList.toggle('open');
      
      letterBtn.disabled = true;
    });
  }
});