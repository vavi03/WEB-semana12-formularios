var express= require('express');
var exphbs= require('express-handlebars');
//creando servidor
var app=express();


app.use(express.static('public'));
//registrar motor render 
app.engine('handlebars', exphns());
//motor render es handlebars
app.set('view engine','handlebars');












app.listen(3000);