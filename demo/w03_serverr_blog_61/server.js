import express from 'express'
import db from './utils/database_supabase.js'

const app = express()
const port = process.env.PORT || 5000
app.get('/api/blog_61', async (req, res) => {
  try {
    const result = await db.query(`select * from blog_61`)
    res.json(result.rows)
  } catch (e) {
    console.log(e)
  }
})

app.use('/', (req, res) => {
  res.send('周浩偉 , 212410061')
})

app.listen(port, () => {
  console.log(`Server running on port ${port}`)
})
