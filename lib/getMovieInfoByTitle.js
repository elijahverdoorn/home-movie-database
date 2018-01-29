import { omdbApiKey } from '../config.js'
let omdb = require('imdb-api')

const getMovieInfoByTitle = (title) => {
	return omdb.get(title, {
		apiKey: omdbApiKey,
		timeout: 30000
	})
}
export default getMovieInfoByTitle
