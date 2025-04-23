const express = require('express');
const app = express();

app.use(express.json());

app.get('/ping', (req, res) => {
  res.send('pong');
});

app.get('/block', (req, res) => {
    const start = Date.now();
    while (Date.now() - start < 1000) {}
    res.send('done');
});


app.post('/echo', (req, res) => {
  res.json({ received: req.body });
});

const mem = [];
app.get('/leak', (req, res) => {
  for (let i = 0; i < 10000; i++) {
    mem.push(new Array(10000).fill('leak'));
  }
  res.send('leak');
});


const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
