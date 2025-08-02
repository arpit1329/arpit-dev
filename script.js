  
// Typewriter effect
const text = "Arpit Kumawat | Web Developer | Tech Enthusiast";
let i = 0;
function typeWriter() {
  if (i < text.length) {
    document.getElementById("typewriter").innerHTML += text.charAt(i);
    i++;
    setTimeout(typeWriter, 100);
  }
}
typeWriter();

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Scroll reveal
function revealOnScroll() {
  const reveals = document.querySelectorAll(".reveal");
  reveals.forEach(reveal => {
    const windowHeight = window.innerHeight;
    const revealTop = reveal.getBoundingClientRect().top;
    const revealPoint = 100;
    if (revealTop < windowHeight - revealPoint) {
      reveal.classList.add("active");
    } else {
      reveal.classList.remove("active");
    }
  });
}
