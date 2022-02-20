// 1. /login, поля які треба відрендерити в файлі hbs: firstName, lastName, email(унікальне поле), password, age, city
// просто зробити темплейт з цим усім і вводити свої дані які будуть пушитися в масив і редірект робити на сторінку
// з усіма юзерами /users і перевірка чи такий імейл не існує, якщо існує то редірект на еррор пейдж
// 2. /users просто сторінка з усіма юзерами, але можна по квері параметрам їх фільтрувати по age і city
// 3. /user/:id сторінка з інфою про одного юзера
// 4. зробити якщо не відпрацюють ендпоінти то на сторінку notFound редірект

const path = require('path')
const express = require('express')
const { engine} = require('express-handlebars')

const app_lesson_2 = express();
app_lesson_2.use(express.json());
app_lesson_2.use(express.urlencoded({ extended: true}));

app_lesson_2.use(express.static(path.join(__dirname, 'static')));
app_lesson_2.set('view engine', '.hbs');
app_lesson_2.engine('.hbs', engine({ defaultLayout: false }));
app_lesson_2.set('views', path.join(__dirname, 'static'));

const users = [];
let error = '';
app_lesson_2.get('/login', (req, res) => {
    res.render('login')
})

app_lesson_2.post('/login', (req, res) => {
    const emailExam = users.some(user => user.email === req.body.email)
         if (emailExam) {
            error = 'This email is busy !!!';
            res.redirect('/error')
            return;
    }
    users.push({...req.body, id:users.length ? users[users.length-1].id +1 : 1});
    res.redirect('/users');
})

app_lesson_2.get('/users', ({query}, res) => {
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

app_lesson_2.get('/error', (req, res) => {
    res.render('error', { error })
})

app_lesson_2.get('/users/:userId', ({params}, res) => {
    const user = users.find(user => user.id === +params.userId);
    if (!user) {
        error = `User with ID: ${params.userId} not exist`;
        res.redirect('/error')
        return;
    }
    res.render('user', {user});
})

app_lesson_2.use((req, res) => {
    res.render('notFound')
})

app_lesson_2.listen( 5200, ()=> {
    console.log('Serves has started on PORT 5200')
})
