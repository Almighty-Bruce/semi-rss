const axios = require('axios');
const fs = require('fs');
const path = require('path');

async function fetchRSS() {
  try {
    const res = await axios.get('https://www.semi.org/en/news-resources/press/semi/rss.xml', {
      headers: {
        'User-Agent': 'Mozilla/5.0',
        'Accept': 'application/rss+xml,application/xml;q=0.9,*/*;q=0.8'
      },
      responseType: 'text'
    });

    fs.mkdirSync('rss', { recursive: true });
    fs.writeFileSync(path.join('rss', 'rss.xml'), res.data, 'utf-8');
    console.log('RSS saved.');
  } catch (err) {
    console.error('Failed to fetch RSS:', err.message);
    process.exit(1);
  }
}

fetchRSS();
