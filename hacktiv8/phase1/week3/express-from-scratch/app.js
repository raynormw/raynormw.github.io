const express = require('express');
let app = express();
let index = require('./routes/index');
let user = require('./routes/user');

app.set('view engine', 'ejs');
app.use('/', index);
app.use('/', user);

app.listen(3000, () => console.log('Listening on port 3000..'));
