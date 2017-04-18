var express = require('express');
var cors = require('cors');
var bodyParser = require('body-parser');
var useragent = require('express-useragent');
var app = express();
var routes = require('./routes/index.js')

app.use(bodyParser.json());
app.use(cors());
app.use(useragent.express());

var port = process.env.PORT || 3000;

routes(app);

app.listen(port, function(){

  console.log('Node.js listening on port ' + port);

})
