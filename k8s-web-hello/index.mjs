import os from "os"
import express from "express";

const PORT = 3000
const app = express()

app.get("/", (_, res) => {
    const helloMessage = `hello from ${os.hostname()}`
    console.log(helloMessage)
    res.send(helloMessage)
})


app.listen(PORT, () => {
    console.log(`server created at $PORT`)
})