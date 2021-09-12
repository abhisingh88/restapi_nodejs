const express = require("express")
const app = express()
require("./db/conn")
const router = require("./routers/routedb")

const port = process.env.PORT || 3000

app.use(express.json())

app.use(router)

app.listen(port, () => {
    console.log(`server is running at port no. ${port}`);
})