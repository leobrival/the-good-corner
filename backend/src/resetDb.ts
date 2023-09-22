import db from "./db";
import { Ad } from "./entities/ad";

async function main() {
  await db.initialize();
  const ad1 = Ad.create({ title: "Vélo de course", description: "Vélo en excellent état, utilisé seulement quelques fois", author: "Jean", price: 350.50, createdAt: "2023-09-19", imageUrl: "http://example.com/velo1.jpg", location: "Bordeaux"}).save();
  const ad2 = Ad.create({ title: "Canapé en cuir", description: "Canapé 3 places, couleur marron", author: "Sophie", price: 750.00, createdAt: "2023-09-10", imageUrl: "http://example.com/canape.jpg", location: "Paris"}).save();
  const ad3 = Ad.create({title: "MacBook Pro",description: "Ordinateur 15 pouces 256GB SSD 16GB RAM",author: "Luc",price: 1200.00,createdAt: "2023-09-05",imageUrl: "http://example.com/macbook.jpg",location: "Lyon"}).save();
  const ad4 = Ad.create({ title: "Chaussures de randonnée", description: "Taille 42, imperméables", author: "Alice", price: 60.00, createdAt: "2023-09-12", imageUrl: "http://example.com/chaussures.jpg", location: "Bordeaux"}).save();
  const ad5 = Ad.create({ title: "Sac à dos", description: "20 litres, idéal pour la randonnée", author: "Pierre", price: 40.00, createdAt: "2023-09-15", imageUrl: "http://example.com/sac.jpg", location: "Paris"}).save();
  const ad6 = Ad.create({ title: "Guitare électrique", description: "Marque Gibson, modèle Les Paul", author: "Valérie", price: 950.00, createdAt: "2023-08-20", imageUrl: "http://example.com/guitare.jpg", location: "Lyon"}).save();
  const ad7 = Ad.create({ title: "Lampe vintage", description: "Années 60, couleur orange", author: "Maxime", price: 80.00, createdAt: "2023-09-01", imageUrl: "http://example.com/lampe.jpg", location: "Bordeaux"}).save();
  const ad8 = Ad.create({ title: "Machine à café", description: "Marque Nespresso, modèle Vertuo", author: "Claire", price: 100.00, createdAt: "2023-08-25", imageUrl: "http://example.com/cafetiere.jpg", location: "Paris"}).save();
  const ad9 = Ad.create({title: "Appareil photo", description: "Marque Canon, modèle EOS 200D", author: "Vincent", price: 450.00, createdAt: "2023-09-07", imageUrl: "http://example.com/camera.jpg", location: "Lyon"}).save();
  const ad10 = Ad.create({ title: "Bureau en bois", description: "En chêne massif, avec 3 tiroirs", author: "Emilie", price: 180.00, createdAt: "2023-09-09", imageUrl: "http://example.com/bureau.jpg", location: "Bordeaux"}).save();
  const ad11 = Ad.create({ title: "Montre connectée", description: "Marque Garmin, modèle Forerunner 645", author: "Julien", price: 200.00, createdAt: "2023-08-30", imageUrl: "http://example.com/montre.jpg", location: "Paris"}).save();
  const ad12 = Ad.create({ title: "Chapeau de paille", description: "Taille M, parfait pour l''été", author: "Sandra", price: 20.00, createdAt: "2023-09-14", imageUrl: "http://example.com/chapeau.jpg", location: "Lyon"}).save();
  const ad13 = Ad.create({ title: "Livre de cuisine", description: "Recettes végétariennes faciles", author: "Marc", price: 15.00, createdAt: "2023-09-16", imageUrl: "http://example.com/livre.jpg", location: "Bordeaux"}).save();
  const ad14 = Ad.create({ title: "Tapis de yoga", description: "Épaisseur 5mm, couleur violet", author: "Isabelle", price: 30.00, createdAt: "2023-09-18", imageUrl: "http://example.com/tapis.jpg", location: "Paris"}).save();
  const ad15 = Ad.create({ title: "Tablette graphique", description: "Marque Wacom, modèle Intuos S", author: "François", price: 80.00, createdAt: "2023-08-28", imageUrl: "http://example.com/tablette.jpg", location: "Lyon"}).save();
  const ad16 = Ad.create({ title: "Robe d''été", description: "Taille 38, couleur bleue", author: "Nathalie", price: 50.00, createdAt: "2023-09-11", imageUrl: "http://example.com/robe.jpg", location: "Bordeaux"}).save();
  const ad17 = Ad.create({ title: "Tondeuse à gazon", description: "Marque Bosch, électrique", author: "Philippe", price: 100.00, createdAt: "2023-08-22", imageUrl: "http://example.com/tondeuse.jpg", location: "Paris"}).save();
  const ad18 = Ad.create({ title: "Batterie de cuisine", description: "Set de 5 casseroles et poêles", author: "Aurélie", price: 120.00, createdAt: "2023-09-02", imageUrl: "http://example.com/batterie.jpg", location: "Lyon"}).save();
  const ad19 = Ad.create({ title: "Chaussures de football", description: "Taille 43, marque Adidas", author: "Romain", price: 50.00, createdAt: "2023-09-13", imageUrl: "http://example.com/football.jpg", location: "Bordeaux"}).save();
  const ad20 = Ad.create({ title: "Sacoche pour ordinateur", description: "Pour ordinateurs jusqu''à 15 pouces", author: "Laura", price: 40.00, createdAt: "2023-09-06", imageUrl: "http://example.com/sacoche.jpg", location: "Paris"}).save();
}

main();