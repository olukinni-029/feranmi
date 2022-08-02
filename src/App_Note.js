require('dotenv').config();
const express = require('express');
const connectDB =require('./Database/db');
const noteRouter =require('./routes/note.routes');

const app = express();

connectDB();

app.use(express.json());

const port=process.env.PORT || 3000;

app.get('/',(req,res) => {
    res.send('Digital Note');
});
app.use('/api', noteRouter);

app.listen(port,()=>{
    console.log(`Server up and running on port:${port}`);
});
