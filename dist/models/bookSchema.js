import Joi from "joi";
export var bookSchema = Joi.object({
    book: Joi.string().required(),
    imgBook: Joi.string().required()
});
