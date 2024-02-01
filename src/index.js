const express = require('express');
const cors = require('cors');
const customerRoutes = require('./services/customers/customer');
const databasePool = require('./db/connection');

const app = express();
const PORT = process.env.PORT || 4000;

// Enable CORS for all routes with a wildcard '*'
app.use(cors('*'));

app.use(express.json());

databasePool.init();

app.use('/api', customerRoutes);

app.listen(PORT, () => {
  console.log(`=> Server is running on port ${PORT}`);
});


// test();

// con.connect(function (err) {
//   if (err) throw err;
//   console.log("Connected!");
//   // var sql = "CREATE TABLE customers (name VARCHAR(255), address VARCHAR(255))";
//   // var sql = "ALTER TABLE customers ADD COLUMN id INT AUTO_INCREMENT PRIMARY KEY";
//   // var sql = "INSERT INTO customers (name, address) VALUES ('Company Inc', 'Highway 37')";
//   // var sql = "SELECT * FROM customers";
//   // var sql = "SELECT * FROM customers WHERE address = 'Park Lane 38'";
//   // var sql = "SELECT * FROM customers WHERE address LIKE 'S%'";
//   // var adr = 'Mountain 21';
//   // var sql = 'SELECT * FROM customers WHERE address = ' + mysql.escape(adr);
//   // var sql = "SELECT * FROM customers ORDER BY name DESC";
//   // var sql = "DELETE FROM customers WHERE address = 'Mountain 21'";
//   // var sql = "DROP TABLE customers";
//   // var sql = "UPDATE customers SET address = 'Canyon 123' WHERE address = 'Valley 345'";
//   // pagination
//   // Note: The numbers are reversed: "LIMIT 2, 5" is the same as "LIMIT 5 OFFSET 2"
//   // var sql = "SELECT * FROM customers LIMIT 2, 5";
//   // con.query(sql, function (err, result) {
//   //   if (err) throw err;
//   //   console.log("Table altered");
//   // });
// });


// var adr = 'Mountain 21';
// var sql = 'SELECT * FROM customers WHERE address = ?';
// con.query(sql, [adr], function (err, result) {
//   if (err) throw err;
//   console.log(result);
// });

// previousSearche?.length > 0 ? previousSearches.map((d) => <p>{d}</p>) : <></>


