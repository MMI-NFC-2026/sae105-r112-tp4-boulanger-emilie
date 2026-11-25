// *** ACCORDEON ***

const accordeon = document.querySelector(".accordeon");

accordeon.querySelectorAll("details").forEach((details) => {
  const summary = details.querySelector("summary");

  summary.addEventListener("click", () => {
    accordeon.querySelectorAll("details").forEach((autreDetails) => {
      if (autreDetails !== details) {
        autreDetails.open = false;
      }
    });
  });
});
