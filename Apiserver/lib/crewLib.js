// Get side
exports.getNotice = (req, res, Notice) =>{ 
    Notice.find((err,data)=>{
        if(err){
            console.error(err)
            return res.status(500).send({error:'database failure'})
        } 
        return res.json(data)
    }).sort({_id:-1})
}

exports.getSalaryTime = (req, res, Employee) => {
    let id = req.query.id
    console.log(id)
    Employee.findOne({employId:id}, (err, data) => {
        if(err){
            console.error(err)
            return res.json({result:0})
        }
        res.json({time:data.accuTime})
    })
}

exports.getMovieSchedule = (req, res, Schedule) => {
    Schedule.find((err, data) => {
        if(err){
            console.error(err)
            return res.status(500).send({error:'database failure'})
        }
        return res.json(data)
    })
}

// Post side

exports.login = (req, res, Employee) => {
    let id = parseInt(req.body.id)
    let pw = req.body.pw

    Employee.findOne({employId:id},(err, data)=>{
        if(data){
            console.log(data)
            if(data.password === pw){
                res.json({
                    userInfo:data,
                    result:"success"
                })
            } else {
                res.json({result:"password error"})
            }
        }else{
            res.json({result:"id error"})
        }
        
        if(err){
            console.error(err)
            res.json({result:err})
        }
    })
}

exports.register = (req, res, Employee) => {
    let empId = parseInt(req.body.id)
    // let branId = req.body.branch
    let pw = req.body.pw
    let email = req.body.email

    Employee.findOne({employId:empId}).exec((err, employee) => {
        employee.password = pw
        employee.email = email

        console.log(employee)

        employee.save((err)=>{
            if(err){
                console.error(err)
                res.json({result:0})
            }else{
                console.log("Crew registered!")
                res.json({result:1})
            }
        })
    })
}

exports.crewInfoChange = (req, res, Employee) => {

}