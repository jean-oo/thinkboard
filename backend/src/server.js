import express from "express"; 
import notesRoutes from "./routes/notesRoutes.js"
import { connectDB } from "./config/db.js";
import dotenv from "dotenv"; // for getting .env value
import ratelimiter from "./middleware/rateLimiter.js"
import cors from "cors"

dotenv.config(); // for getting .env value

const app = express();
const PORT = process.env.PORT || 5001;

// middleware: is a function that runs in the middle between the request and the response. process in the backend
app.use(cors({origin:"http://localhost:5173"}));
app.use(express.json()); // allows req.body be parsed
app.use(ratelimiter);


app.use("/api/notes", notesRoutes);
connectDB().then(()=>{
    app.listen(PORT,()=>{
        console.log("Server started on PORT:5001");
    })
})
