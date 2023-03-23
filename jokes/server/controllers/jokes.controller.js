const joke = require("../models/jokes.model")


module.exports.findAllJokes = (req,res) =>{
    joke.find().then(allJokes=>{
        console.log("All jokes From DB", allJokes)
        res.json(allJokes)
    }).catch(err=>console.log(err))
}

module.exports.findOne = (req,res) =>{
    joke.findOne({_id:req.params.id}).then(joke=>{
        console.log("This joke", joke)
        res.json(joke)
    }).catch(err=>{
        console.log(err)
        res.json({error:err})
    })
}

module.exports.createJoke = (req,res) =>{
    joke.create(req.body).then(newJoke=>{
        console.log("new joke", newJoke)
        res.json(newJoke)
    }).catch(err=>{
        console.log(err)
        res.json({error:err})
    })
}

module.exports.updateJoke = (req,res) =>{
    joke.findByIdAndUpdate(
        {_id:req.params.id}, req.body ,{new:true, runValidators:true}
    ).
    then(newJoke=>{
        console.log("New joke", newJoke)
        res.json(newJoke)
    }).catch(err=>{
        console.log(err)
        res.json({error:err})
    })
}

module.exports.deleteJoke = (req,res) =>{
    joke.deleteOne(
        {_id:req.params.id}
    ).then(result=>{
        console.log("DELETE RESULT == ", result)
        res.json(result)
    }).catch(err=>{
        console.log(err)
        res.json({error:err})
    })
}