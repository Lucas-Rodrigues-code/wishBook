import Joi from "joi";

export const bookSchema = Joi.object({
    book: Joi.string().required(),
    imgBook: Joi.string().required(),
  });