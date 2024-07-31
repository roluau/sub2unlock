const fs = require('fs');
const path = require('path');

const links = [
    { name: 'link-1', content: 'This is link 1 content.' },
    { name: 'link-2', content: 'This is link 2 content.' },
    // Add more links as needed
];

const templatePath = path.join(__dirname, 'link-template.html');

links.forEach(link => {
    const newPath = path.join(__dirname, 'generated', `${link.name}.html`);
    fs.readFile(templatePath, 'utf8', (err, template) => {
        if (err) throw err;
        const newContent = template.replace('<p>This content is unlocked through the "sub2unlock" process.</p>', `<p>${link.content}</p>`);
        fs.writeFile(newPath, newContent, 'utf8', (err) => {
            if (err) throw err;
            console.log(`Generated ${newPath}`);
        });
    });
});
