import os from "os"
import fetch from "node-fetch"
import express from "express";

const PORT = 3000
const app = express()

app.get("/", (_, res) => {
    const helloMessage = `hello from ${os.hostname()}`
    console.log(helloMessage)
    res.send(helloMessage)
})

app.get("/nginx", async (_, res) => {
    // connect to different node through name, as it is static and ClusterIP is dynamic
    const url = 'http://nginx'
    const response = await fetch(url)
    const body = await response.text();
    res.send(body)
})


app.listen(PORT, () => {
    console.log(`server created at $PORT`)
})