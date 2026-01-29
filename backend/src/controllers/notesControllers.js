import Note from "../models/Note.js";

export async function getALLNotes(_,res){ // req never be called, use "_" to replace it
    try{
        const notes = await Note.find().sort({createdAt:-1}); // -1 will sort in desc order(newest first)
        res.status(200).json(notes);

    } catch(error){
        console.error("Error in getAllNotes controller", error);
        res.status(500).json({message:"Internal server error"});
    }
}

export async function getNote(req, res) {
    try {
        const note = await Note.findById(req.params.id);
        if (!note) {
            return res.status(404).json({ message: "Note not found" });
        }
        res.status(200).json(note);
    } catch (error) {
        console.error("Error in getNote controller", error);
        res.status(500).json({ message: "Internal server error" });
    }
}

export async function createNote(req,res){
    try{
        const {title,content} = req.body;
        const newNote = new Note({title,content});
        await newNote.save();
        res.status(201).json({message:"Note created successfully"});

    }catch(error){
        console.error("Error in createNote controller", error);
        res.status(500).json({message:"Internal server error"});
    }
    
}

export async function updateNote(req,res){
    try{
        const {title,content} = req.body;
        const updatedNote = await Note.findByIdAndUpdate(req.params.id, {title,content},{new:true}); //if new is true, if will return the updated result, O/W, old result
        if(!updatedNote){
          return  res.status(404).json({message:"Not found"});
        }
        res.status(200).json(updatedNote);
    } catch(error){
        console.error("Error in updateNote controller", error);
        res.status(500).json({message:"Internal server error"});
    }
}

export async function deleteNote(req,res){
    try{
       const deletedNote = await Note.findByIdAndDelete(req.params.id);
       if(!deletedNote){
        return  res.status(404).json({message:"Not found"});
       }
       res.status(200).json({
        message:"deleate successfully",
        deletedNote
    });
    } catch(error){
        console.error("Error in deleteNote controller", error);
        res.status(500).json({message:"Internal server error"});
    }
}

// example of how Callback Function get parameter
function myGet(path, callback){
    const req={url:path, method:'GET', headers:'Header data'}
    const res={
        status:(code) =>console.log(`set status code:${code}`),
        send:(body)=> console.log(`send to browser ${body}`)
    }
    callback(req,res);
}

myGet("",(req, res)=>{});
///