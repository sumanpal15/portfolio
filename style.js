// Tab switching for Qualifications section
const tabs = document.querySelectorAll(".tab");
const tabContents = document.querySelectorAll(".tab-content");
// Initialize first tab as active and show only education
tabs.forEach((tab, idx) => {
  if (idx === 0) {
    tab.classList.add("active");
    tabContents[idx].classList.add("active");
  } else {
    tab.classList.remove("active");
    tabContents[idx].classList.remove("active");
  }
});



tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    // Remove active classes
    tabs.forEach((t) => t.classList.remove("active"));
    tabContents.forEach((content) => content.classList.remove("active"));

    // Add active to clicked tab and corresponding content
    tab.classList.add("active");
    const target = tab.getAttribute("data-tab");
    document.getElementById(target).classList.add("active");
  });
});

// Optional: Smooth scroll for nav links
document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const href = link.getAttribute('href');
    document.querySelector(href).scrollIntoView({ behavior: 'smooth' });

    // Highlight active nav link
    document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
    link.classList.add('active');
  });
});

// Contact form submission (just preventing actual submission here)
const contactForm = document.getElementById("contact-form");
contactForm.addEventListener("submit", (e) => {
  e.preventDefault();
  alert("Thank you for your message! I'll get back to you soon.");
  contactForm.reset();
});
