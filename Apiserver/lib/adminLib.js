// Get side
exports.getNotice = (req, res, Notice) => { 
    Notice.find((err,data)=>{
        if(err){
            console.error(err)
            return res.status(500).send({error:'database failure'})
        } 
        return res.json(data)
    }).sort({_id:-1})
}

// Post side

exports.addCrewNotice = (req, res, crewNotice) => {
    let notice = new crewNotice({
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
}

exports.crewInsert = (req, res, Employee) => {
    let employee = new Employee({
        employId:req.body.employId,
        branchId:req.body.branchId,
        name:req.body.name,
        class:req.body.class,
        tel: req.body.tel
    })
    employee.save(err => {
        if(err){
            console.error(err)
            res.json({result:0})
        } else {
            console.log("Notice added!")
            res.json({result:1})
        }
    })
}

exports.addMovieSchedule = (req, res, Schedule) => {
    let schedule = new Schedule({
        title: req.body.title,
        onScreen: req.body.onScreen,
        offScreen: req.body.offScreen
    })
    schedule.save(err => {
        if(err){
            console.error(err)
            res.json({result:0})
        } else {
            console.log("Schedule added!")
            res.json({result:1})
        }
    })
}