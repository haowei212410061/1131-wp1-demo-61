import express from 'express'
import db from './utils/database.js'

const app = express()
const port = process.env.PORT || 5000

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static('public'))
app.set('view engine', 'ejs')

app.get('/blog_61', async (req, res) => {
  try {
    const result = await db.query(`select * from blog_61`)
    console.log('blog', JSON.stringify(result.row))
    res.render('blog_xx.ejs', { blogs: result.rows, pinfo: '周浩偉 212410061' })
    res.json(result.rows)
  } catch (e) {
    console.log(e)
  }
})

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
