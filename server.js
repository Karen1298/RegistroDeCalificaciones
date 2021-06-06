const express = require('express');
const exphbs = require('express-handlebars');
const path = require('path');
const app = express();

// enviroments vars
require('dotenv').config();

// handlebars engine view
<<<<<<< HEAD
app.engine('.hbs',
    exphbs({
        defaultLayout: 'main-layout',
        extname: '.hbs',

    })
);
app.set('view engine', '.hbs');
app.set('views', './src/frontend/views');

app.use(express.static(path.join(__dirname+'/src/frontend', 'static')));
=======
app.engine(
   '.hbs',
   exphbs({
      defaultLayout: 'main-layout',
      extname: '.hbs',
   })
);
app.set('view engine', '.hbs');
app.set('views', './src/frontend/views');
app.use(express.static(path.join(__dirname + '/src/frontend', 'static')));
>>>>>>> origin/staging

//Settings
app.set('port', process.env.PORT || 3000);

//Middlewares
app.use(express.json({ extended: true }));



//Routes pages
//app.use(require('./src/api/routes/index')); llamado al archivo subir img 
app.use('/', require('./src/frontend/routes'));

// Route api
<<<<<<< HEAD
app.use('/api/v1/calificaciones', require('./src/api/registro_calificaciones/routes'));
app.use('/api/v1/mensaje', require('./src/api/modulo_ticket/routes'));
=======
app.use('/api/v1/auth', require('./src/api/modulo_login/routes'));
>>>>>>> origin/staging

//Starting the server
app.listen(app.get('port'), () => console.log(`server on port http://localhost:${app.get('port')}`));

module.exports = app;
