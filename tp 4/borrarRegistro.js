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
    firstName: {
        type: Sequelize.STRING,
        allowNull: false
    },
    lastName: {
        type: Sequelize.STRING
    }
}, {
    sequelize,
    modelName: 'datos'
});


//elimina el club con id =5
sequelize.query('DELETE FROM datos where id=5')



.then(() => {
    console.log("El registro se elimino correctamente");
});