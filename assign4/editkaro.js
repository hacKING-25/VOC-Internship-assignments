function filterVideos(category) {
    const cards = document.querySelectorAll('.video-card');
    const buttons = document.querySelectorAll('.filter-btn');

    // Update active button status
    buttons.forEach(btn => {
        btn.classList.remove('active');
        if(btn.innerText.toLowerCase().includes(category)) btn.classList.add('active');
    });

    // Show/Hide cards
    cards.forEach(card => {
        if (category === 'all' || card.classList.contains(category)) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
}