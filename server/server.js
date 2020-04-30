import App from '../src/App';

import express from 'express';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import {StaticRouter} from 'react-router';

import fs from 'fs';
import path from 'path';

const app = express();

const router = express.Router();

const staticFiles = [
  '/static/*',
  '/logo192.png',
  '/favicon-32x32.png',
  '/favicon-16x16.png',
  '/apple-touch-icon.png',
  '/logo.svg',
  '/site.webmanifest',
  '/asset-manifest.json',
  '/favicon.ico',
  '/manifest.json',
  '/sitemap.xml',
  '/thumnail.png',
  '/icon.png',
  '/maps/*',
  '/flags/*',
];

staticFiles.forEach((file) => {
  app.get(file, (req, res) => {
    const filePath = path.join(__dirname, '../build', req.url);
    res.sendFile(filePath);
  });
});

const Serverrenderer = (req, res, next) => {
  const context = {};
  fs.readFile(path.resolve('./build/index.html'), 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      return res.status(500).send('An error occurred');
    }
    return res.send(
      data.replace(
        '<div id="root"></div>',
        `<div id="root">${ReactDOMServer.renderToString(
          <StaticRouter location={req.url} context={context}>
            <App />
          </StaticRouter>
        )}</div>`
      )
    );
  });
};
router.use('/*', Serverrenderer);

router.use(
  express.static(path.resolve(__dirname, '..', 'build'), {maxAge: '30d'})
);

router.use(express.static('public'));
// tell the app to use the above rules
app.use(router);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`SSR running on port ${PORT}`);
});
