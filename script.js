// Format the final displayed number
function formatValue(target, value) {
  if (target === 27 || target === 3) return Math.floor(value) + "+ LPA";
  if (target === 600 || target === 20) return Math.floor(value) + "+";

  if (target >= 1000) {
    let v = value / 1000;
    let r = v.toFixed(1);
    if (r.endsWith(".0")) r = parseInt(r);
    return r + "K+";
  }

  return Math.floor(value);
}

function easeInOutQuad(t) {
  return t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2;
}

function startCounter(element, duration = 6000, delay = 3000) {
  const start = parseInt(element.getAttribute("data-start")) || 0;
  const target = parseInt(element.getAttribute("data-target"));

  // Prevent "0 flash"
  element.style.visibility = "visible";

  let initialText = element.textContent.trim();
  element.textContent = initialText;

  function runAnimation() {
    setTimeout(() => {
      let startTime = null;

      function animate(timestamp) {
        if (!startTime) startTime = timestamp;

        const progress = Math.min((timestamp - startTime) / duration, 1);
        const eased = easeInOutQuad(progress);
        const currentValue = start + (target - start) * eased;

        element.textContent = formatValue(target, currentValue);

        if (progress < 1) requestAnimationFrame(animate);
        else {
          element.textContent = formatValue(target, target);
          setTimeout(runAnimation, 8000);
        }
      }

      requestAnimationFrame(animate);
    }, delay);
  }

  runAnimation();
}

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".counter").forEach((el) => startCounter(el));
});

// SOC Analyst Program
document.addEventListener("DOMContentLoaded", function () {
  var socModal = new bootstrap.Modal(
    document.getElementById("socProgramModal")
  );
  socModal.show();
});
