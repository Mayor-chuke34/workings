const dotenv = require("dotenv");
const  express = require ('express');
const  mongoose = require ('mongoose') ;
const Product = require('./models/product.model.js');
const User = require('./models/user.model.js');
const productRoute = require("./routes/product.route.js");
const userRoute = require("./routes/user.route.js")
const app = express();
dotenv.config();


const PORT = 3000;
//middleware
app.use (express.json ());
app.use(express.urlencoded({extended:false}));

 //routes
app.use("/api/products", productRoute);
app.use("/api/users", userRoute);



app.get('/', (req, res) => {
    res.send('Hello, Express is running!');
});


// app.post("/api/users",async (req, res) =>{
//     try {
//         const user = await User.create(req.body);
//         res.status(201).json(user);
//     } catch (error) {
//         res.status(500).json({message:error.message});
//     };
// });

// app.get("/api/users",async (req, res) =>{
//     try {
//         const users = await User.find({});
//         res.status(200).json(users);
//     } catch (error) {
//         res.status(500).json({message:error.message});
//     };
// });

// app.get("/api/users/:id", async (req, res) => {
//     try {
//         const {id} = req.params;
//         const user = await User.findById(id);

//         if (!user) {
//             return res.status(404).json({message: "User not found"});
//         }
//         res.status(200).json(user);
//     } catch (error) {
//         res.status(500).json({message: error.message});
//     }
// });

// app.put("/api/users/:id", async (req, res) => {
//     try {
//         const { id } = req.params;
//         const user = await User.findByIdAndUpdate(id, req.body);

//         if (!user) {
//             return res.status(404).json({message: "user not found"});
//         }
        
//         res.status(200).json(updateduser);
//     } catch (error) {
//         res.status(500).json({message: error.message});
//     } 
// });

// app.delete("/api/user/:id", async (req,res) => {
//     try{
//         const {id} = req.params;
//         const user = await User.findByIdAndDelete(id);
//         if (!user) {
//             return res.status(404).json({message: "user not found"});
//         }
//      res.status(200).json({message: "User successfully deleted", user: user});
//     } catch (error) {
//         res.status(500).json({message: error.message});
//     } 
// });



mongoose.connect(process.env.mongodb)
.then (() => {
    console.log("connected to database!");
})
.catch(() => {
    console.log("connected failed")
});


app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});


