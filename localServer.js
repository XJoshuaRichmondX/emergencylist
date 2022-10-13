

const express = require('express')
const app = express()
const PORT = 5005;
//const cors = require('cors')


app.use(express.static('front_end_public'));
app.use(express.json());

app.listen(PORT, () => {
    console.log(`local server running on ${PORT}`)
});