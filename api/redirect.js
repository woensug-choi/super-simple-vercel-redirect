// api/redirect.js

module.exports = (req, res) => {
    res.writeHead(301, { Location: 'https://chatgee.notion.site/86a629fdccf64af48a23f1408d7f519e' });
    res.end();
  };