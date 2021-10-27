const express = require('express');
const cors = require('cors')
const app = express();

app.use(cors())
app.use(express.json());

const port = 5000;
// const port = process.env.PORT || 3000;



app.get('/', (req, res) =>{
    res.send('WOW!! i am excited to learning Node & express with nodemon')
} );

const users = [
    {id: 0, name:'Sanbana', email:'sabana@gmail.com'},
    {id: 1, name:'Srabonti', email:'Srabonti@gmail.com'},
    {id: 2, name:'Suchorita', email:'Suchorita@gmail.com'},
    {id: 3, name:'Suity', email:'Suity@gmail.com'},
    {id: 4, name:'Soniya', email:'Soniya@gmail.com'},
    {id: 5, name:'Summiya', email:'Summiya@gmail.com'},
] 

app.get('/users', (req, res) =>{
    const search = req.query.search;
    // use query parameeter 
    if(search){
        const searchResult = users.filter(user => user.name.toLocaleLowerCase().includes(search));
        res.send(searchResult)
    }
    else{
        res.send(users)
    }
});

// app.method 
app.post('/users', (req, res) =>{
    const newUser = req.body;
    newUser.id = users.length;
    users.push(newUser);
    console.log('hitting the post', req.body);
    // res.send(JSON.stringify(newUser))
    res.json(newUser)
})

app.get('/fruits', (req, res) =>{
    res.send(['mango', 'oranges', 'banana','apple'])
});

// dynamic api
app.get('/users/:id', (req, res) =>{
    const id = req.params.id;
    const user = users[id];
    res.send(user);
})
app.get('/fruits/mangos/fazli', (req, res)=>{
    res.send('Yummy yummi tok marka fozli')
})

app.listen(port, () =>{
    console.log('Listening to port', port);
});