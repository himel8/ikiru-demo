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

// utility functions
if (!Util) function Util() {}

Util.addClass = function (el, className) {
  var classList = className.split(" ");
  el.classList.add(classList[0]);
  if (classList.length > 1) Util.addClass(el, classList.slice(1).join(" "));
};

Util.removeClass = function (el, className) {
  var classList = className.split(" ");
  el.classList.remove(classList[0]);
  if (classList.length > 1) Util.removeClass(el, classList.slice(1).join(" "));
};

Util.toggleClass = function (el, className, bool) {
  if (bool) Util.addClass(el, className);
  else Util.removeClass(el, className);
};

Util.moveFocus = function (element) {
  if (!element) element = document.getElementsByTagName("body")[0];
  element.focus();
  if (document.activeElement !== element) {
    element.setAttribute("tabindex", "-1");
    element.focus();
  }
};

Util.getIndexInArray = function (array, el) {
  return Array.prototype.indexOf.call(array, el);
};
