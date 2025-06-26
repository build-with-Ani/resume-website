console.log("JS is working");

// 🌙 Dark Mode Toggle
const toggleBtn = document.getElementById('darkModeToggle');
const body = document.body;

toggleBtn.addEventListener('click', () => {
  body.classList.toggle('dark-mode');
  if (body.classList.contains('dark-mode')) {
    toggleBtn.textContent = '☀️ Light Mode';
  } else {
    toggleBtn.textContent = '🌙 Dark Mode';
  }
});

// 🔄 Active Nav Link on Scroll
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.navbar ul li a');

window.addEventListener('scroll', () => {
  let scrollY = window.pageYOffset;
  let currentSectionId = '';

  sections.forEach(current => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 65;
    const sectionId = current.getAttribute('id');

    if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
      currentSectionId = sectionId;
    }
  });

  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === '#' + currentSectionId) {
      link.classList.add('active');
    }
  });

  // 🔝 Show/Hide Scroll-to-Top Button
  const scrollTopBtn = document.getElementById("scrollTopBtn");
  if (scrollY > 100) {
    scrollTopBtn.style.display = "block";
  } else {
    scrollTopBtn.style.display = "none";
  }
});

// 🔝 Scroll to top when button clicked
function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}
document.getElementById("scrollTopBtn").addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
