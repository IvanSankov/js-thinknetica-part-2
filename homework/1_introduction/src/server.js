require('@babel/register')();

const express = require('express');
const app = express();

const render = require('./render').default;

app.get('/', (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html lang="en">
      <head>
          <meta charset="UTF-8">
          <title>First App</title>
      </head>
      <body>
      <div id="root">${render()}</div>
      </body>
    </html>
    `);
});

app.listen(3000, () => console.log('Server is ready 3000'));