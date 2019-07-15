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
loginvalidation = data => {
  const Schema = {
    username: Joi.string().required(),
    password: Joi.string()
      .required()
      .min(8)
  };
  return Joi.validate(data, Schema);
};

module.exports.registerValidation = registervalidation;
module.exports.loginValidation = loginvalidation;
