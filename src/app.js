const express = require("express")

require("./database/mongoose.js")
const userRouter = require("./router/user")
const taskRouter = require("./router/task")

const app = express()
const port = process.env.PORT || 3000

/*app.use((req, res, next) => {
    res.status(503).send('Service unavailable!')
})*/

app.use(express.json())

app.use(userRouter)
app.use(taskRouter)

app.listen(port, () => {
    console.log("⚡[Running] Server is running up on port : " + port)
})
