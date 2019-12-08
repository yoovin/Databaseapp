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

exports.getCrews = (req, res, Employee) => {
    Employee.find((err,data)=>{
        if(err){
            console.error(err)
            return res.status(500).send({error:'database failure'})
        } 
        return res.json(data)
    })
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
    let employId = parseInt(req.body.employId)
    let branchId = parseInt(req.body.branchId)
    let employee = new Employee({
        employId: employId,
        branchId: branchId,
        name:req.body.name,
        tel: req.body.tel
    })
    employee.save(err => {
        if(err){
            console.error(err)
            res.json({result:0})
        } else {
            console.log("Crew added!")
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