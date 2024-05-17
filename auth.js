// function to toggle pop-up message visibility
function togglePopUp(message) {
  const popup = document.getElementById("popup");
  const popupMessage = document.getElementById("popup-message");
  popupMessage.innerText = message;
  popup.style.display = message ? "block" : "none";
}

function initialize() {
  // add event listeners for registration and login buttons
  document.getElementById("reg-submit-btn").addEventListener("click", () => togglePopUp("An error occurred."));
  document.getElementById("login-submit-btn").addEventListener("click", () => togglePopUp("An error occurred."));

  // add event listeners for accordion buttons
  document.querySelectorAll(".accordion-btn").forEach(accordion => {
    accordion.addEventListener("click", function () {
      const content = this.parentNode.nextElementSibling;
      content.style.maxHeight = content.style.maxHeight ? null : content.scrollHeight + "px";
      this.querySelector(".icon").classList.toggle("active-icon");
    });
  });

  // add event listener for close button
  document.querySelector(".close-btn").addEventListener("click", () => document.getElementById("popup").style.display = "none");
}

// run initialization
initialize();