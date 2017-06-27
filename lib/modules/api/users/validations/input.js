const Joi = require('joi')
const validateOptions = require('../../validations').validateOptions

// --------------------------------------------------
//    Config - Input Validations
// --------------------------------------------------

const LoginPayload = {
  payload: Joi.object().keys({
    user: Joi.object().keys({
      email: Joi.string().email().required(),
      password: Joi.string().required()
    })
  }),
  options: validateOptions.options,
  failAction: validateOptions.failAction
}

const RegisterPayload = {
  payload: Joi.object().keys({
    user: Joi.object().keys({
      username: Joi.string().required(),
      email: Joi.string().email().required(),
      password: Joi.string().required()
    })
  }),
  options: validateOptions.options,
  failAction: validateOptions.failAction
}

const UpdatePayload = {
  payload: Joi.object().keys({
    user: Joi.object().keys({
      username: Joi.string(),
      email: Joi.string().email(),
      password: Joi.string().allow(''),
      bio: Joi.string().allow(''),
      image: Joi.string().uri().allow('')
    })
  }),
  options: validateOptions.options,
  failAction: validateOptions.failAction
}

module.exports = {
  LoginPayload,
  RegisterPayload,
  UpdatePayload
}