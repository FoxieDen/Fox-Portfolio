 let clicked = false;

  document.getElementById("return-button").addEventListener("click", function (event) {
    event.preventDefault();

    const img1 = document.querySelector('.image-panel');
    const img2 = document.getElementById('alt-sumire');

    if (!clicked) {
      img1.style.display = "none";
      img2.style.display = "block";
      clicked = true;
    } else {
      window.location.href = "index.html"; 
    }
  });
