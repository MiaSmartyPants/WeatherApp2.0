const Pool = require('pg').Pool
const pool = new Pool({
  user: 'me',
  host: 'localhost',
  database: 'weather',
  password: 'password',
  port: 5432,
})


const getFavoriteCity = (request, response) => {
    pool.query('SELECT * FROM users ORDER BY id ASC', (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).json(results.rows)
    })
  }


const postFavoriteCity = (request, response) => {
  
    const { name, location} = request.body; 
    console.log(request.body)
  
    pool.query('INSERT INTO users (name, favorite_city) VALUES ($1, $2) RETURNING *', [name, location], (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).json(results.rows)
    })
  }

  module.exports = {
      postFavoriteCity,
      getFavoriteCity,

  }