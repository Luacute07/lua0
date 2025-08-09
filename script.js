document.addEventListener('DOMContentLoaded', () => {

  // --- Tab Navigation Logic ---
  const tabLinks = document.querySelectorAll('.tab-link');
  const tabContents = document.querySelectorAll('.tab-content');

  tabLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();

      // 1. Remove 'active' class from all links and content
      tabLinks.forEach(l => l.classList.remove('active'));
      tabContents.forEach(c => c.classList.remove('active'));

      // 2. Add 'active' class to the clicked link
      link.classList.add('active');

      // 3. Get the target tab ID from the data-tab attribute
      const tabId = link.getAttribute('data-tab');
      
      // 4. Show the corresponding content section
      const activeTabContent = document.getElementById(tabId);
      if (activeTabContent) {
          activeTabContent.classList.add('active');
      }
    });
  });

  // --- Simple Contact Form Handler ---
  const contactForm = document.getElementById('contactForm');
  const formStatus = document.getElementById('form-status');

  if (contactForm) {
    contactForm.addEventListener('submit', e => {
      e.preventDefault(); // Prevent the default form submission

      // Provide feedback to the user
      formStatus.textContent = "Cảm ơn bạn đã gửi liên hệ!";
      formStatus.style.color = "lightgreen";

      // Reset the form fields after a short delay
      setTimeout(() => {
        contactForm.reset();
        formStatus.textContent = ""; 
      }, 3000);
    });
  }

});