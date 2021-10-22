const express = require('express')
const app = express();
app.use(express.json())
const cors = require('cors')

app.use(cors())
const port = 5000;

app.get('/', (req, res) => {
    res.send('wow i am node.how are you not to worry')
})
const users = [
    { id: 0, name: 'akbar', email: 'akbar@gamil.com', phone: '031123456' },
    { id: 1, name: 'babar', email: 'babar@gamil.com', phone: '031123456' },
    { id: 2, name: 'ciku', email: 'ciku@gamil.com', phone: '031123456' },
    { id: 3, name: 'dihan', email: 'dihan@gamil.com', phone: '031123456' },
    { id: 4, name: 'elias', email: 'elias@gamil.com', phone: '031123456' },
    { id: 5, name: 'faruk', email: 'faruk@gamil.com', phone: '031123456' }
]

app.get('/users', (req, res) => {
    const searched = (req.query.search)
    if (searched) {
        const searchResult = users.filter(user => user.name.toLowerCase().includes(searched));
        res.send(searchResult)
    }
    else {
        res.send(users)
    }
})

app.post('/users', (req, res) => {
    const newUser = req.body;
    newUser.id = users.length;
    users.push(newUser);
    console.log('hitting the post', req.body)
    res.json('inside post');
})

app.get('/users/:id', (req, res) => {
    const index = req.params.id;
    // console.log(index)
    const user = users[index]
    res.send(user)
})
app.get('/fruits/mangos/fazli', (req, res) => {
    res.send('yammmii yammi')
})

app.listen(port, () => {
    console.log('listening from ...', port)
})