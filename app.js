const fs = require('fs')
const path = require('path')

const express = require('express')

const app = express()
const port = 3000


app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))

app.use(express.static(path.join(__dirname, 'public')))

app.get('/', (request, response) => {
    fs.readFile('./data/db.json', (error, data) => {
        if (error) throw error
        const collection = JSON.parse(data)
        response.render('index', {
            titre: 'ma collection',
            collection: collection
        })

    })
})

app.listen(port, () => {
    console.log(`listen on port ${port}`)
})