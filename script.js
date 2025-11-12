function animateCounter(id, target, step, speed) {
  let count = 0;
  let counter = setInterval(() => {
    count += step;
    if (count >= target) {
      count = target;
      clearInterval(counter);
    }

    let display;
    if (count >= 1000) {
      display = (count / 1000).toFixed(1) + "K+";
    } else {
      display = count + "+";
    }

    document.getElementById(id).textContent = display;
  }, speed);
}

// Animate each counter
animateCounter("counter1", 2300, 20, 15); // 2.3K+
animateCounter("counter2", 600, 5, 15); // 600+
animateCounter("counter3", 27, 1, 80); // 27+
animateCounter("counter4", 3, 1, 300); // 3+
animateCounter("counter5", 20, 1, 120); // 20+
animateCounter("counter6", 5000, 40, 10); // 5K+
