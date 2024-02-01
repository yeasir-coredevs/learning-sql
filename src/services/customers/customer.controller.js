const customerModel = require('./customer.model');

const insert = async (req, res) => {
  try {
    const customer = await customerModel.insert(req.body);
    res.status(201).send({ insertedId: customer });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

const getAll = async (req, res) => {
  try {
    const customers = await customerModel.getAll();
    return res.send(customers);
  } catch (error) {
    console.log(error);
    res.status(500).send({ error: 'Internal Server Error' });
  }
};

module.exports = { insert, getAll };
