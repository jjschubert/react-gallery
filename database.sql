CREATE TABLE "gallery"(
	"id" SERIAL PRIMARY KEY,
	"path" VARCHAR (250) NOT NULL,
	"description" VARCHAR (250) NOT NULL,
	"likes" INT
);

-- Data for table
INSERT INTO "gallery" ("path", "description", "likes")
 VALUES ('images/redwoods.jpeg', 'Friend trip to Redwoods National Park this February.', 0);
 INSERT INTO "gallery" ("path", "description", "likes")
 VALUES ('images/bowl.jpeg', 'A bowl I made!', 0 );
 INSERT INTO "gallery" ("path", "description", "likes")
 VALUES('images/cascade.jpeg','My husband and I take an annual North Shore camping trip', 0);
 INSERT INTO "gallery" ("path", "description", "likes")
 VALUES ('images/colorado.jpeg', 'Friend trip to Colorado in 2018', 0);
 INSERT INTO "gallery" ("path", "description", "likes")
 VALUES('images/kayak.jpeg', 'Goose on her first kayak trip at the cabin', 0);
 INSERT INTO "gallery" ("path", "description", "likes")
 VALUES('images/kidphoto.jpeg', 'The only kid photo I have a digital copy of!', 0);
 INSERT INTO "gallery" ("path", "description", "likes")
 VALUES('images/parents.jpeg', 'Parents + husband at Psycho Suzi"s', 0);
 INSERT INTO "gallery" ("path", "description", "likes")
 VALUES('images/wedding2.jpeg', 'Me + husband Rob on our wedding day', 0);
