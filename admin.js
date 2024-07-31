document.addEventListener('DOMContentLoaded', () => {
    const linkForm = document.getElementById('linkForm');
    const linksList = document.getElementById('linksList');

    linkForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const linkType = document.getElementById('linkType').value;
        const unlockLink = document.getElementById('unlockLink').value;
        createLink(linkType, unlockLink);
    });

    function createLink(linkType, unlockLink) {
        // Create a new link entry
        const linkEntry = document.createElement('li');
        linkEntry.innerHTML = `${linkType}: <a href="${unlockLink}" target="_blank">${unlockLink}</a>`;
        linksList.appendChild(linkEntry);

        // Simulate link creation (for demo purposes only)
        // You can't create new HTML files on GitHub Pages dynamically
        console.log(`Simulated link creation: ${unlockLink}`);
    }
});
