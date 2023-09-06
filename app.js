//const app = require('express')();
//const http = require('http').Server(app);

//const mongoose = require('mongoose');

//mongoose.connect("mongodb+srv://defficharlina:uGRHddvHnYjH74GY@revouweek11.vk6ejwz.mongodb.net/?retryWrites=true&w=majority");

//const User = require('./models/model');

/*async function insert() 
{
    await User.create({
        username:'Dita',
        email:'dita@gmail.com',
        password:'hty6784',
        role:'superadmin'
    });
}
insert();*/


require('dotenv').config()

const express = require('express')
const databaseMiddleware = require('./middleware/database-middleware.js')
const authRouter = require('./routes/auth-route.js')
const bioRouter = require('./routes/bio-route.js')
const authMiddleware = require('./middleware/authentication-middleware.js')
const swaggerUi = require('swagger-ui-express');
const yaml = require('yaml')
const fs = require('fs')
const OpenApiValidator = require('express-openapi-validator');

const openApiPath = './doc/openapi.yaml'
const file = fs.readFileSync(openApiPath, 'utf8')
const swaggerDocument = yaml.parse(file)

const app = express()

app.use(express.json())
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use(OpenApiValidator.middleware({
  apiSpec: openApiPath,
  validateRequests: true,
}))
app.use(databaseMiddleware)

/*app.get('/', (req, res)=> {
  res.send('Hello World!')
})*/
app.use('/auth', authRouter)
app.use('/bio', authMiddleware, bioRouter)

app.use((err, req, res, next) => {
  console.log(err, `<=================== error ==================`);
  res.status(err.status || 500).json({
    message: err.message,
    errors: err.errors
  })
})

/*http.listen(3000, function(){
    console.log('Server is running');
});*/

app.listen(3000, () => {
  console.log('Server is running on port 3000')
})



// app.use('/path', 
//   () => {}, 
//   () => {
//     //somehow error disini
//     // next(argument)
//   }, 
//   (req, res, next) => {}, 
//   (err, req, res, next) => {
//   res.status(err.status || 500).json({
//     message: err.message,
//     errors: err.errors
//   })
// })