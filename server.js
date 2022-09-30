const express = require('express')
const app = express()
const port = 3000

app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use(express.static('./index.html'))

app.get('/', (req, res) => {

    const ipAddresses = req.ip.split(":").pop();
    res.json({ userIP: ipAddresses })
    console.log(ipAddresses)

})




app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})