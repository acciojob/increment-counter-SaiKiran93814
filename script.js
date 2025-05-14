//your JS code here. If required.
 const counterElement = document.getElementById("counter");
    const incrementBtn = document.getElementById("incrementBtn");

    incrementBtn.addEventListener("click", function () {
      const currentValue = parseInt(counterElement.textContent);
      alert(`Current value: ${currentValue}`);
      counterElement.textContent = currentValue + 1;