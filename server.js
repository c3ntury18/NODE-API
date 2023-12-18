const express = require('express');
const app= express();
const port = 3000;


app.use(express.urlencoded({ extended: true}));
app.use(express.json());



app.listen(3000, () => {
    console.log('Server is ruuning on port 3000');
})


app.post('/register', (req, res) => {
const { patiendId, surname, othernames, contact, relationship} =req.body;
const patientId = patients.length +1;


app.post('/encounters/start', (req, res) => {
const  { patiendId } = req.body;


})



    
    








})