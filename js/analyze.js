function closeOverlay(type) {
  const overlay = document.getElementById(`overlay-${type}`);
  if (overlay) {
    overlay.style.display = 'none';
  }
}
function openOverlay(id) {

    const overlays = document.querySelectorAll('.overlay');


    overlays.forEach(overlay => {
        overlay.style.display = 'none';
    });

    const target = document.getElementById('overlay-' + id);
    if (target) {
        target.style.display = 'flex';
    }
}

function closeOverlay(id) {
    const target = document.getElementById('overlay-' + id);
    if (target) {
        target.style.display = 'none';
    }
}
