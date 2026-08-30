import  express  from "express";
import { prisma } from "db/client";

const app = express();
app.use(express.json());

app.post("/",async (req,res) => {
    const {username , password } = req.body;
    if(!username || !password){
        res.status(400).json({error: "Username and password required"});
        return
    }
    const user = await prisma.user.create({
        data: {
            username,
            password
        }
    })
    res.json({
        user
    })

})
app.get("/",async (req,res) =>{
    const user = await prisma.user.findMany()
    if(user){
        res.json({
            user
        })
    }else{
        res.json({
            error: "Failed to get the user data"
        })
    }
})

app.listen(3002);
