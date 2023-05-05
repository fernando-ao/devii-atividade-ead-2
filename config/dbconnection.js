const sequelize = require("sequelize");

const connection = new sequelize("dbatividade", "root", "", {
  host: "localhost",
  dialect: "mysql",
  define: {
    timestamps: false,
    freezeTableName: true
  }
});

try {
  connection.authenticate();
  console.log("Conexão com o banco de dados estabelecida com sucesso.")
} catch (error) {
  console.error(`Não foi possível conectar ao banco de dados: ${error}`);
}

module.exports = connection;
