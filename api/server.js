const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const { json } = require('body-parser');
const axios = require('axios');
const app = express();

app.use(cors());
app.use(json());

const { parsed: config } = dotenv.config();

const BASE_URL = `https://api.cloudinary.com/v1_1/${config.CLOUD_NAME}`;
const auth = {
    username: config.API_KEY,
    password: config.API_SECRET,
};

app.get('/photos', async (req, res) => {
    const response = await axios.get(BASE_URL + '/resources/image?max_results=20', {
        auth,
        params: {
            next_cursor: req.query.next_cursor
        },
    });
    return res.send(response.data);
});

app.get('/search', async (req, res) => {
    const response = await axios.get(BASE_URL + '/resources/search', {
        auth,
        params: {
            expression: req.query.expression
        }
    })
    return res.send(response.data)
})

app.listen(7000, console.log('server is running on port 7000'));