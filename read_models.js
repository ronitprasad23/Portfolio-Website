import fs from 'fs';

try {
    // Read file with utf-8 or utf16le if possible
    // JSON.parse handles string
    const content = fs.readFileSync('models.json', 'utf8');
    // If it's empty or garbage, we might fail
    const data = JSON.parse(content);
    if (data.models) {
        console.log("Found models:");
        data.models.forEach(m => console.log(m.name));
    } else {
        console.log("No models property found:", data);
    }
} catch (e) {
    console.error("Error:", e.message);
    // Try reading as buffer and converting
    try {
        const buf = fs.readFileSync('models.json');
        const str = buf.toString('utf16le'); // Try utf16le
        const data = JSON.parse(str);
        if (data.models) {
            console.log("Found models (utf16le):");
            data.models.forEach(m => console.log(m.name));
        }
    } catch (e2) {
        console.error("Error 2:", e2.message);
    }
}
