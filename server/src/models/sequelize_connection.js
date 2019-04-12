import Sequelize from 'sequelize';

export const db = new Sequelize('fullstackdemo', 'root', '', {
    // host :'0.0.0.0',
    host :'0.0.0.0',
    dialect:'mysql',
    operatorsAliases: false,
    port:3306
})

db.authenticate().then(()=>{
    console.log('Connection has been established sucessfully')
    
}).catch(err=>{
    console.error('Unable to connect to the database ==> ', err.message)
});


// db.query('SELECT * FROM employee').then(result=>{
//     console.log('query result', result)
// }).catch(err=>{
//     console.log('query error', err)

// })