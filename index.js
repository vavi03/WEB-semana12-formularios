var express= require('express');
var exphbs= require('express-handlebars');
//creando servidor
var app=express();


app.use(express.static('public'));
//registrar motor render 
app.engine('handlebars', exphbs());
//motor render es handlebars
app.set('view engine','handlebars');

app.get('/', function(req,res){
    var contexto={
    titulo: 'pagina principal',
    };
res.render('home', contexto);
});










app.listen(3000);