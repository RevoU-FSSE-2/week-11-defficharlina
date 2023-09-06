const { Router } = require('express')
const { getAllBio, createBio } = require('../controller/bioController')
const authorizationMiddleware = require('../middleware/authorization-middleware.js')

const bioRouter = Router()

bioRouter.get('/', getAllBio)
bioRouter.post('/', authorizationMiddleware, createBio)

module.exports = bioRouter