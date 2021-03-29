const express = require('express');
const app = express();

app.use(express.static('./public'));
app.use(express.static('./styles'))

app.listen(3000, ()=> console.log('listen http://localhost:3000'));