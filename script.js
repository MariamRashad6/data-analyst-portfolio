const observer = new IntersectionObserver(
(entries) => {
    entries.forEach(entry => {
    if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        
        // Reset the animation by applying 'animation: none' and immediately trigger the animation again
        entry.target.style.animation = 'none';
        entry.target.offsetHeight; // trigger reflow to reset the animation
        entry.target.style.animation = ''; // reapply the animation
    }
    });
},
{
    threshold: 0.1, // Trigger when 10% of the element is visible
}
);

document.querySelectorAll('.animate-on-scroll').forEach(el => {
observer.observe(el);
});
