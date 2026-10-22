// Contact form submit handler
document.addEventListener('DOMContentLoaded', function () {
  const contactForm = document.querySelector('.contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
      e.preventDefault();
      // TODO: hook this up to your form backend / email service
    });
  }
});
