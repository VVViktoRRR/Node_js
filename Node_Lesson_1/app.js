const path = require('path')
const fs = require('fs')

// Створити основну папку (main)

// fs.mkdir(path.join(__dirname, 'main'), (err) => {
//     if (err) {
//         console.log(err)
//         throw err
//     }
// })
// ___________________________________________________________________________________

// в яку покласти дві інші папки: перша - online, друга - inPerson

// fs.mkdir(path.join(__dirname, 'main', 'online'), {recursive: true}, (err) => {
//     if (err) {
//         console.log(err)
//         throw err
//     }
// })
//
//
// fs.mkdir(path.join(__dirname, 'main', 'inPerson'), {recursive: true}, (err) => {
//     if (err) {
//         console.log(err)
//         throw err
//     }
// })

// ___________________________________________________________________________________
// отім створити в вашому головному файлі (для прикладу app.js) два масиви з обєктами user
// ({. name: "Andrii", age: 22, city: "Lviv" }),  відповідно перший - onlineUsers, другий - inPersonUsers;
const onlineUsers = [
    { name: "Viktor", age: 37, city: "Odessa" }
];
const inPersonUsers = [
    { name: "Vova", age: 30, city: "Kyiv" }
]

// fs.writeFile(path.join(__dirname, 'main', 'online', 'onlineUsers.txt'),
//     '\nNAME:Viktor, \nAge:37, \nCITY:Odessa', (err) =>{
//     if(err) {
//         console.log(err);
//         throw err;
//     }
// })
// fs.writeFile(path.join(__dirname, 'main', 'inPerson', 'inPersonUsers.txt'),
//     '\nNAME:Vova, \nAge:30, \nCITY:Kyiv', (err) =>{
//         if(err) {
//             console.log(err);
//             throw err;
//         }
//     })
// ___________________________________________________________________________________
// Коли ви це виконаєте напишіть функцію яка буде міняти місцями юзерів з одного файлу і папки в іншу.
// (ті, що були в папці inPerson будуть в папці online)

// fs.rename(path.join(__dirname, 'main', 'online', 'onlineUsers.txt'),
//          path.join(__dirname,'main', 'inPerson', 'inPersonUsers2.txt' ), (err) =>{
//     if(err) {
//         console.log(err);
//         throw err
//     }
//     })
//
// fs.rename(path.join(__dirname, 'main', 'inPerson', 'inPersonUsers.txt'),
//     path.join(__dirname,'main', 'online', 'onlineUsers.txt' ), (err) =>{
//         if(err) {
//             console.log(err);
//             throw err
//         }
//     })
// fs.rename(path.join(__dirname, 'main', 'inPerson', 'inPersonUsers2.txt'),
//     path.join(__dirname,'main', 'inPerson', 'inPersonUsers.txt' ), (err) =>{
//         if(err) {
//             console.log(err);
//             throw err
//         }
//     })
// ___________________________________________________________________________________