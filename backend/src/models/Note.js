import mongoose from "mongoose";

const noteSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    content:{
        type:String,
        required: true
    }
},{timestamps:true}); // timestamp will give createdAt, updatedAt 

const Note = mongoose.model("Note",noteSchema); // model(modelName, schema)

export default Note;