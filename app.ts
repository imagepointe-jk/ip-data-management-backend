import express, { json } from "express";
import { getDesigns, getSingleDesign } from "./dbAccess";
import { parseDesignsQuery } from "./query";
import { BAD_REQUEST, NOT_FOUND, OK } from "./statusCodes";
import { message } from "./utility";
import { ZodError } from "zod";
import { validateRequest } from "zod-express-middleware";
import { designsParamsSchema } from "./schema";

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

app.get(
  "/designs/:designId?",
  validateRequest({ params: designsParamsSchema }),
  async (req, res) => {
    try {
      const { designId } = req.params;
      if (designId !== undefined) {
        const design = await getSingleDesign(+designId);
        if (!design)
          return res
            .status(NOT_FOUND)
            .send(message(`Design ${designId} not found.`));
        return res.status(OK).send(design);
      }

      const query = parseDesignsQuery(req.query);
      const designResults = await getDesigns(query);

      return res.status(OK).send(designResults);
    } catch (error) {
      if (error instanceof ZodError) {
        return res.status(BAD_REQUEST).send(error);
      }
    }
  }
);

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}`));
