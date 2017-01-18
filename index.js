let express = require('express');
let app = express();

app.get('/', (req, res) => {
  res.send('Hello world: 1');
});

app.listen(4000, () => {
  console.log('Server started');
});
