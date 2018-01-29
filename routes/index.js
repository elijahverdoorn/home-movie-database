let express = require('express');
let router = express.Router();
let db = require('../db.js');

router.get('/', async (req, res, next) => {
	let movies = await db.all('SELECT * FROM movie;')
	res.render('index', {movies: movies})
})

module.exports = router;
