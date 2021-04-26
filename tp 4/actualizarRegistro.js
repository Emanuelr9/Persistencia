const Sequelize = require('sequelize');

const sequelize = new Sequelize('club', 'root', 'Vegeta1000', {
    host: 'localhost',
    dialect: 'mariadb' /* one of 'mysql' | 'mariadb' | 'postgres' | 'mssql' */
});

sequelize
    .authenticate()
    .then(() => {
        console.log('Connection has been established successfully.');
    })
    .catch(err => {
        console.error('Unable to connect to the database:', err);
    });



const Model = Sequelize.Model;
class User extends Model {}
User.init({
    nombre: {
        type: Sequelize.STRING,
        allowNull: false
    },
    ciudad: {
        type: Sequelize.STRING,
    },
    socios: {
        type: Sequelize.INTEGER
    }


}, {
    sequelize,
    modelName: 'datos'
});


//actualiza registro
sequelize.query('UPDATE datos SET socios = "75000" where nombre="Arsenal"')

.then(() => {
    console.log("Update correcto");
});