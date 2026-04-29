const express = require('express');
// create an express app object by calling the express function
const bodyParser=require('body-parser')
const app = express();

const PORT = 3002;

app.use(bodyParser.urlencoded({extended:true})) //for reading the input from body allows Express app 
//to read data sent from HTML forms (application/x-www-form-urlencoded).

app.use(bodyParser.json()); //parses JSON data coming in request body and makes it available in req.body

//app.use(express.json()) //it prints only this empty object {} not the body content or any content


//mimic the db using an array
let blogsList=[];

app.get('/blogs',(req,res)=>{
    return res.status(200).json({
        data:blogsList,
        success:true,
    })
})

app.post('/blogs',(req,res)=>{
    console.log(req.body) //prints undefined because by default we cannot access the request body as body data is sensitive
    //to print this we need to use the body parser middleware which is used to parse the incoming 
    //request bodies in a middleware

    console.log(req.query)

    blogsList.push({
        title:req.body.title,
        content:req.body.content,
        id:Math.floor(Math.random()*1000)
    })
    return res.status(201).json({
        success:true
    })
})

app.get('/blogs/:id',(req,res)=>{
    //console.log(req.params) //it prints object in json in (key-value) pair (here id is the key)

    const id = req.params.id; //it is used to get the id from the url
    const result = blogsList.filter((blog) => blog.id == id) //callback function blog is used to iterate over the array

    return res.status(200).json({
        data:result,
        success:true
    })
})

app.delete('/blogs/:id', (req, res) => {
    const id = req.params.id;

    blogsList = blogsList.filter((blog) => blog.id != id);

    return res.status(200).json({
        success: true,
        data: blogsList
    });
});


app.listen(PORT,()=>{
    console.log("server started on PORT ",PORT)
})