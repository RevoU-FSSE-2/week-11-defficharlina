const { Router } = require('express')
const { getAllBio, createBio, editBio, deleteBio } = require('../controller/bioController')
const authorizationMiddleware = require('../middleware/authorization-middleware.js')

const bioRouter = Router()

bioRouter.get('/', getAllBio)
bioRouter.post('/', authorizationMiddleware, createBio)
bioRouter.put('/:id', editBio)
bioRouter.delete('/:id', editBio)

module.exports = bioRouter