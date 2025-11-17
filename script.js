function animateCounter(id, endValue, duration = 6000, suffix = "") {
  let element = document.getElementById(id);
  let startValue = 0;
  let startTime = null;

  function update(timestamp) {
    if (!startTime) startTime = timestamp;
    let progress = Math.min((timestamp - startTime) / duration, 1);
    let currentValue = Math.floor(progress * endValue);
    element.textContent = currentValue + suffix;

    if (progress < 1) requestAnimationFrame(update);
  }

  requestAnimationFrame(update);
}

// Run on every reload
document.addEventListener("DOMContentLoaded", function () {
  animateCounter("counter1", 2300, 6000, "+"); // Students Placed
  animateCounter("counter2", 150, 6000, "+"); // Drives Happened
  animateCounter("counter3", 27, 6000, "+ LPA"); // Highest Package
  animateCounter("counter4", 3, 6000, "+ LPA"); // Average Package
  animateCounter("counter5", 50, 6000, "+"); // Expert Mentors
  animateCounter("counter6", 5000, 6000, "+"); // Learners Upskilled
});
