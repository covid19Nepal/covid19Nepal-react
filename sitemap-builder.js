require('@babel/register')({
  extends: './.babelrc',
});

const Sitemap = require('react-router-sitemap').default;
const routes = require('./src/router').default({});

new Sitemap(routes)
  .build('http://nepalcovid19.org')
  .save('./public/sitemap.xml');
