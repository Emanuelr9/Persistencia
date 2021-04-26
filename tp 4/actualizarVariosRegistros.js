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

//Se actualizan varios registros al mismo tiempo

sequelize.query('UPDATE datos SET socios = "53000" where nombre="Atletico"'),
    sequelize.query('UPDATE datos SET socios = "71000" where nombre="Arsenal"'),
    sequelize.query('UPDATE datos SET socios = "80000" where nombre="Fc Porto"')


.then(() => {
    console.log("Update correcto");
});