document.addEventListener('DOMContentLoaded', () => {
  const yearText = document.querySelector('.footer p');
  if (yearText) {
    const currentYear = new Date().getFullYear();
    yearText.textContent = `© ${currentYear} MO7A-CH8B-VOTE`;
  }
});
