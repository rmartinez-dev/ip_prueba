const express = require('express')
const app = express()
const port = 3000

app.use(express.urlencoded({ extended: false }))
app.use(express.json())

app.get('/getIp', (req, res) => {

    const clientIP = req.headers['x-forwarded-for']?.split(',').shift() || req.socket?.remoteAddress;
    res.json({ userIP: clientIP })
    console.log(ipAddresses)

})




app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})