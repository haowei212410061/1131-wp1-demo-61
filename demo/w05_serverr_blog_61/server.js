import express from 'express'
import db from './utils/database.js'
import apiBlogRouter from './routes/api/apiBlogRouter.js'
import blogRouter from './routes/api/blogRouter.js'
const app = express()
const port = process.env.PORT || 5000

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static('public'))
app.set('view engine', 'ejs')

app.use('/blog_61', blogRouter)

app.use('/api/blog_61', apiBlogRouter)

app.use('/', (req, res) => {
  res.send('周浩偉 , 212410061')
})

app.listen(port, () => {
  console.log(`Server running on port ${port}`)
})
