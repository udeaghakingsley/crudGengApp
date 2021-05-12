const express = require('express');
const app = express ();

app.get('/', function(req, res){
    res.send('hello world');
})

app.post('/books', function(req, res){
    res.send('there are 4 books in store');
})


app.post('/', function(req, res){
    res.send('this is a post request')
})


app.listen(3000, function(){
    console.log('server is up and running')
});
