import pg from 'pg'

const { Pool } = pg
const pool = new Pool({
  host: 'localhost',
  port: '5432',
  user: 'postgres',
  password: 'Ha900218',
  database: 'wp1_demo_61',
})

console.log('connecting local database', pool.options.database)

async function testDB() {
  try {
    const result = await pool.query(`select * from blog_61`)
    console.log(result.rows)
  } catch (e) {
    console.log(e)
  }
}

testDB()

export default pool
