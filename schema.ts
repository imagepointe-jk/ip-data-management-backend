import { z } from "zod";

const intParseableString = z.string().refine((str) => !isNaN(parseInt(str)));

export const designsParamsSchema = z.object({
  designId: intParseableString.optional(),
});
