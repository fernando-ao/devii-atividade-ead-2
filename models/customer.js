const DataTypes = require("sequelize");
const db = require("./../config/dbconnection");

const customer = db.define("cliente", {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true
  },
  nome: {
    type: DataTypes.STRING,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false
  },
  cidade: {
    type: DataTypes.STRING,
    allowNull: false
  },
  estado: {
    type: DataTypes.STRING,
    allowNull: false
  },
  cep: {
    type: DataTypes.STRING,
    allowNull: false
  }
});

(async () => {
  try {
    await customer.sync();
    console.log("Tabela criada com sucesso.")
  } catch (error) {
    console.error(`Não foi possível conectar ao banco de dados: ${error}`);
  }
})();
