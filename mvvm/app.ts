import express from 'express'

const PORT = 8001
const app = express()


app.listen(PORT, () => {
    console.log(`Application running in port: ${PORT}`)
})
