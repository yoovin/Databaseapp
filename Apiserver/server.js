// Backend server
const app = require('express')()
const cors = require('cors')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const port = process.env.PORT || 5000

// Models
const Notice = require('./Model/Crewnotice')

// Library
const crewLib = require('./lib/crewLib')

// Connect Database
var db = mongoose.connection
db.on('error', console.error)
db.once('open', ()=>{
    console.log("Connected to mongod server")
})

mongoose.connect("mongodb://localhost/dataapp")

// app.use
app.use(bodyParser.json())


// app.get
app.get('/crew/getnotice', (req, res) => {
    crewLib.getNotice(req, res, Notice)
})

// app.post
app.post('/post/addcrewnotice', (req, res) => {
    let notice = new Notice({
        title: req.body.title,
        desc: req.body.desc
    })
    notice.save(err =>{
        if(err){
            console.error(err)
            res.json({result:0})
        } else {
            console.log("Notice added!")
            res.json({result:1})
        }
    })
})

// app.listen
app.listen(port, console.log("Database app 돌아가는중"))