// index.js
// where your node app starts

// init project
var express = require('express');
var app = express();

// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC 
var cors = require('cors');
app.use(cors({optionsSuccessStatus: 200}));  // some legacy browsers choke on 204

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});


// your first API endpoint... 
app.get("/api/hello", function (req, res) {
  res.json({greeting: 'hello API'});
});

//test
app.get("/api/time", (req, res) => {
  const now = new Date();
  res.json({
    unix: now.getTime(),
    utc: now.toUTCString()
  });
});


//Exer. 1
app.get("/api/:date?", function (req, res) {
  const dateParam = req.params.date;
  const dateObj = !dateParam ? new Date() : new Date(isNaN(dateParam) ? dateParam : Number(dateParam));

  if (!isNaN(dateObj.getTime())) {
    res.json({
       unix: dateObj.getTime(),
       utc: dateObj.toUTCString() 
       });
  } else {
    res.json({ error: "Invalid Date" })
  }

  
  
  
  





  /*
  if (!req.params.date) {
    const now = new Date();
    return res.json({
      unix: now.getTime(),
      utc: now.toUTCString()
    });
  }
  */
  
  //const dateObj = req.params.date;
  //res.json({ unix: dateValue.getTime() })

});






// Listen on port set in environment variable or default to 3000
var listener = app.listen(process.env.PORT || 3000, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
