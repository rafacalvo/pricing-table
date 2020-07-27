const toggle = document.getElementById('toggle');
const flexor = document.getElementById('flexy');

toggle.addEventListener('change', e => {
   flexor.classList.toggle('show-monthly');
});