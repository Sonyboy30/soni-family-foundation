document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({ behavior: "smooth" });
  });
});

// Form Handling
document.getElementById("contact-form").addEventListener("submit", function(event) {
  event.preventDefault();
  document.getElementById("form-status").innerText = "Thank you! Your message has been sent.";
  this.submit();
});

// Newsletter Form
document.getElementById("newsletter-form").addEventListener("submit", function(event) {
  event.preventDefault();
  alert("Thank you for subscribing!");
  this.reset();
});

// Load Blog Posts Dynamically
const blogPosts = [
  { title: "Scholarship Program Launched", desc: "We are excited to announce new scholarships for students.", link: "#" },
  { title: "Community Health Fair Success", desc: "Our health fair provided free screenings to 500+ people.", link: "#" },
];

document.getElementById("blog-posts").innerHTML = blogPosts.map(post => `
  <div class="post">
    <h3>${post.title}</h3>
    <p>${post.desc}</p>
    <a href="${post.link}" class="read-more">Read More</a>
  </div>
`).join('');
