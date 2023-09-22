--Create BDD

-- Clean all tables
DROP TABLE IF EXISTS ad;
DROP TABLE IF EXISTS category;

-- Create category table
CREATE TABLE category (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL UNIQUE
);

-- Inserting categories
INSERT INTO category (name) VALUES ('vêtement');
INSERT INTO category (name) VALUES ('voiture');
INSERT INTO category (name) VALUES ('autre');

-- Create table ad table
CREATE TABLE ad (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title TEXT NOT NULL,
    description TEXT,
    author TEXT NOT NULL,
    price REAL NOT NULL,
    createdAt TEXT NOT NULL,
    imageUrl TEXT,
    city TEXT NOT NULL,
    -- categoryId INTEGER NOT NULL,
    categoryId INTEGER,
    CONSTRAINT fk_category
        FOREIGN KEY (categoryId)
        REFERENCES category(id)
);


-- Annonce 1
INSERT INTO ad (title, description, author, price, createdAt, imageUrl, city, categoryId)
VALUES ('Vélo de course', 'Vélo en excellent état, utilisé seulement quelques fois', 'Jean', 350.50, '2023-09-19', 'http://example.com/velo1.jpg', 'Bordeaux', 2);

-- Annonce 2
INSERT INTO ad (title, description, author, price, createdAt, imageUrl, city, categoryId)
VALUES ('Canapé en cuir', 'Canapé 3 places, couleur marron', 'Sophie', 750.00, '2023-09-10', 'http://example.com/canape.jpg', 'Paris', 3);

-- Annonce 3
INSERT INTO ad (title, description, author, price, createdAt, imageUrl, city, categoryId)
VALUES ('MacBook Pro', 'Ordinateur 15 pouces, 256GB SSD, 16GB RAM', 'Luc', 1200.00, '2023-09-05', 'http://example.com/macbook.jpg', 'Lyon', 3);

-- Annonce 4
INSERT INTO ad (title, description, author, price, createdAt, imageUrl, city, categoryId)
VALUES ('Chaussures de randonnée', 'Taille 42, imperméables', 'Alice', 60.00, '2023-09-12', 'http://example.com/chaussures.jpg', 'Bordeaux', 1);

-- Annonce 5
INSERT INTO ad (title, description, author, price, createdAt, imageUrl, city, categoryId)
VALUES ('Sac à dos', '20 litres, idéal pour la randonnée', 'Pierre', 40.00, '2023-09-15', 'http://example.com/sac.jpg', 'Paris', 1);

-- Annonce 6
INSERT INTO ad (title, description, author, price, createdAt, imageUrl, city, categoryId)
VALUES ('Guitare électrique', 'Marque Gibson, modèle Les Paul', 'Valérie', 950.00, '2023-08-20', 'http://example.com/guitare.jpg', 'Lyon', 3);

-- Annonce 7
INSERT INTO ad (title, description, author, price, createdAt, imageUrl, city, categoryId)
VALUES ('Lampe vintage', 'Années 60, couleur orange', 'Maxime', 80.00, '2023-09-01', 'http://example.com/lampe.jpg', 'Bordeaux', 3);

-- Annonce 8
INSERT INTO ad (title, description, author, price, createdAt, imageUrl, city, categoryId)
VALUES ('Machine à café', 'Marque Nespresso, modèle Vertuo', 'Claire', 100.00, '2023-08-25', 'http://example.com/cafetiere.jpg', 'Paris', 3);

-- Annonce 9
INSERT INTO ad (title, description, author, price, createdAt, imageUrl, city, categoryId)
VALUES ('Appareil photo', 'Marque Canon, modèle EOS 200D', 'Vincent', 450.00, '2023-09-07', 'http://example.com/camera.jpg', 'Lyon', 3);

-- Annonce 10
INSERT INTO ad (title, description, author, price, createdAt, imageUrl, city, categoryId)
VALUES ('Bureau en bois', 'En chêne massif, avec 3 tiroirs', 'Emilie', 180.00, '2023-09-09', 'http://example.com/bureau.jpg', 'Bordeaux', 3);

-- Annonce 11
INSERT INTO ad (title, description, author, price, createdAt, imageUrl, city, categoryId)
VALUES ('Montre connectée', 'Marque Garmin, modèle Forerunner 645', 'Julien', 200.00, '2023-08-30', 'http://example.com/montre.jpg', 'Paris', 1);

-- Annonce 12
INSERT INTO ad (title, description, author, price, createdAt, imageUrl, city, categoryId)
VALUES ('Chapeau de paille', 'Taille M, parfait pour l''été', 'Sandra', 20.00, '2023-09-14', 'http://example.com/chapeau.jpg', 'Lyon', 1);

-- Annonce 13
INSERT INTO ad (title, description, author, price, createdAt, imageUrl, city, categoryId)
VALUES ('Livre de cuisine', 'Recettes végétariennes faciles', 'Marc', 15.00, '2023-09-16', 'http://example.com/livre.jpg', 'Bordeaux', 3);

-- Annonce 14
INSERT INTO ad (title, description, author, price, createdAt, imageUrl, city, categoryId)
VALUES ('Tapis de yoga', 'Épaisseur 5mm, couleur violet', 'Isabelle', 30.00, '2023-09-18', 'http://example.com/tapis.jpg', 'Paris', 3);

-- Annonce 15
INSERT INTO ad (title, description, author, price, createdAt, imageUrl, city, categoryId)
VALUES ('Tablette graphique', 'Marque Wacom, modèle Intuos S', 'François', 80.00, '2023-08-28', 'http://example.com/tablette.jpg', 'Lyon', 3);

-- Annonce 16
INSERT INTO ad (title, description, author, price, createdAt, imageUrl, city, categoryId)
VALUES ('Robe d''été', 'Taille 38, couleur bleue', 'Nathalie', 50.00, '2023-09-11', 'http://example.com/robe.jpg', 'Bordeaux', 1);

-- Annonce 17
INSERT INTO ad (title, description, author, price, createdAt, imageUrl, city, categoryId)
VALUES ('Tondeuse à gazon', 'Marque Bosch, électrique', 'Philippe', 100.00, '2023-08-22', 'http://example.com/tondeuse.jpg', 'Paris', 3);

-- Annonce 18
INSERT INTO ad (title, description, author, price, createdAt, imageUrl, city, categoryId)
VALUES ('Batterie de cuisine', 'Set de 5 casseroles et poêles', 'Aurélie', 120.00, '2023-09-02', 'http://example.com/batterie.jpg', 'Lyon', 3);

-- Annonce 19
INSERT INTO ad (title, description, author, price, createdAt, imageUrl, city, categoryId)
VALUES ('Chaussures de football', 'Taille 43, marque Adidas', 'Romain', 50.00, '2023-09-13', 'http://example.com/football.jpg', 'Bordeaux', 20);

-- Annonce 20
INSERT INTO ad (title, description, author, price, createdAt, imageUrl, city, categoryId)
VALUES ('Sacoche pour ordinateur', 'Pour ordinateurs jusqu''à 15 pouces', 'Laura', 40.00, '2023-09-06', 'http://example.com/sacoche.jpg', 'Paris', 1);


-- Queries 01

SELECT * FROM ad;

SELECT * FROM ad WHERE city = 'Bordeaux';

DELETE FROM ad WHERE price > 40.00;

UPDATE ad 
SET price = 0.00 
WHERE createdAt = '2023-09-15';

SELECT AVG(price) AS average_price 
FROM ad 
WHERE city = 'Paris';

SELECT city, AVG(price) AS average_price 
FROM ad 
GROUP BY city;

-- Queries 02

SELECT * FROM ad WHERE categoryId = (SELECT id FROM category WHERE name = 'vêtement');

SELECT * FROM ad WHERE categoryId IN (SELECT id FROM category WHERE name IN ('vêtement', 'voiture'));

SELECT AVG(price) AS average_price FROM ad WHERE categoryId = (SELECT id FROM category WHERE name = 'autre');

SELECT * FROM ad WHERE categoryId IN (SELECT id FROM category WHERE name LIKE 'v%');
