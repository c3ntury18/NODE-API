const express = require('express');
const app= express();
const port = 3000;


app.use(express.urlencoded({ extended: true}));
app.use(express.json());



app.listen(3000, () => {
    console.log('Server is ruuning on port 3000');
})


app.post('/register', (req, res) => {




    
})