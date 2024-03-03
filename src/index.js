import express from 'express';
import handlebars from 'express-handlebars';
import path from 'path';
import morgan from 'morgan';

const app = express();
const port = 3000;

// Console logging
app.use(morgan('combined'));

// Template engine
app.engine('hbs', handlebars.engine({
  extname: '.hbs',
}));
app.set('view engine', 'hbs');
app.set('views', path.join(import.meta.dirname, 'views'));

app.get('/', (req, res) => {
  res.render('pages/home',{
    title: "Home",
  });
})

app.get('/airdrop', (req, res) => {
  res.render('airdrop',{
    title: "Airdrop",
  });
})

app.get('/admin', (req, res) => {
  res.render('admin/views/admin-layout',{
    title: "Admin Layout",
  });
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
})