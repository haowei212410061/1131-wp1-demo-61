import { useState, useEffect } from 'react'
import Blog_61 from '../../components/Blog_61'
import MenuItem_61 from '../../components/mid_xx/MenuItem_61'
// let api_url = `http://localhost:3000/api/blog_xx`

import { supabase } from '../../db/clientSupabase'
const P3Page_61 = () => {
  const [menu, setMenu] = useState([])
  const fetchBlogsFromSupabase = async () => {
    try {
      let { data, error } = await supabase.from('menu_61').select('*')
      // const response = await fetch(api_url)
      // const data = await response.json()
      console.log('supabase menu', data)
      setMenu(data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    fetchBlogsFromSupabase()
  }, [])

  return (
    <>
      <section className='menu-demo'>
        <div className='section-center'>
          <section className='menu'>
            <div className='title'>
              <h2>MidP2Page: Hsingtai, 123456789</h2>
              <div className='underline'></div>
            </div>
            <div className='btn-container'>
              <button type='button' className='filter-btn' data-id='all'>
                all
              </button>
              <button type='button' className='filter-btn' data-id='breakfast'>
                breakfast
              </button>
              <button type='button' className='filter-btn' data-id='lunch'>
                lunch
              </button>
              <button type='button' className='filter-btn' data-id='dessert'>
                dessert
              </button>
              <button type='button' className='filter-btn' data-id='shakes'>
                shakes
              </button>
            </div>
            <div className='section-center'>
              {menu?.map((item) => {
                const { id, img, title, price, category, descrip } = item
                return (
                  <MenuItem_61
                    key={id}
                    id={id}
                    img={`${img}`}
                    title={title}
                    category={category}
                    price={price}
                    descrip={descrip}
                  />
                )
              })}
            </div>
          </section>
        </div>
      </section>
    </>
  )
}
export default P3Page_61
