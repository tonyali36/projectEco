const express = require('express')
const app = express();
const port = 3000

app.get('/', (req,res) => res.send('coucou'));
app.get('/login', (req,res) => res.send('login'));
app.get('/register', (req,res) => res.send('register'));

app.listen(port, function(error) {
    if(error) {
        console.log('Something went wrong', error)
    } else{
        console.log('Server is listening on port' + port)
    }
})
