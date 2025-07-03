const  express = require ('express');
const  mongoose = require ('mongoose') ;
const Product = require('./models/product.model.js');

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
        const product = await Product.find(req.body);
        res.status(200).json(product);
    } catch (error) {
        res.status(500).json({message:error.message});
    };
});

app.get('/api/products/:id', async (req, res) => {
    try {
        const {id} = req.params;
        const product = await Product.findById(id);
        res.status(200).json(product);
    } catch (error) {
        res.status(500).json({message: error.message});
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


app.get("/", (req, res) => {
    res.send("Hello from home");''
});