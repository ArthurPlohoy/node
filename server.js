//Простой веб-сервер node.js

const http = require('http');
const html = `
              <!document>
                  <html>
                      <head>
                          <meta charset="utf-8">
                          <title>Node.js</title>
                          <link rel="stylesheet" href="app.css">
                      </head>
                      <body>
                          <h1>Node.js</h1>
                          <button>Нажать</button>
                          <script src="app.js"></script>
                      </body>
                  </html>
              `;
const css = `
              body {
                margin: 0;
                padding: 0;
                text-align: center;
              }
              h1 {
                background-color: #00FA9A;
                color: white;
                padding: .5em;
                font-family: 'Consolas'
              }
              `;
const js = `
              const button = document.querySelector('button');
              button.addEventListener('click', event => alert('Node.js!!!'));
              `;

http.createServer((req, res) => {
  switch (req.url) {
    case '/':
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.end(html);

    case '/app.css':
      res.writeHead(200, { 'Content-Type': 'text/css' });
      res.end(css);

    case '/app.js':
      res.writeHead(200, { 'Content-Type': 'text/javascript' });
      res.end(js);

    default:
      res.writeHead(404, { 'Content-Type': 'text/plain' });
      res.end('404');

  }

}).listen(3000, () => console.log('Server work!!!'));
