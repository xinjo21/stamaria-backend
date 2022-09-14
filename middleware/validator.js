import Joi from '@hapi/joi'

export function registerValidation(data){
  const schema = Joi.object({
    name: Joi.string().min(6).required(),
    email: Joi.string().min(6).required().email(),
    password: Joi.string().min(6).required(),
    roles: Joi.boolean().required()
  })

  return schema.validate(data)
}

export function loginValidation(data){
  const schema = Joi.object({
    email: Joi.string().min(6).required().email(),
    password: Joi.string().min(6).required()
  })

  return schema.validate(data)
}