<<<<<<< HEAD
// BUTTON TRACKING
document.querySelectorAll("button").forEach(btn => {
  btn.addEventListener("click", () => {
    console.log("Clicked:", btn.textContent);
  });
});

// THEME SWITCH
document.querySelectorAll("input[name='theme']").forEach(radio => {
  radio.addEventListener("change", (e) => {
    if (e.target.value === "dark") {
      document.body.style.background = "#222";
      document.body.style.color = "white";
    } else {
      document.body.style.background = "#f4f4f4";
      document.body.style.color = "black";
    }
  });
});

// TOGGLE FEATURE
document.getElementById("toggleFeature").addEventListener("change", (e) => {
  alert(e.target.checked ? "Feature Enabled" : "Feature Disabled");
});

// MODAL
const modal = document.getElementById("modal");

document.getElementById("openModal").onclick = () => {
  modal.style.display = "block";
};

document.getElementById("closeModal").onclick = () => {
  modal.style.display = "none";
};

// FORM VALIDATION (IMPORTANT FIX)
document.getElementById("signup-form").addEventListener("submit", function(e) {

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const terms = document.getElementById("terms").checked;
  const msg = document.getElementById("form-message");

  if (!name || !email) {
    e.preventDefault();
    msg.style.color = "red";
    msg.textContent = "Fill all fields!";
    return;
  }

  if (!terms) {
    e.preventDefault();
    msg.style.color = "red";
    msg.textContent = "Accept terms!";
    return;
  }

  // ✅ If valid → form submits to Getform
=======
// BUTTON TRACKING
document.querySelectorAll("button").forEach(btn => {
  btn.addEventListener("click", () => {
    console.log("Clicked:", btn.textContent);
  });
});

// THEME SWITCH
document.querySelectorAll("input[name='theme']").forEach(radio => {
  radio.addEventListener("change", (e) => {
    if (e.target.value === "dark") {
      document.body.style.background = "#222";
      document.body.style.color = "white";
    } else {
      document.body.style.background = "#f4f4f4";
      document.body.style.color = "black";
    }
  });
});

// TOGGLE FEATURE
document.getElementById("toggleFeature").addEventListener("change", (e) => {
  alert(e.target.checked ? "Feature Enabled" : "Feature Disabled");
});

// MODAL
const modal = document.getElementById("modal");

document.getElementById("openModal").onclick = () => {
  modal.style.display = "block";
};

document.getElementById("closeModal").onclick = () => {
  modal.style.display = "none";
};

// FORM VALIDATION (IMPORTANT FIX)
document.getElementById("signup-form").addEventListener("submit", function(e) {

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const terms = document.getElementById("terms").checked;
  const msg = document.getElementById("form-message");

  if (!name || !email) {
    e.preventDefault();
    msg.style.color = "red";
    msg.textContent = "Fill all fields!";
    return;
  }

  if (!terms) {
    e.preventDefault();
    msg.style.color = "red";
    msg.textContent = "Accept terms!";
    return;
  }

  // ✅ If valid → form submits to Getform
>>>>>>> 0e00a14baca4a8f6080c13bc02846ed3ad8db92e
});