const auth0 = require('auth0');

function loginWithGoogle() {
  const redirectUrl = 'http://localhost:5500/src/app/home/html/index.html';
  const responseType = 'code';
  const connection = 'google-oauth2';

  const auth0Domain = 'dev-nt6cgad86rkuabgq.us.auth0.com';
  const clientId = '15dHTMDSUZSYnvvxipcxTq70ccemkgC2';
  const authorizeUrl = `https://${auth0Domain}/authorize?response_type=${responseType}&client_id=${clientId}&connection=${connection}&redirect_uri=${redirectUrl}`;

  window.location.href = authorizeUrl;
}

function loginWithGitHub() {
  const redirectUrl = 'http://localhost:5500/src/app/home/html/index.html';
  const responseType = 'code';
  const connection = 'github';

  const auth0Domain = 'dev-nt6cgad86rkuabgq.us.auth0.com';
  const clientId = '15dHTMDSUZSYnvvxipcxTq70ccemkgC2';
  const authorizeUrl = `https://${auth0Domain}/authorize?response_type=${responseType}&client_id=${clientId}&connection=${connection}&redirect_uri=${redirectUrl}`;

  const popupWindow = window.open(authorizeUrl, 'GitHubAuthentication', 'width=600,height=600');
}
