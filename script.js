const toggle = document.getElementById('toggle');
const flexor = document.getElementById('flexor');

toggle.addEventListener('change', e => {
   flexor.classList.toggle('show-monthly');
});