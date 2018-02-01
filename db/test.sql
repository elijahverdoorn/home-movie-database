INSERT INTO location('locationName', 'volume') VALUES ('Action', 1);

INSERT INTO movie('title', 'locationId') VALUES ('The Avengers', 1);
INSERT INTO movie('title', 'locationId') VALUES ('Batman Begins', 1);

INSERT INTO format('formatName') VALUES ('4K');
INSERT INTO format('formatName') VALUES ('Blu-Ray');
INSERT INTO format('formatName') VALUES ('DVD');
INSERT INTO format('formatName') VALUES ('Digital');
INSERT INTO format('formatName') VALUES ('VHS');

INSERT INTO formatEntry('movieId', 'formatId') VALUES (1, 1);
INSERT INTO formatEntry('movieId', 'formatId') VALUES (2, 1);
INSERT INTO formatEntry('movieId', 'formatId') VALUES (2, 2);

