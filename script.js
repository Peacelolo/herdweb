
let slideIndex = 0;
const slides = document.querySelectorAll(".slide-text");

function showSlides() {
    slides.forEach(slide => slide.classList.remove("active"));
    slideIndex = (slideIndex + 1) % slides.length;
    slides[slideIndex].classList.add("active");
}

setInterval(showSlides, 3000);

// JavaScript to toggle the menu visibility
document.getElementById('hamburger-icon').addEventListener('click', function() {
    var navLinks = document.getElementById('nav-links');
    navLinks.classList.toggle('active');
});

document.addEventListener("DOMContentLoaded", function () {
    let slides = document.querySelectorAll(".slide-text");
    let currentIndex = 0;

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.style.display = i === index ? "block" : "none";
        });
    }

    function nextSlide() {
        currentIndex = (currentIndex + 1) % slides.length;
        showSlide(currentIndex);
    }

    showSlide(currentIndex);
    setInterval(nextSlide, 3000); // Change text every 3 seconds
});
/* Scroll Event for Page Flip Effect */
window.addEventListener('scroll', function() {
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => { const position = section.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
      if (position < windowHeight - 100) {
        section.classList.add('visible');
      } else {
        section.classList.remove('visible');
      }
    });
  });
 /*dashboard */
 document.addEventListener("DOMContentLoaded", function () {
  // Example data for dynamic population
  const livestockCount = 35; // Replace with actual data from your database or API
  const healthAlerts = 2; // Replace with actual data (e.g., based on livestock health data)

  // Update the "Livestock" card with the number of registered livestock
  document.getElementById("livestockCount").innerText = `${livestockCount} Registered`;

  // Update the "Health" card with the number of health alerts
  document.getElementById("healthAlerts").innerText = `${healthAlerts} animals need attention`;

  // You can fetch this data from an API or database in a real app
});
// Add event listeners to sidebar items
const sidebarLinks = document.querySelectorAll('#sidebar .nav-link');
sidebarLinks.forEach(link => {
    link.addEventListener('click', function() {
        // Remove active class from all links
        sidebarLinks.forEach(link => link.classList.remove('active'));
        // Add active class to the clicked link
        this.classList.add('active');
        
        // Optionally, update the main content based on clicked link
        updateDashboardContent(this);
    });
});

// Function to update the content based on the sidebar click
function updateDashboardContent(link) {
    const contentArea = document.querySelector('.flex-grow-1'); // Your main content area
    if (link.textContent === 'Profile') {
        contentArea.innerHTML = "<h3>Your Profile Information</h3>";
        // Add profile content here
    } else if (link.textContent === 'Livestock') {
        contentArea.innerHTML = "<h3>Livestock Details</h3>";
        // Add livestock details here
    } else if (link.textContent === 'Track') {
        contentArea.innerHTML = "<h3>Track Livestock</h3>";
        // Add tracking content here
    } else if (link.textContent === 'Health') {
        contentArea.innerHTML = "<h3>Health Monitoring</h3>";
        // Add health content here
    }
}
// Add click event listeners to dashboard cards
const dashboardCards = document.querySelectorAll('.dashboard-card');
dashboardCards.forEach(card => {
    card.addEventListener('click', function() {
        const cardTitle = this.querySelector('h5').textContent; // Get card title (e.g., Profile, Health)
        
        // Change content based on clicked card
        const contentArea = document.querySelector('.flex-grow-1');
        if (cardTitle === "Profile") {
            contentArea.innerHTML = "<h3>Your Profile Information</h3>";
        } else if (cardTitle === "Livestock") {
            contentArea.innerHTML = "<h3>Livestock Details</h3>";
        } else if (cardTitle === "Track") {
            contentArea.innerHTML = "<h3>Track Livestock</h3>";
        } else if (cardTitle === "Health") {
            contentArea.innerHTML = "<h3>Health Monitoring</h3>";
        }
    });
});
document.addEventListener("DOMContentLoaded", function() {
  const healthAlerts = 2; // Replace with actual data

  if (healthAlerts > 0) {
      const alertBox = document.createElement("div");
      alertBox.classList.add("alert", "alert-warning", "d-flex", "align-items-center");
      alertBox.innerHTML = `<i class="bi bi-exclamation-triangle-fill me-2"></i><strong>${healthAlerts}</strong> animals need attention. <button class="btn btn-sm btn-link ms-auto" onclick="dismissAlert()">Dismiss</button>`;

      document.body.appendChild(alertBox);
  }
});

function dismissAlert() {
  document.querySelector('.alert').remove();
}
