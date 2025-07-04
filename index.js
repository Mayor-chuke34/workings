const  express = require ('express');
const  mongoose = require ('mongoose') ;
const Product = require('./models/product.model.js');
const User = require('./models/user.model.js');

const app = express();
const PORT = 3000;
app.use (express.json ());

app.get('/', (req, res) => {
    res.send('Hello, Express is running!');
});


app.post('/api/products',async (req, res) =>{
    try {
        const product = await Product.create(req.body);
        res.status(200).json(product);
    } catch (error) {
        res.status(500).json({message:error.message});
    };
});

    app.get('/api/products',async (req, res) =>{
    try {
        const product = await Product.find({});
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({message:error.message});
    };
});

app.get('/api/product/:id', async (req, res) => {
    try {
        const {id} = req.params;
        const product = await Product.findById(id);
        res.status(200).json(product);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
});


app.put("/api/products/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const product = await Product.findByIdAndUpdate(id, req.body);

        if (!product) {
            return res.status(404).json({message: "Product not found"});
        }
        
        const updatedproduct = await Product.findById(id);
        res.status(200).json(updatedproduct)
    } catch (error) {
        res.status(500).json({message: error.message});
    } 
});

app.delete("/api/products/:id", async (req,res) => {
    try{
        const {id} = req.params;
        const product = await Product.findByIdAndDelete(id);
        if (!product) {
            return res.status(404).json({message: "product not found"});
        }
        const deleteproduct = await Product.findById(id);
        res.status(200).json(deleteproduct)
    } catch (error) {
        res.status(500).json({message: error.message});
    } 
});


app.post("/api/users",async (req, res) =>{
    try {
        const user = await User.create(req.body);
        res.status(201).json(user);
    } catch (error) {
        res.status(500).json({message:error.message});
    };
});

app.get("/api/users",async (req, res) =>{
    try {
        const user = await User.find({});
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({message:error.message});
    };
});

app.get("/api/users/:id", async (req, res) => {
    try {
        const {id} = req.params;
        const user = await User.findById(id);
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
});

app.put("/api/users/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const user = await User.findByIdAndUpdate(id, req.body);

        if (!user) {
            return res.status(404).json({message: "user not found"});
        }
        
        const updateduser = await User.findById(id);
        res.status(200).json(updateduser)
    } catch (error) {
        res.status(500).json({message: error.message});
    } 
});

app.delete("/api/user/:id", async (req,res) => {
    try{
        const {id} = req.params;
        const user = await User.findByIdAndDelete(id);
        if (!user) {
            return res.status(404).json({message: "user not found"});
        }
        const deleteuser = await User.findById(id);
        res.status(200).json(deleteuser)
    } catch (error) {
        res.status(200).json({message: "user successfully deleted"});
    } 
});



mongoose.connect('mongodb+srv://chukwuka:C2IM3zyClhH0aoCq@cluster0.jrglgbx.mongodb.net/Node-API?retryWrites=true&w=majority&appName=Cluster0 ')
.then (() => {
    console.log("connected to database!");
})
.catch(() => {
    console.log("connected failed")
});


app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});


