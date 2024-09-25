import pg from 'pg'

const { Pool } = pg
const pool = new Pool({
  host: 'aws-0-ap-southeast-1.pooler.supabase.com',
  port: '6543',
  user: 'postgres.csutzncxyvmaoeujpols',
  password: 'fgerfewrfewrfe123',
  database: 'postgres',
})

console.log('connecting supabase', pool.options.database)

// async function testDB() {
//   try {
//     const result = await pool.query(`select * from blog_61`)
//     console.log(result.rows)
//   } catch (e) {
//     console.log(e)
//   }
// }

// testDB()

export default pool
