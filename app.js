const express = require('express');
const app = express();
const path = require('path');
const indexRouter = require('./routes/index-router')


app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.use('/',indexRouter)

app.listen(3000);