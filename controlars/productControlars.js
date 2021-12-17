const Product = require('../modals/productSchema');

// get all data
const allData= async(req,res)=>{
try{
    const allProductData =await Product.find({});
    if(allProductData){
        return res.json({msg:'Product Inserted Successfully!',data:allProductData});
    }else{
        return res.json({msg:"Product Insert Faild"});
    }
}catch(err){
    console.log(err);
    res.json({msg:'There was an server side error'})
}

}

// get single data
const singleData=async(req,res)=>{
try{
    const singleProductData =await Product.findById(req.params.id);
    if(singleProductData){
        return res.json({msg:'Product Found Successfully!',data:singleProductData});
    }else{
        return res.json({msg:"Product was not found"});
    }
}catch(err){
    console.log(err)
    res.json({msg:'There was an server Side Error'});
}
}

// post a single Data
const postData=async(req,res)=>{

try{
    const postInfo= {
        image: req.body.image,
        price: req.body.price,
        title:req.body.title,
        details:req.body.details,
        category:req.body.category,
        username:req.body.username,
        userImg:req.body.userImg,
    };

    console.log(postInfo);
    const ProductSave =await Product.save(postInfo);
    if(ProductSave){
        return res.json({msg:'Product Post Successfully!'});
    }else{
        return res.json({msg:"Product Post Fild"});
    }

}catch(err){
    console.log(err)
    res.json({msg:'There was an server Side Error'});
}
}

// delete single Data
const deleteData=async(req,res)=>{
    try{
        const deleteData = await Product.findByIdAndRemove(req.params.id);
        if(deleteData){
            res.json({msg:'Successfully deleted'})
        }else{
            res.json({msg:'Delete failed'})
        }
    }catch(err){
        console.log(err)
        res.json({msg:'There was an server Side Error'});
    }
}

// update single Data
const updateData=async(req,res)=>{
    try{
    const updateProduct = await Product.findByIdAndUpdate(req.params.id);
    if(updateProduct){
        res.json({msg:'Successfully Updated'})
    }else{
        res.json({msg:'Updated failed'})
    }
    }catch(err){
        console.log(err)
        res.json({msg:'There was an server Side Error'});
    }
}

module.exports={
    allData,
    singleData,
    postData,
    deleteData,
    updateData
}