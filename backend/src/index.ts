import express, { Request, Response } from "express";
import { Ad } from "./utils/type";
import sqlite3 from "sqlite3";

const db = new sqlite3.Database('good_corner.sqlite');

const app = express();
const port = 3000;

app.use(express.json())

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
});

app.get("/ads", (req: Request, res: Response) => {
  db.all("SELECT * FROM ad", (err, rows) => {
    if (!err) return res.send(rows);
    console.log(err);
    res.sendStatus(500);
  });
});

app.post("/ads", (req: Request, res: Response) => {
  const newAd: Ad = {
    ...req.body,
    createdAt: new Date().toISOString(),
  };

  db.run(
    "INSERT INTO ad (title, author, description, price, imageUrl, city, createdAt) VALUES ($title, $author, $description, $price, $imageUrl, $city, $createdAt)",
    {
      $title: req.body.title,
      $author: req.body.author,
      $description: req.body.description,
      $price: req.body.price,
      $imageUrl: req.body.imageUrl,
      $city: req.body.city,
      $createdAt: newAd.createdAt,
      // No category
    },
    function (this: any, err: any) {
      if (!err)
        return res.send({
          ...newAd,
          id: this.lastID,
        });
      console.log(err);
      res.sendStatus(500);
    }
  );
});

app.delete("/ads/:id", (req: Request, res: Response) => {
  db.get("SELECT * FROM ad WHERE id = ?", [req.params.id], (err, row) => {
    if (err) {
      console.log(err);
      return res.sendStatus(500);
    }
    if (!row) return res.sendStatus(404);
    db.run("DELETE FROM ad WHERE id = ?", [req.params.id], (err: any) => {
      if (!err) return res.sendStatus(204);
      console.log(err);
      res.sendStatus(500);
    });
  });
});

app.patch("/ads/:id", (req: Request, res: Response) => {
  db.get("SELECT * FROM ad WHERE id = ?", [req.params.id], (err, row) => {
    if (err) {
      console.log(err);
      return res.sendStatus(500);
    }
    if (!row) return res.sendStatus(404);

    // Creates a string with this shape : "title = $title, description = $description, ..."
    const setProps = Object.keys(req.body)
      .reduce<string[]>((acc, prop) => [...acc, `${prop} = $${prop}`], [])
      .join(", ");

    // Creates an object with this shape : {$title: "title sent by client", "$description: " description sent by client", ...}
    const propsToUpdate = Object.keys(req.body).reduce(
      (acc, prop) => ({ ...acc, [`$${prop}`]: req.body[prop] }),
      {}
    );

    db.run(
      `UPDATE ad SET ${setProps} WHERE id = $id`,
      { ...propsToUpdate, $id: req.params.id },
      (err: any) => {
        if (!err) return res.send({ ...row, ...req.body });
        console.log(err);
        res.sendStatus(500);
      }
    );
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`);
});
