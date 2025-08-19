// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });

    // Auto close navbar on mobile after clicking link
    document.querySelector('.nav-links').classList.remove('active');
  });
});
// Scroll Animation for Project Cards
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = 1;
      entry.target.style.transform = "translateY(0)";
      entry.target.style.transition = "all 0.6s ease-out";
    }
  });
}, {
  threshold: 0.2
});

document.querySelectorAll('.project-card').forEach(card => {
  observer.observe(card);
});

// Hamburger Toggle
const hamburger = document.getElementById('hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});
window.addEventListener("load", function () {
  const preloader = document.getElementById("preloader");
  preloader.style.opacity = "0";
  preloader.style.transition = "opacity 0.5s ease";
  setTimeout(() => {
    preloader.style.display = "none";
  }, 500);
});

// Google Sheets Form Submission
const scriptURL =
        "https://script.google.com/macros/s/AKfycbwk7RtwE7c1qcXMF5EwQdgZkHIwNaox-UdZLy2gvsin8JX6julPptHBrNzwDWe5bsWETg/exec";
      const form = document.forms["submit-to-google-sheet"];
      const msg = document.getElementById("msg");
      form.addEventListener("submit", (e) => {
        e.preventDefault();
        fetch(scriptURL, { method: "POST", body: new FormData(form) }).then(
          (response) => console.log("Success!", response)
        );
        msg.innerHTML = "Message has been sent succesfully";
        setTimeout(function () {
          msg.innerHTML = "";
        }, 5000);
        form
          .reset()

          .catch((error) => console.error("Error!", error.message));
      });
