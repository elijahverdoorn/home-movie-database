import database from 'sqlite'

let connectDatabase = () => {
	database.open('./db/database.db')
	console.log(database)
	return database
}

module.exports = connectDatabase()
