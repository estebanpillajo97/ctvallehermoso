let express = require('express');

let app = express();

app.use(express.static(__dirname+'/dist/ctvallehermoso'));

app.get('/*', (req, resp)=>{
    resp.sendFile(__dirname+'/dist/ctvallerhermoso/index.html')
});

app.listen(process.env.PORT || 8080);