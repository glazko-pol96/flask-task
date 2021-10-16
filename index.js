const express = require('express');
const expressHbrs = require('express-handlebars');
const routes = require('./routes/routes');
const PORT = 80

const app = express()
const hbs = expressHbrs.create({
  defaultLayout: 'index',
  extname: 'hbs'
});

app.engine('hbs', hbs.engine);
app.set('view engine', 'hbs');
app.set('views', 'views');
app.use(express.static('public'));

app.use(routes);

app.listen(PORT, () => {
  console.log(`App listening at http://localhost:${PORT}`)
})

