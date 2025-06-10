document.addEventListener("DOMContentLoaded", function () {
  // Tema1: Clickable image opens dialog0
  const tema1Div = document.querySelector(".tema1");
  const tema1Img = tema1Div ? tema1Div.querySelector("img") : null;
  const dialog0 = document.getElementById("dialog0");
  const closeBtn0 = document.getElementById("closeBtn0");

  if (tema1Img && dialog0 && closeBtn0) {
    tema1Img.style.cursor = "pointer";
    tema1Img.addEventListener("click", function () {
      dialog0.showModal();
    });
    closeBtn0.addEventListener("click", function () {
      dialog0.close();
    });
  }

  // Tema2: Clickable image opens dialog1
  const tema2Div = document.querySelector(".tema2");
  const tema2Img = tema2Div ? tema2Div.querySelector("img") : null;
  const dialog1 = document.getElementById("dialog1");
  const closeBtn1 = document.getElementById("closeBtn1");

  if (tema2Img && dialog1 && closeBtn1) {
    tema2Img.style.cursor = "pointer";
    tema2Img.addEventListener("click", function () {
      dialog1.showModal();
    });
    closeBtn1.addEventListener("click", function () {
      dialog1.close();
    });
  }

  // Tema3: Clickable SVG opens dialog2
  const tema3Div = document.querySelector(".tema3");
  const svg = tema3Div ? tema3Div.querySelector("svg") : null;
  const dialog2 = document.getElementById("dialog2");
  const closeBtn2 = document.getElementById("closeBtn2");

  if (svg && dialog2 && closeBtn2) {
    svg.style.cursor = "pointer";
    svg.addEventListener("click", function () {
      dialog2.showModal();
    });
    closeBtn2.addEventListener("click", function () {
      dialog2.close();
    });
  }

  const tema4Img = document.getElementById("tema4img");
  const dialog3 = document.getElementById("dialog3");
  const closeBtn3 = document.getElementById("closeBtn3");

  if (tema4Img && dialog3 && closeBtn3) {
    tema4Img.style.cursor = "pointer";
    tema4Img.addEventListener("click", function () {
      dialog3.showModal();
    });
    closeBtn3.addEventListener("click", function () {
      dialog3.close();
    });
  }

  // Tema5: Clickable image opens dialog4
  const tema5Div = document.querySelector(".tema5");
  const tema5Img = tema5Div ? tema5Div.querySelector("img") : null;
  const dialog4 = document.getElementById("dialog4");
  const closeBtn4 = document.getElementById("closeBtn4");

  if (tema5Img && dialog4 && closeBtn4) {
    tema5Img.style.cursor = "pointer";
    tema5Img.addEventListener("click", function () {
      dialog4.showModal();
    });
    closeBtn4.addEventListener("click", function () {
      dialog4.close();
    });
  }
});
