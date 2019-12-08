// Backend server
const app = require('express')()
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const port = process.env.PORT || 5000

// Models
const crewNotice = require('./Model/Crewnotice')
const Employee = require('./Model/Employee')
const Schedule = require('./Model/Schedule')
const Movie = require('./Model/Movie')
const Maintenance = require('./Model/Maintenance')
const Cafeteria = require('./Model/Cafeteria')

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
// Crew
app.get('/crew/getnotice', (req, res) => {
    crewLib.getNotice(req, res, crewNotice)
})

app.get('/crew/getsalarytime', (req, res) => {
    crewLib.getSalaryTime(req, res, Employee)
})

app.get('/crew/getmovieschedule', (req, res) => {
    crewLib.getMovieSchedule(req, res, Schedule)
})

// Admin
app.get('/admin/getcrews',(req, res) => {
    adminLib.getCrews(req, res, Employee)
})

app.get('/admin/getmovies', (req, res) => {
    adminLib.getMovies(req, res, Movie)
})

app.get('/admin/getcafes', (req, res) =>{
    adminLib.getCafes(req, res, Cafeteria)
})

app.get('/admin/getmains', (req, res) =>{
    adminLib.getMains(req, res, Maintenance)
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

app.post('/post/addmovie', (req, res) => {
    adminLib.addMovie(req, res, Movie)
})

app.post('/post/addmain', (req, res) => {
    adminLib.addMain(req, res, Maintenance)
})

app.post('/post/addcafe', (req, res) => {
    adminLib.addCafe(req, res, Cafeteria)
})


// 서버에서 돌리는 수준의 데이터들
var task = {}
var taskData = [0,0,0]

app.get('/crew/gettask', (req, res) => {
    res.json(task)
})

app.get('/crew/gettasknum', (req, res) => {
    res.send(taskData)
})

app.post('/post/addcrewtask', (req, res) => {
    task[req.body.id] = req.body.task
    if(req.body.task === "Ticketing"){
        taskData[0] = taskData[0] + 1
    }else if(req.body.task === "Cafeteria"){
        taskData[1] = taskData[1] + 1
    }else if(req.body.task === "Maintenance"){
        taskData[2] = taskData[2] + 1
    }
    res.json({result:1})
})

// app.listen
app.listen(port, console.log("Database app 돌아가는중"))