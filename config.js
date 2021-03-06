var join = require('path').join;

var src = 'src';
var build = 'build';
var config = 'config';
var appcache = 'manifest.appcache';

var dirs = {
  cwd: __dirname,
  src: join(__dirname, src),
  out: join(__dirname, build),
  js: 'js',
  css: 'css',
  html: 'html',
  assets: 'assets',
  config: join(__dirname),
  img: 'img',
  pages: 'pages',
  gulp: 'gulp',
  favicon: 'favicon.ico',
};

var socialAccounts = [
  {
      link: 'http://blog.magicshifter.net/'
    , img: '/img/social-icons/soupng'
    , alt: 'soup'
    , title: 'repost Magicshifter on soup'
    , visible: true
  },
  {
      link: 'https://www.flickr.com/photos/wizard23/sets/72157632220498947/detail/'
    , img: '/img/social-icons/flickr.png'
    , alt: 'MagicShifter picture blog on Flickr'
    , title: 'MagicShifter picture blog on Flickr'
    , visible: true
  },
  {
      link: 'http://www.reddit.com/r/MagicShifter/'
    , img: '/img/social-icons/reddit.png'
    , alt: 'MagicShifter Forum on Reddit'
    , title: 'MagicShifter Forum on Reddit'
    , visible: true
  },
  {
      link: 'https://github.com/magicshifter'
    , img: '/img/social-icons/github.png'
    , alt: 'Our Github Organisation'
    , title: 'We <3 the Octocat'
    , visible: true
  },
  {
      link: 'https://twitter.com/magicshifter'
    , img: '/img/social-icons/twitter.png'
    , alt: 'twitter'
    , title: 'follow Magicshifter on twitter'
    , visible: true
  },
  {
      link: 'https://www.facebook.com/magicshifter/'
    , img: '/img/social-icons/facebook.png'
    , alt: 'facebook'
    , title: 'like magicshifter on facebook'
    , visible: true
  },
  {
      link: 'https://flattr.com/submit/auto?user_id=wizard23&url=http%3A%2F%2Fmagicshifter.net'
    , img: '/img/social-icons/flattr.png'
    , alt: 'Flattr this'
    , title: 'Flattr this'
    , visible: true
  },
];

var env = process.env.NODE_ENV || 'development';

var menuItems = [
  {href: '/', text: 'about'},
];

var server = {
  // Files to exclude from static serving,
  // relative to out directory
  files: '!(server.js|config.js)',
  dirs: {
    img: '/' + dirs.img + '/',
    js: '/' + dirs.js + '/',
    css: '/' + dirs.css + '/',
  },
};

module.exports = {
  CNAME: env === 'development' ? 'exaple' : 'exaple.net',
  port: 1337,
  pages: '/ /index.html',
  pageItems: {
    '/': '/index.html',
  },
  menuItems: menuItems,
  env: env,
  dirs: dirs,
  files: {
    css: join(dirs.src, '**', dirs.css, '@(main.styl|*.main.styl)'),
    js: {
      index:  dirs.js,
    },
    html: [
      {
        src: join(dirs.src, dirs.html, dirs.pages, '*.jade'),
        out: dirs.out,
      },
    ],
    copy: '!(*.xcf|*.psd|*.ai)',
    server: 'server.js',
    compress: '!(*.ico|*.gz)',
  },
  config: {
    babelrc: '.babelrc',
    jaderc: '.jadelintrc',
    jscsrc: '.jscsrc',
    stylintrc: '.stylintrc',
  },
  watch: {
    src: src,
    appcache: appcache,
    config: config,
  },
  socialAccounts: socialAccounts,
  server: server,
  copy: [
    {
      src: join(dirs.src, dirs.assets, '**'),
      out: join(dirs.out),
    },
  ],
  locals: {
    env: env,
    socialAccounts: socialAccounts,
    menuItems: menuItems,
    dirs: server.dirs,
  },
};
