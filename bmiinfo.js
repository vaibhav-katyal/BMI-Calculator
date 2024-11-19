// Select the sections
const overweightSection = document.querySelector('.overweight');
const underweightSection = document.querySelector('.underweight');

// Define the callback function for IntersectionObserver
const animateOnScroll = (entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate');
            observer.unobserve(entry.target); // Optional: stop observing once animated
        }
    });
};

// Create an IntersectionObserver
const observerOptions = {
    root: null, // Observes the viewport
    threshold: 0.1 // Trigger when 10% of the element is visible
};
const observer = new IntersectionObserver(animateOnScroll, observerOptions);

// Observe the sections
observer.observe(overweightSection);
observer.observe(underweightSection);

// Add an 'animate' class to trigger animations
document.styleSheets[0].insertRule(`
    .overweight.animate {
        animation: overweight-anim 2s ease forwards;
    }
`, document.styleSheets[0].cssRules.length);

document.styleSheets[0].insertRule(`
    .underweight.animate {
        animation: underweight-anim 2s ease forwards;
    }
`, document.styleSheets[0].cssRules.length);
