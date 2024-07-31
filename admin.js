// This script will only manage local admin functionality and links
document.addEventListener('DOMContentLoaded', () => {
    const linkForm = document.getElementById('linkForm');
    const linksList = document.getElementById('linksList');

    linkForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const linkType = document.getElementById('linkType').value;
        const unlockLink = document.getElementById('unlockLink').value;
        addLink(linkType, unlockLink);
    });

    function addLink(linkType, unlockLink) {
        const li = document.createElement('li');
        li.textContent = `${linkType}: ${unlockLink}`;
        linksList.appendChild(li);
    }
});
