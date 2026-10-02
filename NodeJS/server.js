const express =  require('express');
const crud = require('./Day1-GET-POST/crud');
const movies = require('./Day3-Movies-CRUD/Movies');
const app =  express();
const cors = require('cors');

app.use(cors());
app.use(express.json());

app.get('/', (req,res) =>{
    res.send('hello world');
})
app.use('/api',crud);
app.use('/api',movies);

app.listen(3000,() => {
    console.log('server is runnig on port 3000');
})
