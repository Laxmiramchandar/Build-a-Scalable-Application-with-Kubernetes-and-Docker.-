const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
      <title>Scalable Web App</title>
      <style>
        body {
          margin: 0;
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          background: linear-gradient(120deg, #74ebd5, #9face6);
          color: #fff;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          height: 100vh;
          text-align: center;
        }
        h1 {
          font-size: 3rem;
          margin-bottom: 0.5em;
          text-shadow: 2px 2px #00000030;
        }
        p {
          font-size: 1.25rem;
          max-width: 600px;
        }
        .container {
          background: rgba(0, 0, 0, 0.3);
          padding: 2em 3em;
          border-radius: 20px;
          box-shadow: 0 0 20px rgba(0,0,0,0.2);
        }
        .badge {
          margin-top: 20px;
          padding: 0.5em 1em;
          border-radius: 30px;
          background: #ffffff22;
          font-weight: bold;
          border: 2px dashed #fff;
        }
      </style>
    </head>
    <body>
      <div class="container">
        <h1>🚀 Scalable Kubernetes App</h1>
        <p>Welcome to your production-grade, scalable application deployed on a Kubernetes cluster using Docker, Node.js, and Express!</p>
        <div class="badge">Built to Empower DevOps Teams!</div>
      </div>
    </body>
    </html>
  `);
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
