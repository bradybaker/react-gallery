CREATE TABLE gallery (
	id SERIAL PRIMARY KEY,
	path VARCHAR(300),
	description  VARCHAR(200),
	likes INT DEFAULT 0
); 

INSERT INTO gallery (path, description) VALUES ('./images/awkward.jpg', 'Starting things off with the classic awkward picture from my high school years. With me, are Ashlyn and Bradey! Two of my closest friends to this day! It is only up from here!');
INSERT INTO gallery (path, description) VALUES ('./images/momma.jpg', 'Had to throw in a picture with my momma! I am so lucky to be able to call her mom!!');
INSERT INTO gallery (path, description) VALUES ('./images/bradySquad.jpg', 'My nieces and nephew! The people the keep me young.');
INSERT INTO gallery (path, description) VALUES ('./images/sugarLoaf.jpg', 'One of my favorite hikes in the Rockies, Sugar Loaf Mountain!');
INSERT INTO gallery (path, description) VALUES ('./images/minneSquad.jpg', 'The people I am spending most of my time with here in Minneapolis!');
INSERT INTO gallery (path, description) VALUES ('./images/bradyHike.jpg', 'Bradey again! With my boyfriend Mark and I hiking through Willow Falls');
INSERT INTO gallery (path, description) VALUES ('./images/EwCovid.jpg', 'A great reference from one of my favorite tv shows. EW!');
INSERT INTO gallery (path, description) VALUES ('./images/COVID.jpg', 'I tested A LOT of people for COVID in a past life.');
INSERT INTO gallery (path, description) VALUES ('./images/mac.jpg', 'My new puppy, Mac! He is a Cavapoo and only 10 weeks old in this pic! SO CUTE!');