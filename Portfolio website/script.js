// Mobile Menu Toggle
function toggleMenu() {
    document.getElementById("nav-links").classList.toggle("show");
  }
  
  // Smooth Scrolling for Navigation Links
  document.querySelectorAll('nav ul li a').forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href').substring(1);
      document.getElementById(targetId).scrollIntoView({
        behavior: 'smooth'
      });
      // Close mobile menu if open
      if(document.getElementById("nav-links").classList.contains("show")){
        document.getElementById("nav-links").classList.remove("show");
      }
    });
  });
  
  // Back to Top Button Functionality
  const backToTop = document.getElementById("backToTop");
  window.addEventListener("scroll", function() {
    if (window.pageYOffset > 300) {
      backToTop.style.display = "block";
    } else {
      backToTop.style.display = "none";
    }
  });
  backToTop.addEventListener("click", function() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
  
  // Dynamic Role Text Animation
  const roles = ["Creative Developer", "UI/UX Designer", "Front-End Specialist"];
  let roleIndex = 0;
  const roleElement = document.getElementById("role");
  function changeRole() {
    roleIndex = (roleIndex + 1) % roles.length;
    roleElement.textContent = roles[roleIndex];
  }
  setInterval(changeRole, 3000);
  