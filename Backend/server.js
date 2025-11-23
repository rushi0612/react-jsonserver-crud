const jsonServer = require('json-server')
const multer  = require('multer')
const path = require('path')

const server = jsonServer.create()
const router = jsonServer.router('db.json')
const middlewares = jsonServer.defaults()

// Set default middlewares (logger, static, cors and no-cache)
server.use(middlewares)

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'public/images')
  },
  filename: function (req, file, cb) {
    let date = new Date()
    let imageFilename = date.getTime() + '-' + file.originalname
    req.body.imageFilename = imageFilename
    cb(null, imageFilename)
  }
})

const bodyParser = multer({ storage: storage }).any()

// To handle POST, PUT and PATCH you need to use a body-parser
server.use(bodyParser)

server.post("/products",(req, res, next) => {
  let date = new Date()
  req.body.createdAt = date.toISOString()

  if(req.body.price){
    req.body.price = Number(req.body.price)
  }

  let hasError = false
  let errors = {}

  if (req.body.name.length < 2) {
    hasError = true
    errors.name = "Name should be at least 2 characters"
  }
  if (req.body.price <= 0) {
    hasError = true
    errors.price = "Price should be greater than zero"
  }
  if (req.body.category.length === 0) {
    hasError = true
    errors.category = "Category is required"
  }
  if (req.body.description.length < 10) {
    hasError = true
    errors.description = "The description length should be at least 10 characters"
  }

  if (hasError){
    res.status(400).json({errors: errors})
    return
  }
  
  // Continue to JSON Server router
  next()
})

// Serve images statically before router
server.use('/images', jsonServer.static(path.join(__dirname, 'public/images')))

// Use default router (only once)
server.use(router)

server.listen(4000, () => {
  console.log('JSON Server is running')
})
