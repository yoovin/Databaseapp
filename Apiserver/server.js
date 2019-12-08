// Backend server
const app = require('express')()
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const port = process.env.PORT || 5000

// Models
const crewNotice = require('./Model/Crewnotice')
const Employee = require('./Model/Employee')
const Schedule = require('./Model/Schedule')

// Library
const crewLib = require('./lib/crewLib')
const adminLib = require('./lib/adminLib')

// Connect Database
var db = mongoose.connection
db.on('error', console.error)
db.once('open', () => {
    console.log("Connected to mongod server")
})

mongoose.connect("mongodb://localhost/dataapp")

// app.use
app.use(bodyParser.json())


// app.get
app.get('/crew/getnotice', (req, res) => {
    crewLib.getNotice(req, res, crewNotice)
})

app.get('/crew/getsalarytime', (req, res) => {
    crewLib.getSalaryTime(req, res, Employee)
})

app.get('/crew/getmovieschedule', (req, res) => {
    crewLib.getMovieSchedule(req, res, Schedule)
})

// app.post

// Crew
app.post('/crew/login', (req, res) => {
    crewLib.login(req, res, Employee)
})

app.post('/crew/register', (req, res) => {
    crewLib.register(req, res, Employee)
})

// Admin
app.post('/post/addcrewnotice', (req, res) => {
    adminLib.addCrewNotice(req, res, crewNotice)
})

app.post('/post/crewinsert', (req, res) => {
    adminLib.crewInsert(req, res, Employee)
})

app.post('/post/addmovieschedule', (req, res) => {
    adminLib.addMovieSchedule(req, res, Schedule)
})


// 서버에서 돌리는 수준의 데이터들


// app.listen
app.listen(port, console.log("Database app 돌아가는중"))