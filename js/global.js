document.addEventListener("DOMContentLoaded", () => {
  const state = JSON.parse(localStorage.getItem("loopState")) || {
    dir: null,
    count: 0
  };

  function save() {
    localStorage.setItem("loopState", JSON.stringify(state));
  }

  function step(direction) {
    if (state.dir !== direction) {
      state.dir = direction;
      state.count = 1;
    } else {
      state.count += 1;
    }

    console.log("STEP:", direction, state.count);

    save();

    if (state.count >= 3) {
      localStorage.removeItem("loopState");
      window.location.href = "SecretSumire.html";
    }
  }

  document.addEventListener("click", e => {
  const el = e.target.closest("[data-dir]");
  if (!el) return;

  step(el.dataset.dir);
});


