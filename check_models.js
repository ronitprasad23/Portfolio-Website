import https from 'https';

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
                const geminis = json.models.filter(m => m.name.includes("gemini"));
                if (geminis.length > 0) {
                    geminis.forEach(m => console.log(m.name));
                } else {
                    console.log("NO GEMINI MODELS FOUND. All models:", json.models.map(m => m.name));
                }
            } else {
                console.log("No models property found. Response:", JSON.stringify(json));
            }
        } catch (e) {
            console.error("Error parsing JSON:", e.message);
        }
    });
}).on('error', (err) => {
    console.error("Error:", err.message);
});
