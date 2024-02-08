import express, { json } from "express";
import { getDesigns } from "./dbAccess";
import { parseDesignsQuery } from "./query";

const app = express();
const isDevMode = app.get("env") === "development";

app.use((req, res, next) => {
  const origin = req.headers.origin;
  if (isDevMode) {
    res.header("Access-Control-Allow-Origin", origin);
  }
  res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE");
  res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
});

app.use(json());

app.get("/designs", async (req, res) => {
  const query = parseDesignsQuery(req.query);
  const designs = await getDesigns(query);

  return res.status(200).send(designs);
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}`));
