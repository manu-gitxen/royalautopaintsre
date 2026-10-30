const https = require('https');
const fs = require('fs');

https.get('https://www.royalautopaints.com/about', { headers: { 'User-Agent': 'Mozilla/5.0' } }, (res) => {
    let html = '';
    res.on('data', chunk => html += chunk);
    res.on('end', () => {
        // Strip tags or extract main content
        fs.writeFileSync('d:/manu/projects/royalautopaintsre/scratch/live_about_raw.html', html, 'utf8');
        
        // Also extract text
        const text = html.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '')
                         .replace(/<style\b[^<]*(?:(?!<\/style>)<[^<]*)*<\/style>/gi, '')
                         .replace(/<[^>]+>/g, '\n')
                         .split('\n')
                         .map(s => s.trim())
                         .filter(s => s.length > 0)
                         .join('\n');
        fs.writeFileSync('d:/manu/projects/royalautopaintsre/scratch/live_about_text.txt', text, 'utf8');
        console.log('Successfully saved live about raw & text. Length:', html.length);
    });
}).on('error', err => {
    console.error('Error fetching live about:', err);
});
