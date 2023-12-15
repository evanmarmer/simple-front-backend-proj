//express server
import express from 'express'
import { dirname, join } from 'path'
import { fileURLToPath } from 'url'

let app = express()

app.use(express.json())

let db = []

// console.log(import.meta.url)
// console.log(fileURLToPath(import.meta.url))
// console.log(dirname(fileURLToPath(import.meta.url)))
// console.log(join(dirname(fileURLToPath(import.meta.url)), '/public/index.html'))

app.get('/', (req, res) => {
    res.sendFile(join(dirname(fileURLToPath(import.meta.url)), '/public/index.html'))
})

app.get('/css', (req, res) => {
    res.sendFile(join(dirname(fileURLToPath(import.meta.url)), '/public/style.css'))
})

app.get('/js', (req, res) => {
    res.sendFile(join(dirname(fileURLToPath(import.meta.url)), '/public/main.js'))
})

app.post('/create-fighter', (req, res) => {
    // console.log(req.body)
    db.push(req.body)
    res.status(200).send(db)
})

app.get('/fighters', (req, res) => {
    res.status(200).send(db)
})

app.listen(8080, () => {
    console.log('we havestarted the server on port 8080')
})

