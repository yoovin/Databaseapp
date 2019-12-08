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

// Post side