// Scroll animation trigger using Intersection Observer
const observer = new IntersectionObserver(
(entries) => {
    entries.forEach(entry => {
    if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target); // only once
    }
    });
},
{
    threshold: 0.1,
}
);

// Apply to all animated elements
document.querySelectorAll('.animate-on-scroll').forEach(el => {
observer.observe(el);
});
