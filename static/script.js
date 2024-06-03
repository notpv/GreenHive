const numbers = document.querySelectorAll('.number');
const incrementAmount = 10; // Change this value to adjust the increment per scroll

window.addEventListener('scroll', () => {
  const windowScroll = window.scrollY;

  numbers.forEach(number => {
    const target = parseInt(number.dataset.target, 10);
    const current = parseInt(number.textContent, 10);
    const distance = target - current;

    // Limit the increment to a specific amount
    const increment = Math.min(incrementAmount, Math.abs(distance));

    // Update the number based on direction (up or down)
    number.textContent = distance > 0 ? current + increment : current - increment;
  });
});
