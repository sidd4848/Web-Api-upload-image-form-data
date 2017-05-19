const express        = require('express');
const bodyParser     = require('body-parser');
const app = express();
var multer = require('multer');
const port = 8000;

var tmp;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.listen(port, ()=>{
	console.log('We are live on' + port);
});
var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './pics/')
  },
  filename: function (req, file, cb) {
	
	  var newfilename = req.body.names + "_" + req.body.age + ".jpg";
	  console.log(req.body);
      cb(null, newfilename);   
  }
});
var upload = multer({ storage: storage });


app.post('/post', upload.fields([{ name: 'trial6', maxCount: 1 }, { name: 'names', maxCount: 1 }, { name: 'age', maxcount: 1}]), function(req, res) {
  console.log(req.files.trial6);
  res.send("file saved on server" + req.body.names + "***  " + req.body.age);
});