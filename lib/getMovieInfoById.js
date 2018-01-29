import omdbApiKey from '../config.js')
let omdb = require('imdb-api')

export default getMovieInfoById = async (id) => {
	let res = await omdb.getReq({
		id: id,
		opts: {
			apiKey: omdbApiKey
		}
	})
	return res
}
