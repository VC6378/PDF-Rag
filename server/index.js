import express from 'express';
import cors from 'cors'; 

const app = express();
app.use(cors());

app.get('/',(req,res)=>{
    return res.json({
        status:'all gooooooooooood'
    })
})

app.post('/upload/pdf')

app.listen(8000,()=> console.log(`Server is running on port:${8000}`));
