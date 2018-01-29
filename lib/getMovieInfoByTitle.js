let omdbApiKey = require('../config.js')
let omdb = require('imdb-api')

const getMovieInfoByTitle = async (title) => {
	let res = await omdb.get(title, {
		apiKey: omdbApiKey,
		timeout: 30000
	})
	return res
}
export default getMovieInfoByTitle
