const mongodb = require("mongodb");
const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/mydatabase",{
    useNewUrlParser : true,
    useUnifiedTopology: true
})
.then(() => {
    console.log("connection successfull....")
})
.catch((err) => {
    console.log(err)
})

// A mongoose schema define the structure of the document.
// create a schema
const mycollection = new mongoose.Schema({
    name : {
        type : String,
        require : true
    },
    age  : {
        type :Number,
        require : true},
    active : Boolean

})


// mongoose model is a wrapper on the mongoose schema.
// create model
const Mycollection = new mongoose.model("Mycollection",mycollection)

// create document or insert 
const createDocument = async()=> {
    try{
        const reactMycollection = new Mycollection({
            name : "Rinki",
            age : 23,
            active : true
        })
    
        const result = await reactMycollection.save()
        console.log(result)
    }catch(err){console.log(err)}
}
createDocument()

//crud operation 
