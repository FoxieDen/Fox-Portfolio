const analyzeBtn = document.querySelector('.analyze-button');
const overlay = document.querySelector('.overlay-panel');
const closeBtn = document.querySelector('.close-button');

analyzeBtn.addEventListener('click', () => {
  overlay.classList.remove('hidden');
});

closeBtn.addEventListener('click', () => {
  overlay.classList.add('hidden');
});
let currentPage = 0;

function toggleAnalyze() {
  document.querySelector('.overlay-panel').classList.remove('hidden');
  showPage(0);
}

function changePage(step) {
  const total = document.querySelectorAll('.page').length;
  currentPage = (currentPage + step + total) % total;
  showPage(currentPage);
}

function showPage(index) {
  document.querySelectorAll('.page').forEach((el, i) => {
    el.classList.toggle('hidden', i !== index);
  });
}

function goHome() {
  document.querySelector('.overlay-panel').classList.add('hidden');
}
