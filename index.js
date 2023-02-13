const fs = require('fs');

fs.readFile('vardadienas.json', 'utf8', (err, data) => {
    if (err) throw err;
    const vardadienas = JSON.parse(data);
    const currentDate = new Date();
    for (let i = 0; i < vardadienas.length; i++) {
        const vardadiena = vardadienas[i];
        const vardadienaDate = new Date(vardadiena.date);
        if (currentDate.toLocaleDateString('default', { month: '2-digit', day: '2-digit' }) === vardadienaDate.toLocaleDateString('default', { month: '2-digit', day: '2-digit' })) {
            console.log(`Šodien vārdadiena ir: ${vardadiena.name}`);
            break;
        }
    }
});