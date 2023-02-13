const fs = require('fs');

fs.readFile('notikumi.json', 'utf8', (err, data) => {
    if (err) throw err;
    const notikumi = JSON.parse(data);
    const currentDate = new Date();
    for (let i = 0; i < notikumi.length; i++) {
        const notikums = notikumi[i];
        const notikumsDate = new Date(notikums.kadnotiks);
        if (currentDate.toLocaleDateString('default', { month: '2-digit', day: '2-digit' }) === notikumsDate.toLocaleDateString('default', { month: '2-digit', day: '2-digit' })) {
            console.log(currentDate, notikums, `${notikums.text}`);
            break;
        }
    }
});
