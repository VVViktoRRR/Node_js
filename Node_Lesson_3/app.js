const path = require('path')
const fs = require('fs')
const express = require('express')
const { engine} = require('express-handlebars')

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true}));

app.use(express.static(path.join(__dirname, 'static')));
app.set('view engine', '.hbs');
app.engine('.hbs', engine({ defaultLayout: false }));
app.set('views', path.join(__dirname, 'static'));

const users = [];
let error = '';
app.get('/login', (req, res) => {
    res.render('login')
})

app.post('/login', (req, res) => {
    const emailExam = users.some(user => user.email === req.body.email)
    if (emailExam) {
        error = 'This email is busy !!!';
        res.redirect('/error')
        return;
    }
    users.push({...req.body, id:users.length ? users[users.length-1].id +1 : 1});
    res.redirect('/users');
})

app.get('/users', ({query}, res) => {
    if (Object.keys(query).length) {
        let queryArr = [...users];
        if (query.city) {
            queryArr = queryArr.filter(user => user.city === query.city)
        }
        if (query.age) {
            queryArr = queryArr.filter(user => user.age === query.age)
        }
        res.render('users', { users: queryArr });
        return;
    }
    res.render('users', { users });
})

app.get('/error', (req, res) => {
    res.render('error', { error })
})

app.get('/users/:userId', ({params}, res) => {
    const user = users.find(user => user.id === +params.userId);
    if (!user) {
        error = `User with ID: ${params.userId} not exist`;
        res.redirect('/error')
        return;
    }
    res.render('user', {user});
})

app.use((req, res) => {
    res.render('notFound')
})

app.listen( 5200, ()=> {
    console.log('Serves has started on PORT 5200')
})