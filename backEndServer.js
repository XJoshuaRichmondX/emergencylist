
const {response} = require('express');
const express = require('express');
const {Client} = require('pg');
const PORT = 3005;
const app = express();
const CORS = require ('cors');
app.use(CORS());

app.use(express.json());

const client = new Client({
    host: 'localhost',
    port: 5432,
    user: 'postgres',
    password: 'docker',
    database: 'emergencylist'
})

client.connect();

app.get('/api/', (req,res) => {
    client.query('SELECT * FROM contactlist')
  .then(result => res.send(result.rows))
    
})


app.post('/api/', (req,res) => {
 let {contactname, phone, relationship} = req.body;
 try{ 
     client.query (`INSERT INTO contactlist (contactname, phone, relationship) VALUES ($1, $2, $3)`, [contactname, phone, relationship])
        res.send('Added') 
        }
        catch(err) {
            console.log(err)
        }
    });

 app.patch('/api/:customer_id', (req,res) => {
    try{
     client.query(`UPDATE contactlist SET phone = $1 WHERE customer_id = $2`, [req.body.phone, req.params.customer_id]) 
        res.send('Updated')
        }
        catch(err) {
            console.log(err)
     }
 }); 

app.delete('/api/:customer_id', (req,res) => {
    try{
    client.query(`DELETE FROM contactlist WHERE customer_id = $1`, [req.params.customer_id]) 
        res.send('Deleted')
    }
    catch(err) {
        console.log(err)
    }
});

app.listen(PORT, () => {
 console.log(`Our app is running on ${PORT}`)
});
showlist();