const auth0 = require('auth0');

function loginWithGoogle() {
  const redirectUrl = 'https://webcode.intecmedia.es/PROYECTO-DAW-2023_24/src/app/home/html/';
  const responseType = 'code';
  const connection = 'google-oauth2';

  const auth0Domain = 'dev-nt6cgad86rkuabgq.us.auth0.com';
  const clientId = '15dHTMDSUZSYnvvxipcxTq70ccemkgC2';
  const authorizeUrl = `https://${auth0Domain}/authorize?response_type=${responseType}&client_id=${clientId}&connection=${connection}&redirect_uri=${redirectUrl}`;

  window.location.href = authorizeUrl;
}

function loginWithGitHub() {
    const redirectUrl = 'https://webcode.intecmedia.es/PROYECTO-DAW-2023_24/src/app/home/html/';
    const responseType = 'code';
    const connection = 'github';

    const auth0Domain = 'dev-nt6cgad86rkuabgq.us.auth0.com';
    const clientId = '15dHTMDSUZSYnvvxipcxTq70ccemkgC2';
    const authorizeUrl = `https://${auth0Domain}/authorize?response_type=${responseType}&client_id=${clientId}&connection=${connection}&redirect_uri=${redirectUrl}`;

    window.location.href = authorizeUrl;
}

  