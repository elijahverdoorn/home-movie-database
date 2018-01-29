let express = require('express');
let router = express.Router();
let getMovieInfoByTitle = require('../lib/getMovieInfoByTitle');

router.get('/:id', async (req, res, next) => {
	let m = await req.db.all('SELECT * FROM movie WHERE id = ? JOIN location ON locationId;', req.query.id)
	if (!m.hasInfo) {
		let imdbInfo = getMovieInfoByTitle(m.title)
		// save the info in db
		req.db.run('UPDATE movie SET director = $director, imdbId = $imdbId, rating = $rating, year = $year, runtime = $runtime, writer = $writer, actors = $actors, plot = $plot, imdbURL = $imdbURL, poster = $poster;', {
			$director: imdbInfo.director,
			$imdbId: imdbInfo.imdbId,
			$rating: imdbInfo.rating,
			$year: imdbInfo.year,
			$runtime: imdbInfo.runtime,
			$writer: imdbInfo.writer,
			$actors: imdbInfo.actors,
			$plot: imdbInfo.plot,
			$imdbURL: imdbInfo.imdbURL,
			$poster: imdbInfo.poster,
			$hasInfo: 1
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
});

module.exports = router;
