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
	formatId INTEGER,
	specialFeatures INTEGER,
	notes VARCHAR,
	FOREIGN KEY(seriesId) REFERENCES series(id)
	FOREIGN KEY(locationId) REFERENCES location(id)
	FOREIGN KEY(formatId) REFERENCES format(id)
);

CREATE TABLE format (
	id INTEGER PRIMARY KEY ASC,
	name VARCHAR NOT NULL
);

CREATE TABLE location (
	id INTEGER PRIMARY KEY ASC,
	name VARCHAR NOT NULL,
	volume INTEGER
);

CREATE TABLE series (
	id INTEGER PRIMARY KEY ASC,
	title VARCHAR NOT NULL
);
