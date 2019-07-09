const Joi = require("@hapi/joi");

registervalidation = data => {
  const Schema = {
    username: Joi.string().required(),
    email: Joi.string()
      .required()
      .email(),
    password: Joi.string()
      .required()
      .min(8)
  };
  return Joi.validate(data, Schema);
};

module.exports = registervalidation;
