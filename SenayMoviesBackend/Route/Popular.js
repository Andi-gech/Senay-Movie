
const express = require('express');
const axios = require('axios');

const Router = express.Router();

const TIMEOUT = 10000; 


const ApiKey = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjOGVmYzQ4YmE3YmRlYTk2Njg5NzAyOGU2NDBlMjM2NSIsIm5iZiI6MTcyMjYwNjczNi4xODM0OTUsInN1YiI6IjY1NGJkMWE1NGYzM2FkMDExZTAzNTk2OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.99zHMYYfNszJf3GzVkzj5P918Y69XaBw3I4ZhFhFlyw';

const handleError = (res, error, message = 'Error fetching data') => {
    console.log(error)
    res.status(500).json({ message });
};

Router.get('/', async (req, res) => {
    try {
        const url = 'https://api.themoviedb.org/3/movie/popular?language=en-US&page=1';
        const options = {
            method: 'GET',
            headers: {
                accept: 'application/json',
                'Content-Type': 'application/json',
                Authorization: 'Bearer ' + ApiKey
            },
            timeout: TIMEOUT
        };

        const response = await axios.get(url, options);
        res.send(response.data.results);
    } catch (error) {
        handleError(res, error);
    }
});

Router.get('/page/:pageno', async (req, res) => {
    const { pageno } = req.params;
    const { genreId } = req.query;
    console.log(genreId)

    try {
        if (!pageno) {
            return res.status(400).json({ message: "Please provide page number" });

        }
        let url=`https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=${Number(pageno)}&sort_by=popularity.desc`
        if (genreId) {
            url += `&with_genres=${genreId}`;
        }
        const options = {
            method: 'GET',
            headers: {
                accept: 'application/json',
                'Content-Type': 'application/json',
                Authorization: 'Bearer ' + ApiKey
            },
            timeout: TIMEOUT
        };

        const response = await axios.get(url, options);
        res.send(response.data);
    } catch (error) {
        handleError(res, error);
    }
});

Router.get('/detail/:id', async (req, res) => {
    const { id } = req.params;

    try {
        if (!id) {
            return res.status(400).json({ message: "Please provide movie ID" });
        }
        const url = `https://api.themoviedb.org/3/movie/${Number(id)}?language=en-US`;
        const options = {
            method: 'GET',
            headers: {
                accept: 'application/json',
                'Content-Type': 'application/json',
                Authorization: 'Bearer ' + ApiKey
            },
            timeout: TIMEOUT
        };

        const response = await axios.get(url, options);
        res.send(response.data);
    } catch (error) {
        handleError(res, error);
    }
});



Router.get('/search/:query', async (req, res) => {
    const { query } = req.params;

    try {
        if (!query) {
            return res.status(400).json({ message: "Please provide query" });
        }
        const options = {
            method: 'GET',
            headers: {
                accept: 'application/json',
                'Content-Type': 'application/json',
                Authorization: 'Bearer ' + ApiKey
            },
            timeout: TIMEOUT
        };

        const url = `https://api.themoviedb.org/3/search/multi?query=${query}&include_adult=false&language=en-US&page=1`;

        const response = await axios.get(url, options);
        res.send(response.data);
    } catch (error) {
        handleError(res, error);
    }
});

Router.get('/get/:imdbid', async (req, res) => {
    const { imdbid } = req.params;

    try {
        if (!imdbid) {
            return res.status(400).json({ message: "Please provide IMDb ID" });
        }
        const url = `https://api.themoviedb.org/3/movie/${Number(imdbid)}?language=en-US`;
        const options = {
            method: 'GET',
            headers: {
                accept: 'application/json',
                'Content-Type': 'application/json',
                Authorization: 'Bearer ' + ApiKey
            },
            timeout: TIMEOUT
        };

        const response = await axios.get(url, options);
        res.send(response.data);
    } catch (error) {
        handleError(res, error);
    }
});

Router.get('/detail/Tv/:id', async (req, res) => {
    const { id } = req.params;

    try {
        if (!id) {
            return res.status(400).json({ message: "Please provide TV show ID" });
        }
        const url = `https://api.themoviedb.org/3/tv/${Number(id)}?language=en-US`;
        const options = {
            method: 'GET',
            headers: {
                accept: 'application/json',
                'Content-Type': 'application/json',
                Authorization: 'Bearer ' + ApiKey
            },
            timeout: TIMEOUT
        };

        const response = await axios.get(url, options);
        res.send(response.data);
    } catch (error) {
        handleError(res, error);
    }
});

Router.get('/tv/:pageno', async (req, res) => {
    const { pageno } = req.params;
    const { genreId } = req.query;
    console.log(genreId,"genere")
    console.log(pageno,"pageno")
   
    try {
        if (!pageno) {
            return res.status(400).json({ message: "Please provide page number" });

        }
        let url=`https://api.themoviedb.org/3/discover/tv?include_adult=false&include_video=false&language=en-US&page=${pageno}&sort_by=popularity.desc`
        if (genreId) {
            url += `&with_genres=${genreId}`;
        }
        const options = {
            method: 'GET',
            headers: {
                accept: 'application/json',
                'Content-Type': 'application/json',
                Authorization: 'Bearer ' + ApiKey
            },
            timeout: TIMEOUT
        };

        const response = await axios.get(url, options);
        res.send(response.data);
    } catch (error) {
        handleError(res, error);
    }
});


Router.get('/genres', async (req, res) => {
    try {
        const url = 'https://api.themoviedb.org/3/genre/movie/list?language=en';
        const options = {
            method: 'GET',
            headers: {
                accept: 'application/json',
                'Content-Type': 'application/json',
                Authorization: 'Bearer ' + ApiKey
            },
            timeout: TIMEOUT
        };

        const response = await axios.get(url, options);
        res.send(response.data.genres);
    } catch (error) {
        handleError(res, error);
    }
});
Router.get('/config/tv/genres', async (req, res) => {
    try {
        const url = 'https://api.themoviedb.org/3/genre/tv/list?language=en';
        const options = {
            method: 'GET',
            headers: {
                accept: 'application/json',
                'Content-Type': 'application/json',
                Authorization: 'Bearer ' + ApiKey
            },
            timeout: TIMEOUT
        };

        const response = await axios.get(url, options);
        res.send(response.data.genres);
    } catch (error) {
        handleError(res, error);
    }
});

module.exports = Router;
