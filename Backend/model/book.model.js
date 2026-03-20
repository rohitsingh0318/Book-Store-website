import mongoose from "mongoose";

const bookschema= mongoose.model({
    name:String,
    price:Number,
    category:String,
    image:String,
    title:String,
})

const Book= mongoose.model("Book", bookschema);