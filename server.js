const express = require('express')
const app = express()
const port = 3000

app.use(express.urlencoded({ extended: false }))
app.use(express.json())

app.get('/getIp', (req, res) => {

    const ipAddresses = req.ip;
    res.json({ userIP: ipAddresses })
    console.log(ipAddresses)

})




app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})