const product = require("../models/product.model")



//  Read All 
module.exports.findAllProducts = (req,res) =>{
    product.find().then(allProducts=>{
        console.log("All Students From DB", allProducts)
        res.json(allProducts)
    }).catch(err=>console.log(err))

}
module.exports.createProduct = (req,res) =>{
    product.create(req.body).then(newProduct=>{
        console.log("New product", newProduct)
        res.json(newProduct)
    }).catch(err=>{
        console.log(err)
        res.status(400).json({error:err})
    })
}
module.exports.findOne = (req,res) =>{
    product.findOne({_id:req.params.id}).then(product=>{
        console.log("This Student", product)
        res.json(product)
    }).catch(err=>{
        console.log(err)
        res.json({error:err})
    })
}
module.exports.updateProduct = (req,res) =>{
    product.findByIdAndUpdate(
        {_id:req.params.id}, req.body ,{new:true, runValidators:true}
    ).
    then(newProduct=>{
        console.log("New product", newProduct)
        res.json(newProduct)
    }).catch(err=>{
        console.log(err)
        res.status(400).json({error:err})
    })
}
module.exports.deleteProduct = (req,res) =>{
   product.deleteOne(
        {_id:req.params.id}
    ).
    then(result=>{
        console.log("DELETE RESULT == ", result)
        res.json(result)
    }).catch(err=>{
        console.log(err)
        res.json({error:err})
    })
}