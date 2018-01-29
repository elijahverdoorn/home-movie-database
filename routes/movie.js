let express = require('express');
let router = express.Router();
let db = require('../db.js');
import app from '../app'
import getMovieInfoByTitle from '../lib/getMovieInfoByTitle'

router.get('/:id', async (req, res, next) => {
	// console.log(db)

	let m = await db.get('SELECT * FROM movie m JOIN location l WHERE m.id = $id;', {
		$id: req.params.id
	})
	console.log(m)

	if (!m.hasInfo) {
		let imdbInfo = await getMovieInfoByTitle(m.title)
		console.log(imdbInfo)
		// save the info in db
		db.run('UPDATE movie SET director = $director, imdbId = $imdbId, rating = $rating, year = $year, runtime = $runtime, writer = $writer, actors = $actors, plot = $plot, imdbURL = $imdbURL, poster = $poster, hasInfo = 1 WHERE id = $id;', {
			$id: m.id,
			$director: imdbInfo.director,
			$imdbId: imdbInfo.imdbId,
			$rating: imdbInfo.rated,
			$year: imdbInfo.year,
			$runtime: imdbInfo.runtime,
			$writer: imdbInfo.writer,
			$actors: imdbInfo.actors,
			$plot: imdbInfo.plot,
			$imdbURL: imdbInfo.imdbURL,
			$poster: imdbInfo.poster
		})
		m.director = imdbInfo.director,
		m.imdbId = imdbInfo.imdbId,
		m.rating = imdbInfo.rating,
		m.year = imdbInfo.year,
		m.runtime = imdbInfo.runtime,
		m.writer = imdbInfo.writer,
		m.actors = imdbInfo.actors,
		m.plot = imdbInfo.plot,
		m.imdbURL = imdbInfo.imdbURL,
		m.poster = imdbInfo.poster,
		m.hasInfo = 1
	}

	res.render('movie', {
		movieInfo: m
	});
})

module.exports = router;
