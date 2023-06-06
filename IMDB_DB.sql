
-- IMDB Design a DB for IMDB 
-- 1. Movie should have multiple media(Video or Image) 
-- 2. Movie can belongs to multiple Genre 
-- 3. Movie can have multiple reviews and Review can belongs to a user 
-- 4. Artist can have multiple skills 
-- 5. Artist can perform multiple role in a single film


CREATE DATABASE IMDB;
USE IMDB;
CREATE TABLE IMDB_DATA(
Id INTEGER PRIMARY KEY,
Movie_name TEXT,
Rating DECIMAL(2,1),
Released_year INTEGER,
Genre TEXT,
Media TEXT,
Reviews INTEGER,
Main_Artist TEXT,
Artist_role TEXT,
Artist_Skills TEXT
);

INSERT INTO IMDB_DATA VALUES
(1,"The Shawshank Redemption",9.3,1994,"Drama", "https://www.imdb.com/title/tt0111161/mediaviewer/rm2971500544/?ref_=tt_md_1", 2700000, "Tim Robbins", "Actor", "Acting"),
(2,"The Godfather",9.2,1972,"Crime, Drama", "https://www.imdb.com/title/tt0068646/mediaviewer/rm4260419329/?ref_=tt_md_1", 1900000, "Francis Ford Coppola", "Director", "Direction"),
(3,"The Dark Knight",9.0,2008,"Action, Crime", "https://www.imdb.com/title/tt0468569/mediaviewer/rm3252125696/?ref_=tt_md_3", 2700000, "Christopher Nolan", "Director", "Direction"),
(4,"Pulp Fiction",8.9,1994,"Crime, Drama", "https://www.imdb.com/title/tt0110912/mediaviewer/rm3998665728/?ref_=tt_md_1", 2100000, "Quentin Tarantino", "Director & Writer", "Direction and Writing"),
(5,"Forrest Gump",8.8,1994,"Drama, Romance", "https://www.imdb.com/title/tt0109830/mediaviewer/rm535942913/?ref_=tt_md_1", 2100000, "Winston Groom", "Writer", "Writing"),
(6,"Fight Club",8.8,1999,"Drama", "https://www.imdb.com/title/tt0137523/mediaviewer/rm301108480/?ref_=tt_md_2", 2200000, "Brad Pitt", "Actor", "Acting"),
(7,"Inception",8.8,2010,"Adventure, Sci-Fi", "https://www.imdb.com/title/tt1375666/mediaviewer/rm733971200/?ref_=tt_md_2", 2400000, "Christopher Nolan", "Director", "Direction"),
(8,"The Matrix",8.7,1999,"Action, Sci-Fi", "https://www.imdb.com/title/tt0133093/mediaviewer/rm3441835264/?ref_=tt_md_3", 2000000, "Keanu Reeves", "Actor", "Acting"),
(9,"City of God",8.6,2002,"Crime, Drama", "https://www.imdb.com/title/tt0317248/mediaviewer/rm1122480640/?ref_=tt_md_3", 771000, "Fernando Meirelles", "Director", "Direction"),
(10,"Gladiator",8.5,2000,"Action, Drama", "https://www.imdb.com/title/tt0172495/mediaviewer/rm25265152/?ref_=tt_md_3", 1500000, "Ridley Scott", "Director", "Direction");


SELECT * FROM IMDB_DATA;

