const Customer = require("./../models/customer");
const controller = {};

controller.getAll = async (req, res) => {
  try {
    const customers = await Customer.findAll();
    res.status(200).json(customers);
  } catch (error) {
    res.status(500).json(error);
  }
}

controller.getById = async (req, res) => {
  const customerId = req.params.id;
  try {
    const customer = await Customer.findByPk(customerId);
    res.status(200).json(customer);
  } catch (error) {
    res.status(422).json(`Erro ao buscar cliente. ${error}`);
  }
}

controller.getByCityName = async (req, res) => {
  const cityName = req.params.cityName;
  try {
    const customer = await Customer.findAll({
      where: {
        cidade: cityName
      }
    });
    res.status(200).json(customer);
  } catch (error) {
    res.status(422).json(`Erro ao buscar cliente. ${error}`);
  }
}

controller.create = async (req, res) => {
  const reqCustomer = req.body;
  try {
    const newCustomer = await Customer.create({
      nome: reqCustomer.nome,
      email: reqCustomer.email,
      cidade: reqCustomer.cidade,
      estado: reqCustomer.estado,
      cep: reqCustomer.cep
    });
    res.status(200).redirect("/");
  } catch (error) {
    res.status(422).json(`Erro ao cadastrar cliente. ${error}`);
  }
}

controller.update = async (req, res) => {
  const reqCustomer = req.body;
  const customerId = req.params.id;
  try {
    const customer = await Customer.update({
      nome: reqCustomer.nome,
      email: reqCustomer.email,
      cidade: reqCustomer.cidade,
      estado: reqCustomer.estado,
      cep: reqCustomer.cep
    }, {
      where: {
        id: customerId
      }
    });
    res.status(200).redirect("/");
  } catch (error) {
    res.status(422).json(`Erro ao atualizar cliente. ${error}`);
  }
}

controller.delete = async (req, res) => {
  const customerId = req.params.id;
  try {
    const customer = await Customer.destroy({
      where: {
        id: customerId
      }
    });
    res.status(200).redirect("/");
  } catch (error) {
    res.status(422).json(`Erro ao excluir cliente. ${error}`);
  }
}

module.exports = controller;
