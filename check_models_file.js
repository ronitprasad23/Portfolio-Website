import https from 'https';
import fs from 'fs';

const API_KEY = "AIzaSyAre2NSptHbKG0bm7WuuHNLuSA3iRQ85Eg";
const url = `https://generativelanguage.googleapis.com/v1beta/models?key=${API_KEY}`;

https.get(url, (res) => {
    let data = '';
    res.on('data', (chunk) => {
        data += chunk;
    });
    res.on('end', () => {
        try {
            const json = JSON.parse(data);
            if (json.models) {
                const names = json.models.map(m => m.name).join('\n');
                fs.writeFileSync('available_models.txt', names);
                console.log("Models written to available_models.txt");
            } else {
                console.log("No models found:", json);
            }
        } catch (e) {
            console.error("Error parsing JSON:", e.message);
        }
    });
}).on('error', (err) => {
    console.error("Error:", err.message);
});
