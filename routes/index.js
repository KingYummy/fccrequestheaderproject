module.exports = function(app){
  var accepts = require('accepts');
  var API = '/whoami';
  app.get( API , (req, res) => {
    var ip = req.ip;
    var language = accepts(req).languages()[0];
    var software = "OS: " + " " + req.useragent.os + " " + "platform: "+ " " + req.useragent.source;

    res.json({ "ipaddress" : ip, "language": language, "software": software })
  })
}
