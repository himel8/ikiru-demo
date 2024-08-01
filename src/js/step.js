// Get all steps and next buttons
const steps = document.querySelectorAll(".step");
const nextButtons = document.querySelectorAll(".next");

let currentStep = 0;

// Function to show the current step
function showStep(step) {
  steps.forEach((stepElement, index) => {
    stepElement.classList.toggle("hidden", index !== step);
  });
}

// Show the first step initially
showStep(currentStep);

// Add event listeners to next buttons
nextButtons.forEach((button, index) => {
  button.addEventListener("click", () => {
    if (index < steps.length - 1) {
      currentStep++;
      showStep(currentStep);
    }
  });
});
