function getSuffix(target) {
  if (target === 27 || target === 3) {
    return "+ LPA";
  }
  if (target === 600 || target === 20) {
    return "+";
  }
  return "K+";
}

function animateCounter(id, target) {
  let duration = Math.random() * (8000 - 5000) + 5000; // 5–8 sec
  let fps = 30;
  let steps = duration / fps;
  let stepValue = target / steps;

  let count = 0;
  let suffix = getSuffix(target);

  let counter = setInterval(() => {
    count += stepValue;

    if (count >= target) {
      count = target;
      clearInterval(counter);
    }

    let display;

    // K formatting with ONE decimal, unless decimal is .0 → remove it
    if (suffix === "K+" && target >= 1000) {
      let value = count / 1000;
      let rounded = value.toFixed(1); // e.g., 2.3 or 5.0

      // If value ends in .0 → show as whole number (5K+)
      if (rounded.endsWith(".0")) {
        display = parseInt(rounded) + "K+";
      } else {
        display = rounded + "K+";
      }
    }

    // 27+ LPA, 3+ LPA
    else if (suffix === "+ LPA") {
      display = Math.floor(count) + "+ LPA";
    }

    // 600+ or 20+
    else {
      display = Math.floor(count) + "+";
    }

    document.getElementById(id).textContent = display;
  }, fps);
}

// Animate each counter
animateCounter("counter1", 2300); // 2.3K+
animateCounter("counter2", 600); // 600+
animateCounter("counter3", 27); // 27+ LPA
animateCounter("counter4", 3); // 3+ LPA
animateCounter("counter5", 20); // 20+
animateCounter("counter6", 5000); // 5K+
