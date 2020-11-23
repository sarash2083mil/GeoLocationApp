const { Pool, Client } = require('pg')
// pools will use environment variables
// for connection information
details = {
  user: 'postgres',
  host: 'localhost',
  database: 'geo-location',
  password: '1234',
  port: 5432,
}
const pool = new Pool(details);
pool.query('SELECT NOW()', (err, res) => {
 // console.log(err, res)
  pool.end()
})

const client = new Client(details);


client.connect()
const insertRow = (row) =>{
const insertText = 'INSERT INTO distances(source, destination, distance) VALUES($1, $2, $3) RETURNING *';
const getDistanceText = 'SELECT distance from distances where source=$1 and destination=$2';
const values = ['Paris', 'London',1200];
  client.query(insertText,values, (err, res) => {
  if (err) {
    console.log(err.stack)
  } else {
    console.log(res.rows[0])
  }
})
}



const getDistance = (condition) =>{
  const conditionValues = ['Paris', 'London'];
  client.query(getDistanceText, conditionValues, (err, res) => {
    if (err) {
      console.log(err.stack);
    } else {
      console.log(res.rows[0]);
    }
  });
}

module.exports = {
  getDistance,
  insertRow
}

