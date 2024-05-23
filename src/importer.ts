import Mastodon from 'mastodon-api'
const fs = require('node:fs');
require('dotenv').config();

const M = new Mastodon({
  access_token: process.env.Token,
  timeout_ms: 60*1000,  // optional HTTP request timeout to apply to all requests.
  api_url: 'https://mastodon.social/api/v1/', // optional, defaults to https://mastodon.social/api/v1/
});

M.post('media', { file: fs.createReadStream('path/to/image.png') }).then(resp => {
    const id = resp.data.id;
    M.post('statuses', { status: '#selfie', media_ids: [id] })
  });