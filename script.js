// Select all cards and their corresponding content sections

const cards = document.querySelectorAll('.pt');
const contents = {
    'why-heart': document.querySelector('.wellnesstracking'),
    'why-fitness': document.querySelector('.fitnessgoals'),
    'why-weight': document.querySelector('.weightmngmnt'),
    'why-health': document.querySelector('.healthassm')
};

// Function to show the default content on page load
function showDefaultContent() {
    // Show the "Wellness Tracking" content by default
    const defaultCard = document.querySelector('#why-heart');
    const defaultContent = contents['why-heart'];

    if (defaultCard && defaultContent) {
        defaultCard.classList.add('active');
        defaultContent.style.display = 'block';
    }
}

// Function to handle card clicks
cards.forEach(card => {
    card.addEventListener('click', () => {
        // Hide all content sections
        Object.values(contents).forEach(content => {
            if (content) content.style.display = 'none';
        });

        // Remove the 'active' class from all cards
        cards.forEach(c => c.classList.remove('active'));

        // Show the content of the clicked card and add 'active' class
        const contentToShow = contents[card.id];
        if (contentToShow) contentToShow.style.display = 'block';
        card.classList.add('active');
    });
});

// Call the function to show default content when the page loads
showDefaultContent();
