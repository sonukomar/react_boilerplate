const express = require('express')
const app = express()
const port = 3000

app.use(function(req,res,next) {
    res.header('Access-Control-Origin','*');
    res.header('Access-Control-Origin','Origin, X-Requested-with');
    next();
});

app.get('/', (req, res) => res.send('Hello Sonu !'))
app.get('/home', (req, res) => {
    console.log('Req received',req);
    res.json({ username: 'Flavio'});
});

app.listen(port, () => console.log('Example app listening on port ..!'));
