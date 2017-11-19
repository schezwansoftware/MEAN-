var express=require('express');
var path=require('path');
var bodyParser=require('body-parser');

var index=require('./routes/index');
var tasks=require('./tasks/tasks');

var app=express();
var port=9090;

// View Engine

app.set('views',path.join(__dirname,'views'));
app.set('view engine','ejs');
app.engine('html',require('ejs').renderFile);


//Setting Static folder for Front End

app.use(express.static(path.join(__dirname,'client')));

//Body Parser Middleware

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));


//routes

app.use('/',index);

//taskes

app.use('/api',tasks);

app.listen(port,function () {
	// body...
	console.log('listen to ',port);
});