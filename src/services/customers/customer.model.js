const db = require('../../db/connection');

class CustomerModel {
  async insert(customerData) {
    try {
      const query = 'INSERT INTO customers (name, address) VALUES (?, ?)';
      const values = [customerData.name, customerData.address];
      const result = await db.execute(query, values);
      return result.insertId;
    } catch (error) {
      console.error('Error inserting customer:', error);
      throw error;
    }
  }

  async getAll() {
    try {
      const result = await db.execute('SELECT * FROM customers');
      return result;
    } catch (error) {
      console.error('Error getting all customers:', error);
      throw error;
    }
  }
}

module.exports = new CustomerModel();
