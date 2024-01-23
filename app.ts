import express, { json } from "express";
import { prisma } from "./prismaClient";

const app = express();
app.use(json());

app.get("/", async (req, res) => {
  const designs = await prisma.design.findMany();
  return res.status(200).send(designs);
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}`));
