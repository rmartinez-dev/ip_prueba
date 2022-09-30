const express = require('express');
const app = express();

const requestIP = require('request-ip');


app.use(express.urlencoded({extended: false}));
app.use(express.json());


app.get('/',  function(req, res) {
    const clientIp =  requestIP.getClientIp(req)

    res.end("My ip is" + clientIp)
    
});
  
app.listen(3000, () => console.log(`App listening on port 3000`))