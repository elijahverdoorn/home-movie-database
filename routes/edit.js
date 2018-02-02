let express = require('express');
let db = require('../db.js');
let router = express.Router();

router.get('/:id', async (req, res, next) => {
	let m = await db.get('SELECT * FROM movie m JOIN location l WHERE m.id = $id;', {
		$id: req.params.id
	})
	let fe = await db.all('SELECT * from formatEntry WHERE movieId = $id;', {
		$id: req.params.id
	})
	let formats = []
	fe.forEach((entry) => {
		formats.push(entry.formatId)
	})

	let f = await db.all('SELECT * FROM format;')

	f.forEach((format) => {
		if (formats.includes(format.id)) {
			format.active = true
		} else {
			format.active = false
		}
	})

	res.render('edit', {
		movieInfo: m,
		formats: f
	})
})

router.post('/:id', (req, res, next) => {
		db.run('UPDATE movie SET title = $title, director = $director, imdbId = $imdbId, rating = $rating, year = $year, runtime = $runtime, writer = $writer, actors = $actors, plot = $plot, imdbURL = $imdbURL, poster = $poster, hasInfo = 1 WHERE id = $id;', {
			$id: req.params.id,
			$title: req.body.title,
			$director: req.body.director,
			$imdbId: req.body.imdbId,
			$rating: req.body.rating,
			$year: req.body.year,
			$runtime: req.body.runtime,
			$writer: req.body.writer,
			$actors: req.body.actors,
			$plot: req.body.plot,
			$imdbURL: req.body.imdbURL,
			$poster: req.body.poster
		})

	res.redirect('/movie/' + req.params.id)
})

module.exports = router;
