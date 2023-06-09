exports.findAllDatafromDatabase = async(req,res) => {
    try{
        const {leader ,state ,date} = req.query;
        if(leader){
            console.log(leader )
        }
        if(state){
            console.log(leader ,state)
        }

    }
    catch(err){
        console.log(err)
    }
}