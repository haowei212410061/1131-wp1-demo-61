import express from 'express'
import db from '../../utils/database.js'
const router = express.Router()

router.get('/', async (req, res) => {
  try {
    const result = await db.query('select * from blog_61')
    res.json(result.rows)
  } catch (e) {
    console.log(e)
  }
})

export default router
