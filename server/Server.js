var express         =         require("express");
var mysql           =         require("mysql");
var app             =         express();

/*
  * Configure MySQL parameters.
*/
var connection      =         mysql.createConnection({
        host        :         "antoniopedropereira.com",
        user        :         "antoniop_angular",
        password    :         "angular1423",
        database     :         "antoniop_angularDB"
});

connection.connect(function(error){
  if(error)
    {
      console.log("Problem with MySQL "+error);
    }
  else
    {
      console.log("Connected with Database");
    }
});

/*
  * Configure Express Server.
*/
app.use(express.static(__dirname + '/angular'));
/*
 * Enable Cross Origin since client and server are in different domains
*/
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
/*
  * Define routing of the application.
*/
app.get('/',function(req,res){
  res.sendfile('index.html');
});

app.get('/load',function(req,res){
  connection.query("SELECT * from user_info",function(err,rows){
    if(err)
      {
        console.log("Problem with MySQL"+err);
      }
      else
        {
		res.end(JSON.stringify(rows));
        }
	});
});

app.get('/test',function(req,res){
	console.log("REST API call: method \'test\'");
	res.end("Test with success");
});

/*
  * Start the Express Web Server.
*/
app.listen(3000,function(){
  console.log("It's Started on PORT 3000");
});
