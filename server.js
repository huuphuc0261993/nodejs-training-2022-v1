const express = require('express')
const cors = require('cors')
const morgan = require("morgan")


const app = express()
var corsOptions = {
  origin: "http://localhost:3000"
};

// middleware
app.use(morgan("combined"))
app.use(express.json())
app.use(cors(corsOptions));
app.use(express.urlencoded({ extended: true }))

const db = require("./models");
db.sequelize.sync();

// testing api
app.get('/', (req, res) => {
    res.json({ message: 'hello world api'})
})

// routers
const router = require('./routers/userRouter.js')
app.use('/api/users', router)

//port

const PORT = process.env.PORT || 3000

//server

app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`)
})