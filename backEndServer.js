// app.use(express.static('public'))

const {response} = require('express');
const express = require('express');
const {restart} = require('nodemon');
const {Client} = require('pg');
const app = express();
const PORT = 3005


app.use(express.json())

const client = new Client({
    host: 'localhost',
    port: 5432,
    user: 'postgres',
    password: 'docker',
    database: 'fullstack'
})

client.connect();

app.get('/api/fullstack', (req,res) => {
    client.query('SELECT * FROM customer',
    (error, results) => {
        if (error) {
            console.error(error)
        } else {
            res.send(results.rows);
        }
    })
})


app.post('/api/fullstack', (req,res) => {
 let {name, phone, total} = req.body;
 client.query ('INSERT INTO customer (name, phone, total) VALUES ($1, $2, $3);', [name, phone, total], (error, results) => {
    if (error) {
        console.log(error)
    } else {
        res.send(results.rows);
    }
 })
})

app.patch('/api/fullstack/:id', (req,res) => {
    client.query('UPDATE customer SET name = $1 WHERE customer_id = $2', [req.body.name, req.params.id], (error, results) => {
        if(error) {
            console.error(error)
        } else {
             res.send(results.rows);
        }
    })
}) 

app.delete('/api/fullstack/:id', (req,res) => {
    client.query('DELETE FROM customer WHERE customer_id = $1', [req.params.id], (error, results) => {
        if(error) {
            console.error(error)
        } else {
            res.send (results.rows);
        }
    })
})

app.listen(PORT, () => {
 console.log(`Our app is running on ${PORT}`)
});
