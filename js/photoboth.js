btn = document.getElementById('photoboth-btn')
photoline = document.getElementById('photoline')

btn.addEventListener('click', () => {
   photoline.classList.toggle('hide');
   console.log(document.getElementById('photoline'));
   console.log(document.getElementById('photoboth-btn'));
})