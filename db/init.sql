CREATE TABLE movie (
	id INTEGER PRIMARY KEY ASC,
	title VARCHAR NOT NULL,
	director VARCHAR,
	imdbId VARCHAR,
	rating VARCHAR,
	seriesId INTEGER,
	year INTEGER,
	runtime INTEGER,
	writer VARCHAR,
	actors VARCHAR,
	plot VARCHAR,
	imdbURL VARCHAR,
	poster VARCHAR,
	hasInfo INTEGER,
	locationId INTEGER,
	specialFeatures INTEGER,
	notes VARCHAR,
	FOREIGN KEY(seriesId) REFERENCES series(id),
	FOREIGN KEY(locationId) REFERENCES location(id)
);

CREATE TABLE formatEntry (
	movieId INTEGER,
	formatId INTEGER,
	FOREIGN KEY(movieId) REFERENCES movie(id),
	FOREIGN KEY(formatId) REFERENCES format(id)
);

CREATE TABLE format (
	id INTEGER PRIMARY KEY ASC,
	formatName VARCHAR NOT NULL
);

CREATE TABLE location (
	id INTEGER PRIMARY KEY ASC,
	locationName VARCHAR NOT NULL,
	volume INTEGER
);

CREATE TABLE series (
	id INTEGER PRIMARY KEY ASC,
	title VARCHAR NOT NULL
);
