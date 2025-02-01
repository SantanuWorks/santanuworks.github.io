// Hamburger Icon for Top-Down Sidebar
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

// Close Sidebar When a Link is Clicked (for mobile)
navLinks.addEventListener('click', () => {
  if (navLinks.classList.contains('active')) {
    navLinks.classList.remove('active');
  }
});

// Dark Mode Toggle
const darkModeToggle = document.getElementById('dark-mode-toggle');
const body = document.body;

darkModeToggle.addEventListener('click', () => {
  body.classList.toggle('dark-mode');
  const isDarkMode = body.classList.contains('dark-mode');
  darkModeToggle.innerHTML = isDarkMode ? '<i class="fas fa-sun"></i>' : '<i class="fas fa-moon"></i>';
  localStorage.setItem('darkMode', isDarkMode);
});

// Check for saved preference
if (localStorage.getItem('darkMode') === 'true') {
  body.classList.add('dark-mode');
  darkModeToggle.innerHTML = '<i class="fas fa-sun"></i>';
}

// Scroll Animations
const animateElements = document.querySelectorAll('[class*="animate__"]');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = 1;
      entry.target.style.transform = 'translate(0)';
    }
  });
}, { threshold: 0.1 });

animateElements.forEach(element => {
  element.style.opacity = 0;
  observer.observe(element);
});


// Smooth Scroll for Nav Links
navLinks = document.querySelectorAll('.nav-links a');

navLinks.forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault(); // Prevent default anchor behavior

    // Get the target section ID from the href attribute
    const targetId = link.getAttribute('href');
    const targetSection = document.querySelector(targetId);

    if (targetSection) {
      // Scroll to the target section smoothly
      targetSection.scrollIntoView({ behavior: 'smooth' });

      // Close the mobile sidebar after clicking a link
      const navLinksContainer = document.getElementById('nav-links');
      if (navLinksContainer.classList.contains('active')) {
        navLinksContainer.classList.remove('active');
      }
    }
  });
});


// Timeline Animation
const timelineItems = document.querySelectorAll('.timeline-item');

function checkTimelineVisibility() {
  timelineItems.forEach((item) => {
    const itemTop = item.getBoundingClientRect().top;
    const itemBottom = item.getBoundingClientRect().bottom;

    if (itemTop < window.innerHeight && itemBottom > 0) {
      item.classList.add('visible');
    }
  });
}

// Trigger animation on scroll
window.addEventListener('scroll', checkTimelineVisibility);

// Initial check on page load
checkTimelineVisibility();